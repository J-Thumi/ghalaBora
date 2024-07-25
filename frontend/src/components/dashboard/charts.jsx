import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index + 1), // Use index as labels, starting from 1
    datasets: [
      {
        label: 'Temperature',
        data: data.map(d => d.temp), // Extract the temperature from the data
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
        max: data.length, // Adjust based on the length of the data
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        min: 10,
        max: 30,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

const HumidityChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index + 1), // Use index as labels, starting from 1
    datasets: [
      {
        label: 'Relative Humidity',
        data: data.map(d => d.humidity), // Extract the humidity from the data
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
        max: data.length, // Adjust based on the length of the data
      },
      y: {
        title: {
          display: true,
          text: 'Relative Humidity (%)',
        },
        min: 50,
        max: 80,
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
