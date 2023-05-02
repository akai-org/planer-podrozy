from fastapi import APIRouter

from auth.schemas import UserCreate, UserOut
from auth.utils import auth_backend, fastapi_users

router = APIRouter(prefix="/api", tags=["auth"])

router.include_router(fastapi_users.get_register_router(UserOut, UserCreate))
# TODO: change requires verification to True when verification added
router.include_router(fastapi_users.get_auth_router(auth_backend, requires_verification=False))
router.include_router(fastapi_users.get_reset_password_router())