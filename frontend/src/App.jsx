
import './App.css'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import LandingPageIndex from './components/landingpage/landingpageindex'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import ReportGenerationPage from './components/reportgeneration/reportpage'
import ProtectedRoute from './components/protectedRoutes/Protected';

function App() {
 
 

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<LandingPageIndex/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/' element={<ProtectedRoute component={Dashboard}  />}/>
        <Route path='/report' element={<ProtectedRoute component={ReportGenerationPage}/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

    </Router>
    
    
  )
}

export default App
