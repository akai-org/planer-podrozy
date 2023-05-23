from typing import Optional, List

from fastapi_users import schemas
from pydantic import BaseModel
from sqlalchemy import Integer
from fastapi_mail import ConnectionConfig
from api.config import EMAIL, EMAIL_PASSWORD
from pydantic import BaseModel, EmailStr


conf = ConnectionConfig(
    MAIL_USERNAME=EMAIL,
    MAIL_PASSWORD=EMAIL_PASSWORD,
    MAIL_FROM=EMAIL,
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="Guide.me",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
    SUPPRESS_SEND=False,
)


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


class EmailSchema(BaseModel):
    email: List[EmailStr]