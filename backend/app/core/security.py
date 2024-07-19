from app.database import get_db
from app.routes.users import get_user_by_user_name
from app.schemas.token import TokenData
from datetime import datetime, timedelta
from fastapi import Depends
from jose import jwt, JWTError
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from typing import Optional

import secrets

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

NUMBER_OF_BYTES = 32
ACCESS_TOKEN_EXPIRE_MINUTES = 15
SECRET_KEY = secrets.token_urlsafe(NUMBER_OF_BYTES)
ALGORITHM = "HS256"

def hash_password(password: str) -> str:
   return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
   return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
   to_encode = data.copy()
   if expires_delta:
      expire = datetime.now(datetime.UTC) + expires_delta
   else:
      expire = datetime.now(datetime.UTC) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

   to_encode.update({"exp": expire})
   encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
   return encoded_jwt

def verify_access_token(token: str, credentials_exception, db: Session = Depends(get_db)):
   try:
      payload = jwt.decode(token, SECRET_KEY, algorithm=[ALGORITHM])
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