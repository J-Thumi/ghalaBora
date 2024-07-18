from fastapi import APIRouter

router = APIRouter(
   prefix="/users/sensors/sensor-readings",
   tags=["Sensor Readings"]
)