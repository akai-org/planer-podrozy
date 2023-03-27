from auth import models, schemas

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

router = APIRouter(prefix="/api", tags=["auth"])
