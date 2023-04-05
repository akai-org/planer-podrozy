from datetime import datetime, timedelta
from typing import Optional, Union

import jwt
from api.config import SECRET
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ACCESS_TOKEN_EXPIRE_TIME = 30
ALGORITHM = "HS256"


def get_hashed_password(password: str):
    return pwd_context.hash(password)


def verify(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(subject: Union[str, any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_TIME)

    to_encode = {"exp": expires_delta, "subject": str(subject)}
    encoded_jwt = jwt.encode(to_encode, key=SECRET, algorithm=ALGORITHM)
    return encoded_jwt


def verify_reset_password_token(token: str) -> Optional[str]:
    try:
        decoded_token = jwt.decode(token, key=SECRET, algorithms=[ALGORITHM])
        return decoded_token["subject"]
    except jwt.InvalidTokenError:
        return None
