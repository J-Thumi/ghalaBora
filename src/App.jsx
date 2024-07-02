
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPageIndex from './components/landingpage/landingpageindex'
import Login from './components/login/Login'



function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPageIndex/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={''}/>
        <Route path='/profile' element={''}/>
        <Route path='/settings' element={''}/>
      </Routes>

    </Router>
    
    
  )
}

export default App
