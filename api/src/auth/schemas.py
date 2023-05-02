from datetime import datetime

from fastapi_users import schemas

from pydantic import BaseModel, EmailStr
from sqlalchemy import Integer


class UserCreate(schemas.BaseUserCreate):
    pass


class UserOut(schemas.BaseUser[Integer]):
    pass


class Message(BaseModel):
    message: str


class Token(BaseModel):
    token: str
    token_type: str
