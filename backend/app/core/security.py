from app.schemas.token import TokenData
from datetime import datetime, timedelta
from jose import jwt, JWTError
from passlib.context import CryptContext
from typing import Optional

import secrets

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def generate_secret_key():
   return secrets.token_urlsafe(32)

SECRET_KEY = generate_secret_key()
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 15

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

def verify_access_token(token: str, credentials_exception):
   try:
      payload = jwt.decode(token, SECRET_KEY, algorithm=[ALGORITHM])
      user_name: str = payload.get("sub")
      if user_name is None:
         raise credentials_exception
      
      token_data = TokenData(user_name=user_name)
   except JWTError:
      raise credentials_exception