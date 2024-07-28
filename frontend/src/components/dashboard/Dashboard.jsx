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
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/users/sensors/sensor-readings/get-sensor-readings/1/${numValues}`)
      .then(response => {
        const allData = response.data.data;
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

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        sensor_reading_id: data.length + 1,
        temp: Math.random() * 20 + 10,
        humidity: Math.random() * 30 + 50
      };

      setData(prevData => {
        const updatedData = [...prevData, newData];
        localStorage.setItem('chartData', JSON.stringify(updatedData));
        return updatedData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const handleNumValuesChange = (event) => {
    const newNumValues = parseInt(event.target.value, 10);
    if (!isNaN(newNumValues)) {
      setNumValues(newNumValues);
    }
  };

  const handleExportData = () => {
    const csvRows = [];
    csvRows.push(['sensor_reading_id', 'temp', 'humidity'].join(','));

    data.forEach(row => {
      csvRows.push([row.sensor_reading_id, row.temp, row.humidity].join(','));
    });

    const csvFile = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(csvFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sensor_data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const toggleReport = () => {
    setShowReport(prev => !prev);
  };

  return (
    <main className="dashboard">
      <DashNav />
      <section className="dashboard-section">
   
        <SensorStatusComponent />
        <OverviewComponent data={data} /> {/* Pass data to OverviewComponent */}
        <br />
        <br />
        
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
        
        <button onClick={handleExportData} className="export-button">
          Export Data as CSV
        </button>
        
        <button onClick={toggleReport} className="report-button">
          {showReport ? 'Hide Report' : 'Show Report'}
        </button>
        
        {loading && <div>Loading....</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && <ChartsComponent data={data} />}
        <br />
        <br />
        {showReport && <ReportComponent data={data} onClose={toggleReport} />}
      </section>
    </main>
  );
};

export default Dashboard;
