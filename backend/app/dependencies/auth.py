from app.core.security import create_access_token
from app.database import get_db
from app.dependencies import get_login_data, hash_password
from app.models import models
from app.schemas.users import LoginData
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Dict, Union

def authenticate(username: str, password: str, db: Session = Depends(get_db)):
   db_user = db.query(models.Users).filter(models.Users.user_name == username).first()
   if not db_user:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail="User not found"
      )
   
   if not hash_password.verify_password(password, db_user.user_password):
      raise HTTPException(
         status_code=status.HTTP_401_UNAUTHORIZED,
         detail="Incorrect password"
      )
   
   access_token = create_access_token(data={"sub": username})
   return {
      "access_token": access_token,
      "token_type": "bearer",
      "detail": "Success"
   }

def authenticate_user(user: LoginData = Depends(get_login_data.get_login_data), db: Session = Depends(get_db)):
   if isinstance(user, Dict):
      get_login_data.get_login_data(user)

      return authenticate(username=username, password=password, db=db)
   
   if isinstance(user, OAuth2PasswordRequestForm):
      username = user.username
      password = user.password
      return authenticate(username=username, password=password, db=db)