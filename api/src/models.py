from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP


class Base(DeclarativeBase):
    pass


class User(SQLAlchemyBaseUserTableUUID, Base):
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
