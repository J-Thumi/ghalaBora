from app.routes import sensor_readings, sensors, users
from fastapi import FastAPI

app = FastAPI()

app.include_router(sensor_readings.router)
app.include_router(sensors.router)
app.include_router(users.router)