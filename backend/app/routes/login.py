from app.database import get_db
from app.dependencies import auth
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

login_router = APIRouter(
   prefix="/login",
   tags=["Authentication"]
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

@login_router.post("/")
def login(user: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
   return auth.authenticate_user(user, db)