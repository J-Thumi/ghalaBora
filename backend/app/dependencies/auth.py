from app.core.security import create_access_token, verify_password
from app.database import get_db
from app.models import models
from app.schemas import users
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

def authenticate_user(user: users.UserLogin, db: Session = Depends(get_db)):
   db_user = db.query(models.Users).filter(models.Users.user_name == user.user_name).first()
   if not db_user:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail="User not found"
      )
   
   if not verify_password(db_user.user_password, user.user_password):
      raise HTTPException(
         status_code=status.HTTP_401_UNAUTHORIZED,
         detail="Incorrect password"
      )
   
   access_token = create_access_token(data={"sub": user.user_email})
   return {
      "access_token": access_token,
      "token_type": "bearer"
   }