/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WINDOW_SIZE = 15; // Number of data points to show in the sliding window

const TemperatureChart = ({ data }) => {
  const [windowData, setWindowData] = useState([]);

  useEffect(() => {
    setWindowData(data.slice(-WINDOW_SIZE));
  }, [data]);

  const chartData = {
    labels: windowData.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Temperature',
        data: windowData.map(d => d.temp),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperature vs. Index',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time in Seconds',
        },
        min: 1,
        max: WINDOW_SIZE,
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        max: 30,
        min: 10
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

const HumidityChart = ({ data }) => {
  const [windowData, setWindowData] = useState([]);

  useEffect(() => {
    setWindowData(data.slice(-WINDOW_SIZE));
  }, [data]);

  const chartData = {
    labels: windowData.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Relative Humidity',
        data: windowData.map(d => d.humidity),
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Relative Humidity vs. Index',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time in Seconds',
        },
        min: 1,
        max: WINDOW_SIZE,
      },
      y: {
        title: {
          display: true,
          text: 'Relative Humidity (%)',
        },
        max: 90,
        min: 20,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

const ChartsComponent = ({ data }) => {
  return (
    <div className="chart-section">
      <div className='chart-card'>
        <h5>Temperature Chart</h5>
        <TemperatureChart data={data} />
      </div>
      <div className='chart-card'>
        <h5>Humidity Chart</h5>
        <HumidityChart data={data} />
      </div>
    </div>
  );
};

export default ChartsComponent;
