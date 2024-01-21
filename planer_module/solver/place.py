class Place:
    def __init__(
        self, name: str, open_time: int, close_time: int, visit_time: int, appeal: int
    ):
        self.name = name
        self.open_time = open_time
        self.close_time = close_time
        self.visit_time = visit_time
        self.appeal = appeal
