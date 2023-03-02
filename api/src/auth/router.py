from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from . import schemas

router = APIRouter(prefix="/api", tags=["auth"])


@router.post(
    "/registration", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut
)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):

    return {"message": "Hello"}
