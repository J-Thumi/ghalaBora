import React from 'react';

const calculateAverages = (data) => {
  const averages = [];
  for (let i = 0; i < data.length; i += 10) {
    const subset = data.slice(i, i + 10);
    const avgTemp = subset.reduce((sum, row) => sum + row.temp, 0) / subset.length;
    const avgHumidity = subset.reduce((sum, row) => sum + row.humidity, 0) / subset.length;
    averages.push({
      startId: subset[0].sensor_reading_id,
      endId: subset[subset.length - 1].sensor_reading_id,
      avgTemp,
      avgHumidity
    });
  }
  return averages;
};

const ReportComponent = ({ data, onClose }) => {
  const averages = calculateAverages(data);

  return (
    <div className="report-container">
      <h2>Sensor Data Report (Averages of 10 Consecutive Values)</h2>
      <table>
        <thead>
          <tr>
            <th>Start ID</th>
            <th>End ID</th>
            <th>Average Temperature (°C)</th>
            <th>Average Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {averages.map((row, index) => (
            <tr key={index}>
              <td>{row.startId}</td>
              <td>{row.endId}</td>
              <td>{row.avgTemp.toFixed(2)}</td>
              <td>{row.avgHumidity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onClose} className="close-button">Close Report</button>
    </div>
  );
};

export default ReportComponent;
