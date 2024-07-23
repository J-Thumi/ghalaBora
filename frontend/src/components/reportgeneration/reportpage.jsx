import  { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReportComponent = () => {
  const useFetchSensorData = (url) => {
    const [data, setData] = useState(() => {
      const savedData = localStorage.getItem('sensorData');
      return savedData ? JSON.parse(savedData) : [];
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        localStorage.setItem('sensorData', JSON.stringify(response.data));
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

  const { data, loading, error } = useFetchSensorData('http://localhost:8000/get-sensor-readings');

  const generatePDF = () => {
    const input = document.getElementById('report-content');
    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('sensor_report.pdf');
      });
  };

  const calculateSummary = () => {
    if (data.length === 0) return { avgTemp: 0, avgHumidity: 0 };
    
    const sumTemp = data.reduce((sum, reading) => sum + reading.temperature, 0);
    const sumHumidity = data.reduce((sum, reading) => sum + reading.humidity, 0);
    
    return {
      avgTemp: (sumTemp / data.length).toFixed(2),
      avgHumidity: (sumHumidity / data.length).toFixed(2)
    };
  };

  const generateInsights = (summary) => {
    const { avgTemp, avgHumidity } = summary;
    let insights = [];

    if (avgTemp > 30) {
      insights.push("The average temperature is high. Consider cooling measures.");
    } else if (avgTemp < 10) {
      insights.push("The average temperature is low. Consider heating measures.");
    }

    if (avgHumidity > 60) {
      insights.push("The average humidity is high. Consider using a dehumidifier.");
    } else if (avgHumidity < 30) {
      insights.push("The average humidity is low. Consider using a humidifier.");
    }

    return insights;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const summary = calculateSummary();
  const insights = generateInsights(summary);

  return (
    <div>
      <h1>Sensor Data Report</h1>
      <div id="report-content">
        <h2>Raw Data</h2>
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Temperature (°C)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map(reading => (
              <tr key={reading.timestamp}>
                <td>{new Date(reading.timestamp).toLocaleString()}</td>
                <td>{reading.temperature}</td>
                <td>{reading.humidity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Summary</h2>
        <p>Average Temperature: {summary.avgTemp}°C</p>
        <p>Average Humidity: {summary.avgHumidity}%</p>

        <h2>Insights</h2>
        <ul>
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </div>
      <button onClick={generatePDF}>Download as PDF</button>
    </div>
  );
};

export default ReportComponent;