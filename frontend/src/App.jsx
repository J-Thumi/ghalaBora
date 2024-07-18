
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPageIndex from './components/landingpage/landingpageindex'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import ReportGenerationPage from './components/reportgeneration/reportpage'


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPageIndex/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/report' element={<ReportGenerationPage/>}/>
      </Routes>

    </Router>
    
    
  )
}

export default App
