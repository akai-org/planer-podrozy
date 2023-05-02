from fastapi import APIRouter
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import (AuthenticationBackend,
                                          BearerTransport, JWTStrategy)
from sqlalchemy import Integer

from api.config import SECRET
from auth.manager import get_user_manager
from auth.models import User
from .router.auth import get_auth_router


def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)


bearer_transport = BearerTransport(tokenUrl="auth/login")

auth_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)


class GuideMeUsers(FastAPIUsers[User, Integer]):
    def get_auth_router(
            self, backend: AuthenticationBackend, requires_verification: bool = False
    ) -> APIRouter:
        """
        Return an auth router for a given authentication backend.

        :param backend: The authentication backend instance.
        :param requires_verification: Whether the authentication
        require the user to be verified or not. Defaults to False.
        """
        return get_auth_router(
            backend,
            self.get_user_manager,
            self.authenticator,
            requires_verification,
        )


fastapi_users = GuideMeUsers(get_user_manager, [auth_backend])
current_active_user = fastapi_users.current_user(active=True)
