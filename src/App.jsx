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



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <div><Nav /></div>
      <div>  <Homepage/></div>
      <Problem/>
      <Services/>
      <Features/>
      
      <Team/>
   <Collaborators/>
    </>
  )
}

export default App
