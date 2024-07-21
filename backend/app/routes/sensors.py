from app.database import get_db
from app.dependencies import oauth
from app.models import models
from app.schemas import sensors, users
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

sensor_router = APIRouter(
   prefix="/users/sensors",
   tags=["Sensors"]
)

@sensor_router.get("/get-sensors")
def get_all_sensors(
   db: Session = Depends(get_db), 
   current_user: users.UserBase = Depends(oauth.get_current_user)
):
   sensors = db.query(models.Sensors).all()
   return sensors

@sensor_router.post("/add-sensor", status_code=status.HTTP_201_CREATED)
def add_sensor(
   sensor: sensors.SensorBase, 
   current_user: users.User = Depends(oauth.get_current_user), 
   db: Session = Depends(get_db)
):
   new_sensor = models.Sensors(sensor_name=sensor.sensor_name, sensor_location=sensor.sensor_location, user_id=1)
   db.add(new_sensor)
   db.commit()
   db.refresh(new_sensor)
   return new_sensor

@sensor_router.delete("/delete-sensor/{sensor_id}")
async def delete_sensor(
   sensor_id, 
   current_user: users.User = Depends(oauth.get_current_user), 
   db: Session = Depends(get_db)
):
   deleted_sensor = db.query(models.Sensors).filter(models.Sensors.sensor_id == sensor_id).first()
   get_user = deleted_sensor.user_id == current_user.user_id

   if not get_user:
      raise HTTPException(
         status_code=status.HTTP_403_FORBIDDEN
      )

   if not deleted_sensor:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail=f"Sensor {sensor_id} not found"
      )
   
   await db.delete(deleted_sensor)
   await db.commit()

@sensor_router.put("/update-sensor/{sensor_id}")
async def update_sensor(
   sensor_id, 
   sensor: sensors.SensorUpdate, 
   current_user: users.User = Depends(oauth.get_current_user), 
   db: Session = Depends(get_db)
):
   sensor_to_update = db.query(models.Sensors).filter(models.Sensors.sensor_id == sensor_id).first()
   get_user = sensor_to_update.user_id == current_user.user_id

   if not get_user:
      raise HTTPException(
         status_code=status.HTTP_403_FORBIDDEN
      )

   if not sensor_to_update:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail=f"Sensor {sensor_id} not found"
      )
   
   sensor_to_update.sensor_name = sensor.sensor_name if sensor.sensor_name is not None else sensor_to_update.sensor_name
   sensor_to_update.sensor_location = sensor.sensor_location if sensor.sensor_location is not None else sensor_to_update.sensor_location

   await db.commit()
   return sensor_to_update