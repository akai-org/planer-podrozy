from api.database import Base
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP

from fastapi_users import BaseUserManager, IntegerIDMixin


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    active = Column(Boolean, nullable=False, default=False)


class UserManager(IntegerIDMixin, BaseUserManager[User, ]):
    async def on_after_register(self, user: User, request=None):

        print("User created: ", user.email)

        user.active = True
        await super().on_after_register(user, request)
