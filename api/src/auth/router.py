from auth.schemas import UserCreate, UserOut
from auth.utils import auth_backend, fastapi_users
from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["auth"])

router.include_router(fastapi_users.get_register_router(UserOut, UserCreate))
router.include_router(fastapi_users.get_auth_router(auth_backend))
router.include_router(fastapi_users.get_reset_password_router())
