from app.database import get_db
from app.routes.users import get_user_by_user_name
from app.schemas.token import TokenData
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from typing import Optional

ACCESS_TOKEN_EXPIRE_MINUTES = 30
SECRET_KEY = "a3f7b71d04cdecd67ae6c045cd63149d3ec5b1350161ce4f23b4131a2173a4c2"
ALGORITHM = "HS256"

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
   to_encode = data.copy()
   if expires_delta:
      expire = datetime.utcnow() + expires_delta
   else:
      expire = datetime.utcnow() + timedelta(minutes=15)

   to_encode.update({"exp": expire})
   encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
   return encoded_jwt

def verify_access_token(token: str, credentials_exception, db: Session = Depends(get_db)):
   try:
      payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
      user_name: str = payload.get("sub")
      if user_name is None:
         raise credentials_exception
      
      token_data = TokenData(user_name=user_name)
   except JWTError:
      raise credentials_exception
   
   user = get_user_by_user_name(user_name=token_data.user_name, db=db)
   if user is None:
      raise credentials_exception
   return user