from app.database import engine, get_db
from fastapi import Depends
from sqlalchemy.orm import Session

import pandas as pd

sensor_name_to_id = {
   'b8:27:eb:bf:9d:51': 1,
   '00:0f:00:70:91:0a': 2,
   '1c:bf:ce:15:ec:4d': 3
}

def csv_processor(csv_file_path: str, db: Session = Depends(get_db)):
   csv_file_path = r"C:\\Users\bened\Desktop\\Computer Science\\projects\\full-stack-web-apps\\ghalabora_web_app\\ghalaBora\backend\\app\\core\\iot_telemetry_data.csv"
   df = pd.read_csv(csv_file_path)

   df = df.drop(columns=["co", "light", "lpg", "motion", "smoke"])

   df["sensor_reading_id"] = range(1, len(df) + 1)
   df["sensor_id"] = range(1, len(df) + 1)

   df.set_index("sensor_reading_id", inplace=True)

   df['sensor_id'] = df['device'].map(sensor_name_to_id)

   new_column_order = ['sensor_id', 'device', 'ts', 'humidity', 'temp']
   df = df[new_column_order]

   df = df.drop(columns=['device'])
   df.rename(columns={'ts': 'timestamp'}, inplace=True)

   df.to_sql('sensor_readings', con=engine, if_exists='append', index=True)


""" df = pd.read_csv(csv_file_path)

df = df.drop(columns=["co", "light", "lpg", "motion", "smoke"])
df["sensor_reading_id"] = range(1, len(df) + 1)
df["sensor_id"] = range(1, len(df) + 1)
df.set_index("sensor_reading_id", inplace=True)
df['sensor_id'] = df['device'].map(sensor_name_to_id)
new_column_order = ['sensor_id', 'device', 'ts', 'humidity', 'temp']
df = df[new_column_order]
df = df.drop(columns=['device'])
df.rename(columns={'ts': 'timestamp'}, inplace=True)

print(df.shape)

 """

