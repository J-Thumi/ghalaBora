import DashNav from "./DashNav"
import OverviewComponent from "./Overview"

const Dashboard = () => {
  return (
    <main className="dashboard">
      <DashNav/>
      <OverviewComponent/>   
    </main>
  )
}

export default Dashboard
