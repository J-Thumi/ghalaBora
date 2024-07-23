/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import Logo from "../../images/LogoSymb.svg"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Login = () => {
  const[name,setName]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/login',{name,password})
    .then(result=>{
      console.log(result)
      if(result.data==="success"){
        navigate(`/dashboard/${name}`)
    }
    })
    .catch(err=>console.log(err))
  }

  return (
    <main className="login">
        <div className="wrapper">
          <form action="#"
          onSubmit={handleSubmit}>
            <img src={Logo} alt="GhalaBora"/>
            <h2>Login</h2>
              <div className="input-field">
              <input type="text" 
               onChange={(e)=>setName(e.target.value)}
              required/>
              <label>Enter your className</label>
            </div>
            <div className="input-field">
              <input type="password"
              onChange={(e)=>setPassword(e.target.value)}
              required/>
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember"/>
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <div className="register">
              <p>Don't have an account? 
                  <div className="reg"><a href="#" >Register</a></div>   </p>
            </div>
            <input type="Submit" value="Login" className="button"/>
          </form>
       </div>
    </main>
  )
}

export default Login
