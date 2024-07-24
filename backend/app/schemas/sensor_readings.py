from app.schemas.sensors import SensorCreate
from datetime import datetime
from pydantic import BaseModel, ConfigDict
from typing import List

class SensorReadingBase(BaseModel):
   humidity: float
   temp: float

class SensorReadingCreate(SensorReadingBase):
   sensor_id: int
   timestamp: float

   class Config:
      orm_mode = True

class SensorReadingReport(BaseModel):
   data: List[SensorReadingCreate]

class ShowSensorReading(BaseModel):
   sensor_reading_id: int
   sensor_id: int
   timestamp: float
   humidity: float
   temp: float

class ShowSensorReadingResponse(BaseModel):
   data: List[ShowSensorReading] = []