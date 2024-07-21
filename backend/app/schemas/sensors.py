from pydantic import BaseModel, Field

class SensorBase(BaseModel):
   sensor_name: str = Field(default=None)
   sensor_location: str = Field(default=None)

   class Config:
      orm_mode = True

class SensorCreate(SensorBase):
   sensor_id: int

   class Config:
      orm_mode = True

class SensorUpdate(SensorBase):
   class Config:
      orm_mode = True