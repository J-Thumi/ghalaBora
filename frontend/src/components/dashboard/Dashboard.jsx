import { useState, useEffect } from 'react';
import axios from 'axios';
import ChartsComponent from "./charts";
import DashNav from "./DashNav";
import OverviewComponent from "./Overview";
import SensorStatusComponent from "./SensorStatus";
import ReportComponent from "./ReportComponent";


const Dashboard = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('chartData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numValues, setNumValues] = useState(20);

  useEffect(() => {
    axios.get(`http://localhost:8000/users/sensors/sensor-readings/get-sensor-readings/1/${numValues}`)
      .then(response => {
        const allData = response.data.data;
        console.log(allData)
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
  }, [numValues]);

  const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        sensor_reading_id: data.length + 1,
        temp: Number(generateRandomNumber(23, 28).toFixed(2)),  // Temperature between 15°C and 30°C
        humidity: Number(generateRandomNumber(50, 70).toFixed(2))  // Humidity between 40% and 70%
      };

      setData(prevData => {
        const updatedData = [...prevData, newData];
        localStorage.setItem('chartData', JSON.stringify(updatedData));
        return updatedData;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  const handleNumValuesChange = (event) => {
    const newNumValues = parseInt(event.target.value, 10);
    if (!isNaN(newNumValues)) {
      setNumValues(newNumValues);
    }
  };

  return (
    <main className="dashboard">
      <DashNav />
      <section className="dashboard-section">
        <SensorStatusComponent />
        <OverviewComponent data={data} /> {/* Pass data to OverviewComponent */}
        
        <div className="input-section">
          <label htmlFor="numValues">How many days to date do you want displayed:</label>
          <input
            type="number"
            id="numValues"
            value={numValues}
            onChange={handleNumValuesChange}
            min="1"
          />
        </div>
        
        {loading && <div style={{ position: 'relative', padding: '2rem' }}>Loading....</div>}
          {error && <div style={{ position: 'relative', padding: '2rem' }}>Error: {error}</div>}
        {!loading && !error && <ChartsComponent data={data} />}
        <ReportComponent data={data} />
      </section>
    </main>
  );
};

export default Dashboard;