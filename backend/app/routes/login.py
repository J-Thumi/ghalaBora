from app.database import get_db
from app.dependencies import auth
from app.schemas import users
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(
   prefix="/login",
   tags=["Authentication"]
)

@router.post("/")
def login(user: users.UserLogin, db: Session = Depends(get_db)):
   return auth.authenticate_user(user, db)