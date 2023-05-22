from typing import Optional

from fastapi_users import schemas
from pydantic import BaseModel
from sqlalchemy import Integer


class UserCreate(schemas.BaseUserCreate):
    nickname: str


class UserOut(schemas.BaseUser[Integer]):
    nickname: str


class UserRead(schemas.BaseUser[Integer]):
    pass


class CredentialsSchema(BaseModel):
    username: str
    password: str


class UserUpdate(schemas.BaseUserUpdate):
    is_active: Optional[bool] = None
    is_superuser: Optional[bool] = None
    is_verified: Optional[bool] = None


class UserRead(schemas.BaseUser[Integer]):
    pass
