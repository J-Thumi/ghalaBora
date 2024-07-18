from fastapi import APIRouter

router = APIRouter(
   prefix="/users/sensors",
   tags=["Sensors"]
)