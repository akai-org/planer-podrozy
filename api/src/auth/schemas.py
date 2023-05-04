from fastapi_users import schemas
from pydantic import BaseModel
from sqlalchemy import Integer


class UserCreate(schemas.BaseUserCreate):
    nickname: str


class UserOut(schemas.BaseUser[Integer]):
    nickname: str


class CredentialsSchema(BaseModel):
    username: str
    password: str
