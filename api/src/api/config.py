# global configs
from decouple import config

# Database
POSTGRES_USER = config("POSTGRES_USER")
POSTGRES_PASSWORD = config("POSTGRES_PASSWORD")
POSTGRES_DB = config("POSTGRES_DB")
DATABASE_URL = (
    f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@postgres/{POSTGRES_DB}"
)

# CORS
CORS_ORIGINS = [
    f'http://{config("FRONTEND_URL")}',
    "http://127.0.0.0:8080",
    "http://localhost:8080",
]

SECRET = config("SECRET")

print(CORS_ORIGINS)
