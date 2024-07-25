// Overview.jsx

import React from 'react';

const calculateDeviations = (data) => {
  if (data.length < 10) return { tempDeviation: 0, humidityDeviation: 0 };

  const last10 = data.slice(-10);
  const last10Temps = last10.map(row => row.temp);
  const last10Humidities = last10.map(row => row.humidity);

  const avgTemp = last10Temps.reduce((sum, temp) => sum + temp, 0) / last10Temps.length;
  const avgHumidity = last10Humidities.reduce((sum, humidity) => sum + humidity, 0) / last10Humidities.length;

  const latestTemp = last10Temps[last10Temps.length - 1];
  const latestHumidity = last10Humidities[last10Humidities.length - 1];

  const tempDeviation = latestTemp - avgTemp;
  const humidityDeviation = latestHumidity - avgHumidity;

  return {
    tempDeviation: tempDeviation.toFixed(2),
    humidityDeviation: humidityDeviation.toFixed(2),
  };
};

const OverviewComponent = ({ data }) => {
  const { tempDeviation, humidityDeviation } = calculateDeviations(data);

  const latestData = data.length > 0 ? data[data.length - 1] : { temp: 0, humidity: 0 };

  // Function to determine the color based on deviation
  const getDeviationColor = (deviation) => {
    return deviation >= 0 ? 'green' : 'red';
  };

  return (
    <section className="overview">
      <div className="overview-container">
        <div className="overview-card">
          <p>Temperature</p>
          <div className="info-div">
            <p className="info">
              {latestData.temp.toFixed(2)} <span className="unit">°C</span>
              <span
                className="deviation"
                style={{ color: getDeviationColor(tempDeviation) }}
              >
                {tempDeviation}°C
              </span>
            </p>
          </div>
        </div>
        <div className="overview-card">
          <p>Relative Humidity</p>
          <div className="info-div">
            <p className="info">
              {latestData.humidity.toFixed(2)} <span className="unit">RH</span>
              <span
                className="deviation"
                style={{ color: getDeviationColor(humidityDeviation) }}
              >
                {humidityDeviation}RH
              </span>
            </p>
          </div>
        </div>
        {/* <div className="overview-card">
          <p>Moisture Content</p>
          <div className="info-div">
            <p className="info">13.5 <span className="unit">%</span><span className="deviation">0.5%</span></p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OverviewComponent;
