from app.core.security import hash_password
from app.database import get_db
from app.routes import login
from app.models import models
from app.schemas import users
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import logging

router = APIRouter(
   prefix="/users",
   tags=["Users"]
)

logging.basicConfig(filename='error_logs/user_api.log', level=logging.ERROR)

async def get_user(user_id, db: Session = Depends(get_db)):
   fetched_user = db.query(models.Users).filter(models.Users.user_id == user_id).first()
   if not fetched_user:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail=f"User {user_id} not found"
      )
   
   return fetched_user

async def get_user_by_email(user_email: str, db: Session = Depends(get_db)):
   if not user_email:
      raise HTTPException(
         status_code=status.HTTP_400_BAD_REQUEST,
         detail="Please provide a user email"
      )

   db_user = db.query(models.Users).filter(models.Users.user_email == user_email).first()
   if not db_user:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail=f"User with email {user_email} not found"
      )
   
   return db_user

def update_phone_number(user: models.Users, new_phone_number: str, db: Session = Depends(get_db)):
   if new_phone_number:
      existing_user = db.query(models.Users).filter(models.Users.user_phone_number == new_phone_number).first()
      if existing_user and existing_user.user_id != user.user_id:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Phone number already in use"
         )

   user.user_phone_number = new_phone_number
   db.commit()

def update_user_name(user: models.Users, new_user_name: str, db: Session = Depends(get_db)):
   if new_user_name:
      user.user_name = new_user_name

   db.commit()

def update_user_email(user: models.Users, new_user_email: str, db: Session = Depends(get_db)):
   if new_user_email:
      existing_user = db.query(models.Users).filter(models.Users.user_email == new_user_email).first()
      if existing_user and existing_user.user_id != user.user_id:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already exists"
         )
   
   user.user_email = new_user_email
   db.commit()

def update_user_password(user: models.Users, new_password: str, db: Session = Depends(get_db)):
   if new_password:
      user.user_password = hash_password(new_password)
   
   db.commit()

@router.post("/create-user")
async def create_user(user: users.UserCreate, db: Session = Depends(get_db)):
   try:
      new_user = models.Users(**user.model_dump(exclude={"user_password"}))
      new_user.user_password = hash_password(user.user_password)
      db.add(new_user)
      db.commit()
   except Exception as e:
      logging.error(f"Error creating user: {e}")
      raise HTTPException(
         status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
         detail="An error occurred while creating the user. Please try again later."
      )
   
   return new_user

@router.put("/{user_id}", response_model=users.User)
async def update_user(user_id, user_updated: users.UserUpdate, db: Session = Depends(get_db)):
   fetched_user = get_user(user_id, db)

   for field, value in user_updated.model_dump().items():
      if field == "user_phone_number":
         update_phone_number(fetched_user, value, db)
      elif field == "user_email":
         update_user_email(fetched_user, value, db)
      elif field == "user_password":
         update_user_password(fetched_user, value, db)
      elif field == "user_name":
         update_user_name(fetched_user, value, db)