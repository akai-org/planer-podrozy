# db connection realted stuff
from typing import AsyncGenerator

from config import DATABASE_URL
from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase
from models import Base, User
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

# database = databases.Database(DATABASE_URL)
#
# metadata = sqlalchemy.MetaData()


engine = create_async_engine(DATABASE_URL)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)
# metadata.create_all(engine)

# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()
async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)


# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
