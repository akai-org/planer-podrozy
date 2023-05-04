from fastapi import status
from fastapi.exceptions import HTTPException


class NicknameAlreadyTaken(HTTPException):
    def __init__(self):
        super().__init__(status.HTTP_400_BAD_REQUEST, detail="NICKNAME_ALREADY_TAKEN")
