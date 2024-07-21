import ChartsComponent from "./charts"
import DashNav from "./DashNav"
import OverviewComponent from "./Overview"
import SensorStatusComponent from "./SensorStatus"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
const Dashboard = () => {
  const {userName}=useParams()
  return (
    <main className="dashboard">
      <DashNav/>
      <section className="dashboard-section">
        <h1>Hello {userName} you are welcome</h1>
        <select className="island-dropdown">
            <option value="Island D">Island D</option>
            <option value="Island C">Island C</option>
            <option value="Island B">Island B</option>
            <option value="Island A">Island A</option>
        </select>
        <SensorStatusComponent/>
        <OverviewComponent/> 
        <ChartsComponent/>
        <Link to="/report" className="generate-report"> Generate Report</Link>
      </section>
    </main>
  )
}

export default Dashboard
