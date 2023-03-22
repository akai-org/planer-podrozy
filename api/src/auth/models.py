from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from sqlalchemy import Column
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP


class Base(DeclarativeBase):
    pass


class User(SQLAlchemyBaseUserTableUUID, Base):
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )


# class User(Base):
#     __tablename__ = "users"
#
#     id = Column(Integer, primary_key=True, nullable=False)
#     email = Column(String, unique=True, nullable=False)
#     password = Column(String, nullable=False)
#     created_at = Column(
#         TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
#     )
