from api.database import get_db
from auth import models, schemas
from auth.crud import change_user_password, create_new_user, get_user_by_email
from auth.utils import create_access_token, verify, verify_reset_password_token
from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

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
    new_user = create_new_user(db, user)
    return new_user


@router.post("/login", status_code=status.HTTP_200_OK, response_model=schemas.Token)
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

    return {"token": create_access_token(subject=user.email), "token_type": "bearer"}


@router.post("/reset-password/", response_model=schemas.Message)
def reset_user_password(
    user_email: str = Body(...),
    token=Body(...),
    new_password: str = Body(...),
    db: Session = Depends(get_db),
):
    token_response_email = verify_reset_password_token(token=token)
    if not token_response_email == user_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid token"
        )
    user = get_user_by_email(db=db, user_email=user_email)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )
    change_user_password(db, user, new_password)
    return {"message": "Password reset successfully"}
