from app.core.utils import csv_processor
from app.database import get_db
from app.models import models
from app.schemas import sensor_readings
from datetime import datetime
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, status
from sqlalchemy.orm import Session

import time

sensor_reading_router = APIRouter(
   prefix="/users/sensors/sensor-readings",
   tags=["Sensor Readings"]
)

def get_sensor_readings_in_range(start_id: int, end_id: int, db: Session = Depends(get_db)):
   fetched_sensor_readings = db.query(models.SensorReading).filter(
      models.SensorReading.sensor_reading_id >= start_id,
      models.SensorReading.sensor_reading_id <= end_id
   ).all()

   pydantic_readings = [sensor_readings.ShowSensorReading(**fetched_sensor_reading.__dict__) for fetched_sensor_reading in fetched_sensor_readings]

   return pydantic_readings

@sensor_reading_router.post("/add-sensor-reading", status_code=status.HTTP_201_CREATED)
def add_sensor_reading(
   csv_file_path: str = r"C:\\Users\\thumi\Documents\beans\backend\\app\core\\iot_telemetry_data.csv", 
   db: Session = Depends(get_db)
):
   try:
      csv_processor(csv_file_path, db)
   except Exception as e:
      raise e
   
@sensor_reading_router.get("/get-sensor-readings/{start_id}/{end_id}", response_model=sensor_readings.ShowSensorReadingResponse)
def get_sensor_readings(start_id: int, end_id: int, db: Session = Depends(get_db)):
   fetched_sensor_readings = get_sensor_readings_in_range(start_id=start_id, end_id=end_id, db=db)
   if not fetched_sensor_readings:
      raise HTTPException(
         status_code=status.HTTP_404_NOT_FOUND,
         detail=f"Readings in range {start_id} and {end_id} not found"
      )
   
   return sensor_readings.ShowSensorReadingResponse(data=fetched_sensor_readings)


#? Using Depends, Security, Cookie, Header and the like

""" from fastapi import (
   Cookie,
   Depends,
   FastAPI,
   Query,
   WebSocket,
   WebSocketException,
   status,
)
from fastapi.responses import HTMLResponse
from typing import Annotated

app = FastAPI()

html = """
""" <!DOCTYPE html>
<html>
   <head>
      <title>Chat</title>
   </head>
   <body>
      <h1>WebSocket Chat</h1>
      <form action="" onsubmit="sendMessage(event)">
         <label>Item ID: <input type="text" id="itemId" autocomplete="off" value="foo"/></label>
         <label>Token: <input type="text" id="token" autocomplete="off" value="some-key-token"/></label>
         <button onclick="connect(event)">Connect</button>
         <hr>
         <label>Message: <input type="text" id="messageText" autocomplete="off"/></label>
         <button>Send</button>
      </form>
      <ul id='messages'>
      </ul>
      <script>
         var ws = null;
         function connect(event) {
            var itemId = document.getElementById("itemId")
            var token = document.getElementById("token")
            ws = new WebSocket("ws://localhost:8000/items/" + itemId.value + "/ws?token=" + token.value);
            ws.onmessage = function(event) {
               var messages = document.getElementById('messages')
               var message = document.createElement('li')
               var content = document.createTextNode(event.data)
               message.appendChild(content)
               messages.appendChild(message)
            };
            event.preventDefault()
         }
         function sendMessage(event) {
            var input = document.getElementById("messageText")
            ws.send(input.value)
            input.value = ''
            event.preventDefault()
         }
      </script>
   </body>
</html>
"""
"""


@app.get("/")
async def get():
   return HTMLResponse(html)


async def get_cookie_or_token(
   websocket: WebSocket,
   session: Annotated[str | None, Cookie()] = None,
   token: Annotated[str | None, Query()] = None,
):
   if session is None and token is None:
      raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
   return session or token


@app.websocket("/items/{item_id}/ws")
async def websocket_endpoint(
   *,
   websocket: WebSocket,
   item_id: str,
   q: int | None = None,
   cookie_or_token: Annotated[str, Depends(get_cookie_or_token)],
):
   await websocket.accept()
   while True:
      data = await websocket.receive_text()
      await websocket.send_text(
         f"Session cookie or query token value is: {cookie_or_token}"
      )
      if q is not None:
         await websocket.send_text(f"Query parameter q is: {q}")
      await websocket.send_text(f"Message text was: {data}, for item ID: {item_id}") """

#? Handling Disconnects and multiple clients

"""
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

app = FastAPI()

html = """
"""<!DOCTYPE html>
<html>
   <head>
      <title>Chat</title>
   </head>
   <body>
      <h1>WebSocket Chat</h1>
      <h2>Your ID: <span id="ws-id"></span></h2>
      <form action="" onsubmit="sendMessage(event)">
         <input type="text" id="messageText" autocomplete="off"/>
         <button>Send</button>
      </form>
      <ul id='messages'>
      </ul>
      <script>
         var client_id = Date.now()
         document.querySelector("#ws-id").textContent = client_id;
         var ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
         ws.onmessage = function(event) {
            var messages = document.getElementById('messages')
            var message = document.createElement('li')
            var content = document.createTextNode(event.data)
            message.appendChild(content)
            messages.appendChild(message)
         };
         function sendMessage(event) {
            var input = document.getElementById("messageText")
            ws.send(input.value)
            input.value = ''
            event.preventDefault()
         }
      </script>
   </body>
</html>
"""

"""
class ConnectionManager:
   def __init__(self):
      self.active_connections: list[WebSocket] = []

   async def connect(self, websocket: WebSocket):
      await websocket.accept()
      self.active_connections.append(websocket)

   def disconnect(self, websocket: WebSocket):
      self.active_connections.remove(websocket)

   async def send_personal_message(self, message: str, websocket: WebSocket):
      await websocket.send_text(message)

   async def broadcast(self, message: str):
      for connection in self.active_connections:
         await connection.send_text(message)


manager = ConnectionManager()


@app.get("/")
async def get():
   return HTMLResponse(html)


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
   await manager.connect(websocket)
   try:
      while True:
         data = await websocket.receive_text()
         await manager.send_personal_message(f"You wrote: {data}", websocket)
         await manager.broadcast(f"Client #{client_id} says: {data}")
   except WebSocketDisconnect:
      manager.disconnect(websocket)
      await manager.broadcast(f"Client #{client_id} left the chat") """