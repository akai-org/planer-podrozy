from auth import models
from auth.models import User
from auth.schemas import UserCreate, UserOut
from auth.utils import get_hashed_password
from sqlalchemy.orm import Session


def get_user_by_email(db: Session, user_email: str):
    user_by_email = db.query(User).filter(User.email == user_email).first()
    return user_by_email


def create_new_user(db: Session, user: UserCreate):
    hashed_password = get_hashed_password(password=user.password)
    new_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def change_user_password(db: Session, user: UserOut, new_password: str):
    user.hashed_password = get_hashed_password(password=new_password)
    db.commit()
    db.refresh(user)
    return user
