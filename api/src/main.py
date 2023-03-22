# root of the project, which inits the FastAPI app
from auth import schemas, service
from config import CORS_ORIGINS
from database import create_db_and_tables
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(
    service.fastapi_users.get_register_router(schemas.UserOut, schemas.UserCreate),
    prefix="/auth",
    tags=["auth"],
)

# app.include_router(router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await create_db_and_tables()
    # await database.connect()


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
