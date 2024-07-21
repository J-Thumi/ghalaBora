from app.database import Base
from sqlalchemy import Column, DateTime, ForeignKey, Float, Integer, String
from sqlalchemy.orm import relationship

class Users(Base):
   __tablename__ = "users"

   user_id = Column(Integer, primary_key=True, index=True)
   user_name = Column(String, nullable=False)
   user_email = Column(String, nullable=False)
   user_phone_number = Column(String, nullable=False, unique=True)
   user_password = Column(String, nullable=False)

   sensors = relationship("Sensors", back_populates="user")

class Sensors(Base):
   __tablename__ = "sensors"

   sensor_id = Column(Integer, primary_key=True, index=True)
   user_id = Column(Integer, ForeignKey("users.user_id"))
   sensor_name = Column(String)
   sensor_location = Column(String)

   user = relationship("Users", back_populates="sensors")
   sensor_readings = relationship("SensorReading", back_populates="sensor")

class SensorReading(Base):
   __tablename__ = "sensor_readings"

   sensor_reading_id = Column(Integer, primary_key=True, index=True)
   sensor_id = Column(Integer, ForeignKey("sensors.sensor_id"))
   timestamp = Column(DateTime, nullable=True)

   humidity = Column(Float, nullable=True)
   temp = Column(Float, nullable=True)

   sensor = relationship("Sensors", back_populates="sensor_readings")