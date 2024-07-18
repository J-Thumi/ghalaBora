from app.schemas.sensors import SensorCreate
from datetime import datetime
from pydantic import BaseModel, Field
from typing import List

class SensorReadingBase(BaseModel):
   co: float = Field(default=None, description="Carbon monoxide levels")
   humidity: float = Field(default=None, description="Humidity levels")
   light: bool = Field(default=None, description="Light sensor status")
   lpg: float = Field(default=None, description="Liquefied Petroleum Gas (LPG) levels")
   motion: bool = Field(default=None, description="Motion sensor status")
   smoke: float = Field(default=None, description="Smoke levels")
   temp: float = Field(default=None, description="Temperature")

class SensorReadingCreate(BaseModel):
   sensor: SensorCreate
   timestamp: datetime = Field(default=datetime.now(datetime.UTC), description="Timestamp for the reading")
   sensor_reading: SensorReadingBase

   class Config:
      orm_mode = True

class SensorReadingReport(BaseModel):
   data: List[SensorReadingCreate]