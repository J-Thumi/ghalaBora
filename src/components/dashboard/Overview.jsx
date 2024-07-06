

const OverviewComponent = () => {
  return (
    <section className="overview">

      <select className="island-dropdown">
           <option value="Island D">Island D</option>
           <option value="Island C">Island C</option>
           <option value="Island B">Island B</option>
           <option value="Island A">Island A</option>
      </select>

      <h3 className="oveview-label">Overview</h3>
      <div className="overview-container">
        <div className="overview-card">
          <p>Temperature</p>
          <div className="info-div">
            <p className="info">20 <span className="unit">°C</span><span className="deviation">°C</span></p>
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