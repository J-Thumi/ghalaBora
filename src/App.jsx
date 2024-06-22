import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <div><Nav /></div>
      <div>  <Homepage/></div>
   
    </>
  )
}

export default App
