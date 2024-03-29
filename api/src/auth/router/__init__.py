from fastapi import APIRouter

from src.auth.schemas import UserCreate, UserOut, UserRead, UserUpdate
from src.auth.utils import auth_backend, fastapi_users

router = APIRouter(prefix="/api", tags=["auth"])

router.include_router(fastapi_users.get_register_router(UserOut, UserCreate))
router.include_router(
    fastapi_users.get_auth_router(auth_backend, requires_verification=True)
)
router.include_router(fastapi_users.get_reset_password_router())
router.include_router(fastapi_users.get_users_router(UserRead, UserUpdate))
router.include_router(fastapi_users.get_verify_router(UserRead))
