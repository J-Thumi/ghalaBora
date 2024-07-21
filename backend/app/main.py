from app.database import engine
from app.models import models
from app.routes.login import login_router
from app.routes.sensor_readings import sensor_reading_router
from app.routes.sensors import sensor_router
from app.routes.users import user_router
from fastapi import FastAPI

app = FastAPI()

models.Base.metadata.create_all(engine)

app.include_router(login_router)
app.include_router(sensor_reading_router)
app.include_router(sensor_router)
app.include_router(user_router)