from app.core.utils import csv_processor
from app.database import get_db
from app.models import models
from app.schemas.sensor_readings import SensorReadingCreate
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

sensor_reading_router = APIRouter(
   prefix="/users/sensors/sensor-readings",
   tags=["Sensor Readings"]
)

@sensor_reading_router.post("/add-sensor-reading", status_code=status.HTTP_201_CREATED)
def add_sensor_reading(csv_file_path: str = r"path/to/.csv file", db: Session = Depends(get_db)):
   try:
      csv_processor(csv_file_path, db)
   except Exception as e:
      raise e