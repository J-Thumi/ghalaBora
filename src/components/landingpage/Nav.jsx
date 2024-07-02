
import logo from '../../images/logo.jpeg'
const Nav = () => {


const login=()=>{
    document.body.classList.toggle("show-popup");
}



  return (
    <div>
      
    <header>
        <nav className="navbar">
            <a href="#" className="logo">
                <img src={logo} alt="logo"/>
                <h2>GhalaBora</h2>
            </a>
           
            <ul className="links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Problem">Problem</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#collaborators">Collaborators</a></li>
            </ul>


            <button className="login-btn" onClick={login}>Login</button>
        </nav>
    </header>
    </div>
  )
}

export default Nav