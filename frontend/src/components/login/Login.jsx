import { useState } from "react";
import Logo from "../../images/LogoSymb.svg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import queryString from 'query-string'; // Import the query-string library

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the form data
    const formData = queryString.stringify({ username, password });

    axios.post('http://localhost:8000/login', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(result => {
      console.log(result);
      if (result.data.detail === "Success") {
        localStorage.setItem('token', result.data.token); // Save the token in local storage
        navigate(`/dashboard/`);
      } else {
        alert("Wrong username or password");
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <main className="login">
      <div className="wrapper">
        <form action="#" onSubmit={handleSubmit}>
          <img src={Logo} alt="GhalaBora" />
          <h2>Login</h2>
          <div className="input-field">
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label>Enter your username</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <div className="register">
            <p>Don't have an account? 
                <span className="reg"><a href="#">Register</a></span>
            </p>
          </div>
          <input type="submit" value="Login" className="button" />
        </form>
      </div>
    </main>
  );
};

export default Login;
