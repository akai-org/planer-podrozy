from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from api.database import get_db
from auth import models, schemas
from auth.crud import get_user_by_email
from auth.utils import create_access_token, verify

router = APIRouter(prefix="/api", tags=["auth"])


@router.post(
    "/registration", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut
)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db=db, user_email=user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered"
        )
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.post(
    "/login", status_code=status.HTTP_201_CREATED, response_model=schemas.Token
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    user = get_user_by_email(db=db, user_email=form_data.username)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password",
        )

    if not verify(
        plain_password=form_data.password, hashed_password=user.hashed_password
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password",
        )

    return {"email": create_access_token(subject=user.email), "token_type": "bearer"}
