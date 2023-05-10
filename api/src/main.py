# root of the project, which inits the FastAPI app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.database import engine

from api.config import CORS_ORIGINS
from auth import models, router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
