from app.schemas.sensors import SensorCreate
from pydantic import BaseModel, EmailStr
from typing import List

class UserBase(BaseModel):
   user_name: str
   user_email: EmailStr
   user_phone_number: str

class UserCreate(UserBase):
   user_password: str

class User(BaseModel):
   user_id: int
   user_details: UserBase

   class Config:
      orm_mode = True

class ShowUser(BaseModel):
   user_name: str
   user_email: EmailStr
   sensors: List[SensorCreate] = []

class UserUpdate(BaseModel):
   user_details: UserCreate

   class Config:
      orm_mode = True

class UserLogin(BaseModel):
   user_email: str
   user_name: str
   user_password: str

class UserInDB(UserBase):
   hashed_password: str