import ChartsComponent from "./charts";
import DashNav from "./DashNav";
import OverviewComponent from "./Overview";
import SensorStatusComponent from "./SensorStatus";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchChartData = (url) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('chartData');
    return savedData ? JSON.parse(savedData) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      localStorage.setItem('chartData', JSON.stringify(response.data));
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  });

  return { data, loading, error, refetch: fetchData };
};

const Dashboard = () => {
  const { userName } = useParams();
  const [islandId, setIslandId] = useState('Island D'); // Default selected island
  const { data, loading, error } = useFetchChartData('localhost:8000/get-sensor-readings');

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
        {error && <div>Error while loading....</div>}
        {!loading && !error && <ChartsComponent islandData={islandData} />}
        <Link to="/report" className="generate-report">Generate Report</Link>
      </section>
    </main>
  );
};

export default Dashboard;
