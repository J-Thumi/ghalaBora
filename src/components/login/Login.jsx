/* eslint-disable react/no-unescaped-entities */
import Logo from "../../images/Logo_maker_project-removebg-preview 1.svg"


const Login = () => {
  return (
    <main className="login">
        <div className="wrapper">
          <form action="#">
            <img src={Logo} alt="GhalaBora"/>
            <h2>Login</h2>
              <div className="input-field">
              <input type="text" required/>
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required/>
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
          </form>
       </div>
    </main>
  )
}

export default Login
