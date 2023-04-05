from datetime import datetime

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime
    hashed_password: str

    class Config:
        orm_mode = True


class Message(BaseModel):
    message: str


class Token(BaseModel):
    token: str
    token_type: str
