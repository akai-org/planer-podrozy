from auth import models
from auth.models import User, get_user_manager
from auth.schemas import UserCreate, UserOut
from auth.utils import get_hashed_password
from sqlalchemy.orm import Session


def get_user_by_email(db: Session, user_email: str):
    user_by_email = db.query(User).filter(User.email == user_email).first()
    return user_by_email


async def create_new_user(db: Session, user: UserCreate):
    await print("create_new_user")
    new_user = await models.get_user_manager().create(user, safe=True)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def change_user_password(db: Session, user: UserOut, new_password: str):
    user.hashed_password = get_hashed_password(password=new_password)
    db.commit()
    db.refresh(user)
    return user
