import uuid
from datetime import datetime

from fastapi_users import schemas


class UserCreate(schemas.BaseUserCreate):
    pass


class UserOut(schemas.BaseUser[uuid.UUID]):
    created_at: datetime

    class Config:
        orm_mode = True
