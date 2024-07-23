
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.time), // Extract the time from the data
    datasets: [
      {
        label: 'Temperature',
        data: data.map(d => d.temperature), // Extract the temperature from the data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
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
        text: 'Temperature vs. Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

TemperatureChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const HumidityChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.time), // Extract the time from the data
    datasets: [
      {
        label: 'Relative Humidity',
        data: data.map(d => d.humidity), // Extract the humidity from the data
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
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
        text: 'Relative Humidity vs. Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Relative Humidity (%)',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

HumidityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

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
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

const ChartsComponent = () => {
  const { data, loading, error } = useFetchChartData('localhost:8000/get-sensor-reading');
  

  if(loading){
    return(
      <div>
        Loading....
      </div>
    )
  }
  if(error){
    return(
      <div>Error while loading....</div>
    )
  }



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
