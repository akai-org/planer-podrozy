import json

import numpy as np

from solver.instance import Instance
from solver.place import Place
from solver.planer import Planer

with open("tests/1.json") as f:
    data = json.load(f)

places = [Place(**i) for i in data["places"]]
distance = np.array(data["distances"])

instance = Instance(places, distance)

planer = Planer()
planer.plan(instance)
