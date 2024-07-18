from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
   user_name: str
   user_email: EmailStr
   user_phone_number: str

class UserCreate(UserBase):
   user_password: str

class User(UserBase):
   user_id: int

   class Config:
      orm_mode = True