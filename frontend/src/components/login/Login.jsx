/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import Logo from "../../images/LogoSymb.svg"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Login = () => {
  const[name,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login',{name,password})
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
               onChange={(e)=>setEmail(e.target.value)}
              required/>
              <label>Enter your email</label>
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
            <button type="submit">Log In</button>
            <div className="register">
              <p>Don't have an account? 
                  <div className="reg"><a href="#" >Register</a></div>   </p>
            </div>
            <input type="Submit" value="Login"/>
          </form>
       </div>
    </main>
  )
}

export default Login
