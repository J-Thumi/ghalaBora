import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ChartsComponent from "./charts";
import DashNav from "./DashNav";
import OverviewComponent from "./Overview";
import SensorStatusComponent from "./SensorStatus";

const Dashboard = () => {
  const { userName } = useParams();
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('chartData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch initial data using Axios
    axios.get('http://localhost:8000/users/sensors/sensor-readings/get-sensor-readings/1/20')
      .then(response => {
        const allData = response.data.data; // Access the 'data' array within the response
        console.log('Fetched data:', allData); // Debug: Check the data structure
        if (Array.isArray(allData)) {
          setData(allData);
          localStorage.setItem('chartData', JSON.stringify(allData));
        } else {
          console.error('Unexpected data format:', allData);
          setError('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const newData = {
        sensor_reading_id: data.length + 1,
        temp: Math.random() * 20 + 10, // Random temperature between 10 and 30
        humidity: Math.random() * 30 + 50 // Random humidity between 50 and 80
      };

      setData(prevData => {
        const updatedData = [...prevData, newData];
        localStorage.setItem('chartData', JSON.stringify(updatedData));
        return updatedData;
      });
    }, 3000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  return (
    <main className="dashboard">
      <DashNav />
      <section className="dashboard-section">
        <h1>Hello {userName}, you are welcome</h1>
        <SensorStatusComponent />
        <OverviewComponent />
        {loading && <div>Loading....</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && <ChartsComponent data={data} />}
      </section>
    </main>
  );
};

export default Dashboard;
