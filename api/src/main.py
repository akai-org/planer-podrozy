# root of the project, which inits the FastAPI app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.config import CORS_ORIGINS
from api.database import create_db_and_tables, engine
from auth import models, router

app = FastAPI()

app.include_router(router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def init_tables():
    await create_db_and_tables()


# @app.on_event("startup")
# async def startup():
#     await database.connect()
#
#
# @app.on_event("shutdown")
# async def shutdown():
#     await database.disconnect()
#
#
# @app.get("/")
# def read_root():
#     return {"Hello": "World"}
