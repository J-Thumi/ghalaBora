from app.core import security
from app.database import get_db
from app.routes.login import oauth2_scheme
from app.schemas.users import UserInDB
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
   credentials_exception = HTTPException(
      status_code=status.HTTP_401_UNAUTHORIZED,
      detail="Could not validate credentials",
      headers={"WWW-Authenticate": "Bearer"}
   )

   security.verify_access_token(token, credentials_exception, db)

async def get_current_active_user(current_user: UserInDB = Depends(get_current_user)):
   if current_user.disabled:
      raise HTTPException(
         status_code=status.HTTP_400_BAD_REQUEST,
         detail="Inactive user"
      )
   
   return current_user