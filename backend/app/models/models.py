from app.database import Base
from sqlalchemy import Column, Boolean, DateTime, ForeignKey, Float, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

class Users(Base):
   __tablename__ = "users"

   user_id = Column(Integer, primary_key=True, index=True)
   user_name = Column(String)
   user_email = Column(String)
   user_phone_number = Column(String, unique=True)
   user_password = Column(String)

class Sensors(Base):
   __tablename__ = "sensors"

   sensor_id = Column(Integer, primary_key=True, index=True)
   user_id = Column(Integer, ForeignKey("users.user_id"))
   sensor_name = Column(String)
   sensor_location = Column(String)

   user = relationship("Users", backref="sensor")

class SensorReading(Base):
   __tablename__ = "sensor_readings"

   sensor_reading_id = Column(Integer, primary_key=True, index=True)
   sensor_id = Column(Integer, ForeignKey("sensors.sensor_id"))
   timestamp = Column(DateTime, nullable=False)

   co = Column(Float, nullable=False)
   humidity = Column(Float, nullable=False)
   light = Column(Boolean, nullable=False)
   lpg = Column(Float, nullable=False)
   motion = Column(Boolean, nullable=False)
   smoke = Column(Float, nullable=False)
   temp = Column(Float, nullable=False)