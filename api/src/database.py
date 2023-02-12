# db connection realted stuff
import databases
import sqlalchemy
from config import DATABASE_URL
from pydantic import BaseModel

print(DATABASE_URL)

database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()

engine = sqlalchemy.create_engine(DATABASE_URL)
metadata.create_all(engine)
