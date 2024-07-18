

const OverviewComponent = () => {
  return (
    <section className="overview">
      <div className="overview-container">
        <div className="overview-card">
          <p>Temperature</p>
          <div className="info-div">
            <p className="info">20 <span className="unit">°C</span><span className="deviation">-3°C</span></p>
          </div>
        </div>
        <div className="overview-card">
          <p>Relative Humidity</p>
          <div className="info-div">
            <p className="info">78 <span className="unit">RH</span><span className="deviation">-3RH</span></p>
          </div>
        </div>
        <div className="overview-card">
          <p>Moisture Content</p>
          <div className="info-div">
            <p className="info">13.5 <span className="unit">%</span><span className="deviation">0.5%</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewComponent