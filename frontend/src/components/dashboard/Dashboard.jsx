import ChartsComponent from "./charts";
import DashNav from "./DashNav";
import OverviewComponent from "./Overview";
import SensorStatusComponent from "./SensorStatus";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

const useWebSocket = (url) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('chartData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log('WebSocket Connected');
      setLoading(false);
    };

    ws.current.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(prevData => {
        const updatedData = [...prevData, newData];
        localStorage.setItem('chartData', JSON.stringify(updatedData));
        return updatedData;
      });
    };

    ws.current.onerror = (error) => {
      console.log('WebSocket Error: ', error);
      setError('WebSocket connection error');
    };

    ws.current.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, [url]);

  return { data, loading, error };
};

const Dashboard = () => {
  const { userName } = useParams();
  const [islandId, setIslandId] = useState('Island D');
  const { data, loading, error } = useWebSocket('ws://localhost:8000/sensor-readings');

  const handleIslandChange = (event) => {
    setIslandId(event.target.value);
  };

  const islandData = data.filter((sensorReadings) => sensorReadings.id === islandId);

  return (
    <main className="dashboard">
      <DashNav />
      <section className="dashboard-section">
        <h1>Hello {userName}, you are welcome</h1>
        <select className="island-dropdown" value={islandId} onChange={handleIslandChange}>
          <option value="Island D">Island D</option>
          <option value="Island C">Island C</option>
          <option value="Island B">Island B</option>
          <option value="Island A">Island A</option>
        </select>
        <SensorStatusComponent />
        <OverviewComponent />
        {loading && <div>Loading....</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && <ChartsComponent islandData={islandData} />}
        <Link to="/report" className="generate-report">Generate Report</Link>
      </section>
    </main>
  );
};

export default Dashboard;