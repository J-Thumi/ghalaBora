import ChartsComponent from "./charts"
import DashNav from "./DashNav"
import OverviewComponent from "./Overview"

const Dashboard = () => {
  return (
    <main className="dashboard">
      <DashNav/>
      <section className="dashboard-section">
        <select className="island-dropdown">
            <option value="Island D">Island D</option>
            <option value="Island C">Island C</option>
            <option value="Island B">Island B</option>
            <option value="Island A">Island A</option>
        </select>
        <OverviewComponent/> 
        <ChartsComponent/>
      </section>
    </main>
  )
}

export default Dashboard
