import numpy as np
import pulp as pl

from solver.instance import Instance


class Planer:
    def __init__(self, M = 10000):
        self.M = M

    def plan(self, instance):
        problem, r, w, x = self.make_definition(instance)
        self.make_goal(problem, r, w, x, instance)
        self.make_incidence_condition(problem, r, x, instance)
        self.make_route_condition(problem, r, instance)
        self.make_consistency_condition(problem, r, instance)
        self.make_time_condition(problem, r, w, x, instance)

        solution = problem.solve(pl.PULP_CBC_CMD(msg=False))

        if solution != 1:
            raise ValueError()

        place, time = np.nonzero([[k.value() for k in i] for i in r])
        result = list(zip(place, time))
        result.sort(key=lambda x: x[1])
        result = [instance.places[i[0]].name for i in result]

        print(result)

    def make_definition(self, instance: Instance):
        problem = pl.LpProblem("Route_planer")

        w = [
            pl.LpVariable(f"w_{i}", lowBound=0, cat=pl.LpInteger)
            for i in range(instance.size)
        ]
        r = [
            [pl.LpVariable(f"r_{i}_{k}", cat=pl.LpBinary) for k in range(instance.size)]
            for i in range(instance.size)
        ]
        x = [
            [
                [
                    pl.LpVariable(f"x_{i}_{j}_{k}", cat=pl.LpBinary)
                    for k in range(instance.size)
                ]
                for j in range(instance.size)
            ]
            for i in range(instance.size)
        ]

        return problem, r, w, x

    def make_goal(self, problem, r, w, x, instance: Instance):
        appeal = pl.lpSum(
            [instance.appeal[i] * pl.lpSum(r[i]) for i in range(instance.size)]
        )
        distance = pl.lpSum(
            [
                pl.lpSum(
                    [
                        instance.distance[i, j] * pl.lpSum(x[i][j])
                        for j in range(instance.size)
                    ]
                )
                for i in range(instance.size)
            ]
        )
        waiting_time = pl.lpSum(w)

        problem += -self.M**2 * appeal + self.M * distance + waiting_time

    def make_incidence_condition(self, problem, r, x, instance):
        for i in range(instance.size):
            problem += pl.lpSum(x[i][i]) <= 0

        for i in range(instance.size):
            for j in range(instance.size):
                for k in range(1, instance.size):
                    problem += x[i][j][k - 1] >= r[i][k - 1] + r[j][k] - 1

    def make_route_condition(self, problem, r, instance):
        for i in range(instance.size):
            problem += pl.lpSum(r[i]) <= 1

        for k in range(instance.size):
            problem += pl.lpSum([i[k] for i in r]) <= 1

    def make_consistency_condition(self, problem, r, instance):
        for k in range(1, instance.size):
            problem += pl.lpSum([i[k] for i in r]) <= pl.lpSum([i[k - 1] for i in r])

    def make_time_condition(self, problem, r, w, x, instance):
        visit_times = []

        for k in range(instance.size):
            visit_times.append(
                pl.lpSum(
                    [r[i][k] * instance.visit_time[i] for i in range(instance.size)]
                )
            )

        travel_times = []

        for k in range(instance.size):
            travel_times.append(
                pl.lpSum(
                    [
                        [
                            instance.distance[i, j] * x[i][j][k]
                            for j in range(instance.size)
                        ]
                        for i in range(instance.size)
                    ]
                )
            )

        time_spend = 0

        for k in range(instance.size):
            time_spend += w[k]

            for i in range(instance.size):
                problem += time_spend >= r[i][k] * instance.open_time[i]

            time_spend += visit_times[k]

            for i in range(instance.size):
                problem += time_spend - self.M * (1 - r[i][k]) <= r[i][k] * instance.close_time[i]

            time_spend += travel_times[k]