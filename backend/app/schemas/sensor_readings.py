from app.schemas.sensors import SensorCreate
from datetime import datetime
from pydantic import BaseModel, Field
from typing import List

class SensorReadingBase(BaseModel):
   humidity: float
   temp: float

class SensorReadingCreate(SensorReadingBase):
   sensor_id: int
   timestamp: datetime

   class Config:
      orm_mode = True

class SensorReadingReport(BaseModel):
   data: List[SensorReadingCreate]