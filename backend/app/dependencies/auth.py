from app.core.security import create_access_token
from app.database import get_db
from app.dependencies.hash_password import verify_password
from app.models import models
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

def authenticate_user(user: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
   db_user = db.query(models.Users).filter(models.Users.user_name == user.username).first()
   if not db_user:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail="User not found"
      )
   
   if not verify_password(user.password, db_user.user_password):
      raise HTTPException(
         status_code=status.HTTP_401_UNAUTHORIZED,
         detail="Incorrect password"
      )
   
   access_token = create_access_token(data={"sub": user.username})
   return {
      "access_token": access_token,
      "token_type": "bearer"
   }