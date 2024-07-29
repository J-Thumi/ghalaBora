/* eslint-disable react/prop-types */


const calculateStats = (data) => {
  if (data.length === 0) return null;

  let sumTemp = 0, sumHumidity = 0;
  let minTemp = data[0].temp, maxTemp = data[0].temp;
  let minHumidity = data[0].humidity, maxHumidity = data[0].humidity;

  data.forEach(row => {
    sumTemp += row.temp;
    sumHumidity += row.humidity;
    minTemp = Math.min(minTemp, row.temp);
    maxTemp = Math.max(maxTemp, row.temp);
    minHumidity = Math.min(minHumidity, row.humidity);
    maxHumidity = Math.max(maxHumidity, row.humidity);
  });

  return {
    avgTemp: sumTemp / data.length,
    avgHumidity: sumHumidity / data.length,
    minTemp,
    maxTemp,
    minHumidity,
    maxHumidity
  };
};

const getRecommendations = (stats) => {
  const recommendations = [];

  if (stats.avgTemp < 15) {
    recommendations.push("Average temperature is low. Consider increasing heating to protect temperature-sensitive goods.");
  } else if (stats.avgTemp > 25) {
    recommendations.push("Average temperature is high. Improve cooling to prevent heat damage to products.");
  }

  if (stats.avgHumidity < 30) {
    recommendations.push("Average humidity is low. Increase humidification to prevent static electricity and product drying.");
  } else if (stats.avgHumidity > 60) {
    recommendations.push("Average humidity is high. Enhance dehumidification to prevent mold growth and product damage.");
  }

  if (stats.maxTemp - stats.minTemp > 10) {
    recommendations.push("Large temperature fluctuations detected. Improve temperature control for consistent storage conditions.");
  }

  if (stats.maxHumidity - stats.minHumidity > 20) {
    recommendations.push("Significant humidity variations observed. Enhance humidity control for stable storage environment.");
  }

  return recommendations;
};

const ReportComponent = ({ data }) => {
  const stats = calculateStats(data);
  const recommendations = getRecommendations(stats);

  const downloadReport = () => {
    // Prepare CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Add headers
    csvContent += "Statistic,Temperature (°C),Humidity (%)\n";
    
    // Add stats
    csvContent += `Average,${stats.avgTemp.toFixed(2)},${stats.avgHumidity.toFixed(2)}\n`;
    csvContent += `Minimum,${stats.minTemp.toFixed(2)},${stats.minHumidity.toFixed(2)}\n`;
    csvContent += `Maximum,${stats.maxTemp.toFixed(2)},${stats.maxHumidity.toFixed(2)}\n\n`;
    
    // Add recommendations
    csvContent += "Recommendations:\n";
    recommendations.forEach(rec => {
      csvContent += `${rec}\n`;
    });
    
    // Create download link and trigger download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "warehouse_environmental_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="report-container">
      <h4>Warehouse Environmental Report</h4>
      {stats && (
        <>
          <h5>Statistics</h5>
          <table className="stats-table">
            <thead>
              <tr>
                <th></th>
                <th>Temperature (°C)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Average</td>
                <td>{stats.avgTemp.toFixed(2)}</td>
                <td>{stats.avgHumidity.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Minimum</td>
                <td>{stats.minTemp.toFixed(2)}</td>
                <td>{stats.minHumidity.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Maximum</td>
                <td>{stats.maxTemp.toFixed(2)}</td>
                <td>{stats.maxHumidity.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <h4>Recommendations for Warehouse Manager</h4>
          {recommendations.length > 0 ? (
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          ) : (
            <p>No specific recommendations at this time. Environmental conditions are within acceptable ranges.</p>
          )}
        </>
      )}
      <button onClick={downloadReport} className="download-button">Download Report</button>
    </div>
  );
};

export default ReportComponent;