from fastapi import APIRouter

from auth.utils import fastapi_users, auth_backend
from auth.schemas import UserOut, UserCreate

router = APIRouter(prefix="/api", tags=["auth"])

router.include_router(
    fastapi_users.get_register_router(UserOut, UserCreate)
)
router.include_router(
    fastapi_users.get_auth_router(auth_backend)
)
router.include_router(
    fastapi_users.get_reset_password_router()
)
