from models import User
from sqlalchemy.orm import Session


def get_user_by_email(db: Session, user_email: str):
    user_by_email = db.query(User).filter(User.email == user_email).first()
    return user_by_email