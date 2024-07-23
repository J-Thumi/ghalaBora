
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


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


const ChartsComponent = ({islandData}) => {
  
  return (
    <div className="chart-section">
      <div className='chart-card'>
        <h5>Temperature Chart</h5>
        <TemperatureChart data={islandData} />
      </div>
      <div className='chart-card'>
        <h5>Humidity Chart</h5>
        <HumidityChart data={islandData} />
      </div>
    </div>
  );
  
};


ChartsComponent.propTypes = {
  islandData: PropTypes.arrayOf(
    PropTypes.shape({
      sensorid: PropTypes.id.isRequired,
      temperature: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default ChartsComponent;
