from typing import Optional

from fastapi import Depends, Request
from fastapi_users import BaseUserManager, IntegerIDMixin, exceptions, models, schemas
from sqlalchemy import Integer
from sqlalchemy.exc import IntegrityError

from auth.exceptions import NicknameAlreadyTaken
from auth.models import User, get_user_db
from auth.schemas import CredentialsSchema


class UserManager(IntegerIDMixin, BaseUserManager[User, Integer]):
    async def authenticate(
            self, credentials: CredentialsSchema
    ) -> Optional[models.UP]:
        """
        Authenticate and return a user following an email and a password.
        Will automatically upgrade password hash if necessary.
        :param credentials: The user credentials.
        """
        try:
            user = await self.get_by_email(credentials.username)
        except exceptions.UserNotExists:
            # Run the hasher to mitigate timing attack
            # Inspired from Django: https://code.djangoproject.com/ticket/20760
            self.password_helper.hash(credentials.password)
            return None

        verified, updated_password_hash = self.password_helper.verify_and_update(
            credentials.password, user.hashed_password
        )
        if not verified:
            return None
        # Update password hash to a more robust one if needed
        if updated_password_hash is not None:
            await self.user_db.update(user, {"hashed_password": updated_password_hash})

        return user

    async def create(
            self,
            user_create: schemas.UC,
            safe: bool = False,
            request: Optional[Request] = None,
    ) -> models.UP:
        try:
            return await super().create(user_create, safe, request)
        except IntegrityError:
            raise NicknameAlreadyTaken()

    async def on_after_register(self, user: User, request: Optional[Request] = None):
        print(f"User {user.id} has registered.")

        print("User created: ", user.email)

        user.active = True

        await super().on_after_register(user, request)

    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"Verification requested for user {user.id}. Verification token: {token}")


async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
