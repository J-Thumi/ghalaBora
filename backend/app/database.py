"""
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import asyncpg
import os

load_dotenv()

connection_parameters = {
   "db_user": os.getenv("POSTGRES_USER"),
   "db_password": os.getenv("POSTGRES_PASSWORD"),
   "db_name": os.getenv("POSTGRES_DB"),
   "db_host": os.getenv("POSTGRES_SERVER"),
   "db_port": os.getenv("POSTGRES_PORT")
}

DATABASE_URL = f"postgresql://{connection_parameters['db_user']}:{connection_parameters['db_password']}@{connection_parameters['db_host']}:{connection_parameters['db_port']}/{connection_parameters['db_name']}"

Base = declarative_base()

async def get_db():
   engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
   SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

   db = SessionLocal()
   try:
      yield db
   finally:
      db.close()

async def get_db():
   conn = await asyncpg.connect(DATABASE_URL)
   try:
      yield conn
   finally:
      await conn.close() """

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLITE_DATABASE_URL = 'sqlite:///./ghalaboradb.db'

engine = create_engine(SQLITE_DATABASE_URL, connect_args={"check_same_thread": False})
Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

async def get_db():
   db = SessionLocal()
   try:
      yield db
   finally:
      db.close()