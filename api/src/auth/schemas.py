import uuid

from fastapi_users import schemas
from pydantic import BaseModel
from sqlalchemy import Integer
from typing import Optional


class UserCreate(schemas.BaseUserCreate):
    nickname: str


class UserOut(schemas.BaseUser[Integer]):
    nickname: str


class CredentialsSchema(BaseModel):
    username: str
    password: str


class UserUpdate(schemas.BaseUserUpdate):
    is_active: Optional[bool] = None
    is_superuser: Optional[bool] = None
    is_verified: Optional[bool] = None


class UserRead(schemas.BaseUser[uuid.UUID]):
    pass
