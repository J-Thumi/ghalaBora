from app.database import get_db
from app.dependencies import auth
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

router = APIRouter(
   prefix="/login",
   tags=["Authentication"]
)

@router.post("/")
def login(user: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
   return auth.authenticate_user(user, db)