import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Team from './components/Team'
import Features from './components/Features'
import Collaborators from './components/Collaborators'
import Services from './components/Services'
import Problem from './components/Problem'
import {BrowserRouter,Routes,Route,Router} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Nav /> <Homepage/>
      <Problem/>
      <Services/>
      <Features/>
      
      <Team/>
   <Collaborators/>
   <Footer/>
{/* <BrowserRouter>

  <Link to='/'>Home</Link>
  <Link to='/footer'>footer</Link>
   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
    {/* <Route path='/' element={<Homepage/>}></Route>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/' element={<Homepage/>}></Route> */}
    {/* <Route path='/dash' element={<Dashboard/>}></Route> */}
    
   {/* </Routes>
  
   </BrowserRouter> */} 
    </>
  )
}

export default App
