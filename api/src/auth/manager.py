from typing import Optional

from fastapi import Depends, Request

from api.config import SECRET
from auth.config import conf
from auth.exceptions import NicknameAlreadyTaken
from auth.models import User, get_user_db
from auth.schemas import CredentialsSchema, EmailSchema
from fastapi_mail import FastMail, MessageSchema, MessageType
from fastapi_users import BaseUserManager, IntegerIDMixin, exceptions, models, schemas
from sqlalchemy import Integer
from sqlalchemy.exc import IntegrityError
from starlette.responses import JSONResponse


class UserManager(IntegerIDMixin, BaseUserManager[User, Integer]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    async def authenticate(self, credentials: CredentialsSchema) -> Optional[models.UP]:
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
        print("User created: ", user.email)

        await super().on_after_register(user, request)

    async def on_after_forgot_password(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"User {user.id} has forgot their password. Reset token: {token}")

    async def on_after_request_verify(
        self, user: User, token: str, request: Optional[Request] = None
    ):
        print(f"Verification requested for user {user.id}. Verification token: {token}")
        # send email with randomly generated confirmation code (6 digits)
        html = f"""
            <h1>Email verification</h1>
            <p>Hi! Please verify your email to finish your registration at guide.me. Your verification token:</p>
            <p>{token}</p>
            <p>Copy this token and paste it in the verification form.</p>
            """

        email = EmailSchema(email=[user.email])

        message = MessageSchema(
            subject="Guide.me - email verification",
            recipients=email.dict().get("email"),
            body=html,
            subtype=MessageType.html,
        )

        fm = FastMail(conf)
        await fm.send_message(message)
        print(f"email sent to {user.email}")

        user.active = True

    async def on_after_verify(self, user: User, request: Optional[Request] = None):
        print(f"User {user.email} has been verified.")

        # TODO send welcome email


async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
