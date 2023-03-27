from datetime import datetime, timedelta
from typing import Union

import jwt
from passlib.context import CryptContext

from config import SECRET

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ACCESS_TOKEN_EXPIRE_TIME = 30
ALGORITH = "HS256"


def hash(password: str):
    return pwd_context.hash(password)


def verify(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(subject: Union[str, any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_TIME)

    to_encode = {"exp": expires_delta, subject: str(subject)}
    encoded_jwt = jwt.encode(to_encode, key=SECRET, algorithm=ALGORITH)
    return encoded_jwt
