# db connection realted stuff
import databases
import sqlalchemy
from config import DATABASE_URL
from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# database = databases.Database(DATABASE_URL)
#
# metadata = sqlalchemy.MetaData()

engine = sqlalchemy.create_engine(DATABASE_URL)
# metadata.create_all(engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
