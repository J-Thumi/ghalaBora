from pydantic import BaseModel, Field

class SensorBase(BaseModel):
   sensor_name: str = Field(default=None)
   sensor_location: str = Field(default=None)

class SensorCreate(SensorBase):
   sensor_id: int

   class Config:
      orm_mode = True