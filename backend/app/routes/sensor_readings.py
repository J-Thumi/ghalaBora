from app.core.utils import csv_processor
from app.database import get_db
from app.models import models
from app.schemas.sensor_readings import SensorReadingCreate
from datetime import datetime
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, status
from sqlalchemy.orm import Session

import time

sensor_reading_router = APIRouter(
   prefix="/users/sensors/sensor-readings",
   tags=["Sensor Readings"]
)

async def fetch_sensor_readings(db: Session = Depends(get_db)):
   try:
      sensor_readings = db.query(models.SensorReading).order_by(models.SensorReading.sensor_reading_id).all()
      for sensor_reading in sensor_readings:
         yield sensor_reading
         time.sleep(5)
   except Exception as e:
      print(f"Error fetching readings {e}")

@sensor_reading_router.post("/add-sensor-reading", status_code=status.HTTP_201_CREATED)
def add_sensor_reading(
   csv_file_path: str = r"C:\\Users\bened\Desktop\\Computer Science\\projects\\full-stack-web-apps\\ghalabora_web_app\\ghalaBora\backend\\app\\core\\iot_telemetry_data.csv", 
   db: Session = Depends(get_db)
):
   try:
      csv_processor(csv_file_path, db)
   except Exception as e:
      raise e
   
@sensor_reading_router.get("/get-sensor-readings")
async def get_sensor_readings(background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
   with db:
      return background_tasks.add_task(fetch_sensor_readings, db)