from app.database import engine, get_db
from app.models import models
from app.routes.login import login_router
from app.routes.sensor_readings import sensor_reading_router
from app.routes.sensors import sensor_router
from app.routes.users import user_router
from fastapi import FastAPI, Depends, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import asyncio
import json

app = FastAPI()

models.Base.metadata.create_all(engine)

allowed_origins = [
   "http://localhost:5173",
   "https://localhost:5173"
   "https://ghalabora.jhubafrica.com"
]

app.add_middleware(
   CORSMiddleware,
   allow_origins=allowed_origins,
   allow_credentials=True,
   allow_methods=["GET", "POST", "PUT", "DELETE"]
)

app.include_router(login_router)
app.include_router(sensor_reading_router)
app.include_router(sensor_router)
app.include_router(user_router)

async def fetch_sensor_readings():
   pass

@app.websocket("/sensor-readings")
async def websocket_endpoint(websocket: WebSocket, db: Session = Depends(get_db)):
   await websocket.accept()
   while True:
      try:
         async for reading in fetch_sensor_readings(engine):
            data = reading.asdict()  # Assuming your model has asdict() method
            await websocket.send_text(json.dumps(data))
            await asyncio.sleep(5)  # Adjust delay as needed
      except Exception as e:
         print(f"Error sending sensor data: {e}")
         break
   await websocket.close()