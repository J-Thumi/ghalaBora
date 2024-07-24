/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import Logo from "../../images/LogoSymb.svg"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Login = () => {
  const[username,setuserName]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/login',{username,password})
    .then(result=>{
      console.log(result)
      if(result.data==="success"){
        navigate(`/dashboard/${name}`)
    }
    else{
      alert("Wrong username or password")
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
               onChange={(e)=>setuserName(e.target.value)}
              required/>
              <label>Enter your name</label>
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
                  <span className="reg"><a href="#" >Register</a></span>   </p>
            </div>
            <input type="Submit" defaultValue="Login" className="button"/>
          </form>
       </div>
    </main>
  )
}

export default Login
