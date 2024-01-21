import numpy as np
from typing import List

from solver.place import Place


class Instance:
    def __init__(self, places: List[Place], distance: np.ndarray):
        self.places = places
        self.size = len(places)

        assert distance.shape == (self.size, self.size)

        self.appeal = np.array([i.appeal for i in places])
        self.open_time = np.array([i.open_time for i in places])
        self.close_time = np.array([i.close_time for i in places])
        self.visit_time = np.array([i.visit_time for i in places])

        self.distance = distance
