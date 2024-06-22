import React from 'react'
import logo from './lloggggg.jpeg'


const Nav = () => {
//     const navbarMenu = document.querySelector(".navbar .links");
// const hamburgerBtn = document.querySelector(".hamburger-btn");
// const hideMenuBtn = navbarMenu.querySelector(".close-btn"); 
// const showPopupBtn = document.querySelector(".login-btn");
// const formPopup = document.querySelector(".form-popup");
// const hidePopupBtn = formPopup.querySelector(".close-btn");
// const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
// // Show mobile menu
// hamburgerBtn.addEventListener("click", () => {
//     navbarMenu.classList.toggle("show-menu");
// });
// // Hide mobile menu
// hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
// // Show login popup
// showPopupBtn.addEventListener("click", () => {
//     document.body.classList.toggle("show-popup");
// });
// // Hide login popup
// hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
// // Show or hide signup form
// signupLoginLink.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
//     });
// }); 




const login=()=>{
    document.body.classList.toggle("show-popup");
}

const signup=()=>{
    document.body.classList.toggle("show-popup");
}

  return (
    <div>
      
    <header>
        <nav className="navbar">
            <span className="hamburger-btn material-symbols-rounded">menu</span>
            <a href="#" className="logo">
                <img src={logo} alt="logo"/>
                <h2>QualityBean
                    
                </h2>
            </a>
            <ul className="links">
                <span className="close-btn material-symbols-rounded">close</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Problem</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Colaborators</a></li>
            </ul>
            <button className="login-btn" onClick={login}>LOG IN</button>
        </nav>
    </header>
    <div className="blur-bg-overlay"></div>
    <div className="form-popup">
        <span className="close-btn material-symbols-rounded" ><button onClick={close}>close</button></span>
        <div className="form-box login">
            <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
                <h2>LOGIN</h2>
                <form action="#">
                    <div className="input-field">
                        <input type="text" required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot password?</a>
                    <button type="submit">Log In</button>
                </form>
                <div className="bottom-link">
                    Don't have an account?
                    <a href="#" id="signup-link" onClick={signup}>Signup</a>
                </div>
            </div>
        </div>
        <div className="form-box signup">
            <div className="form-details">
                <h2>Create Account</h2>
                <p>To become a part of our community, please sign up using your personal information.</p>
            </div>
            <div className="form-content">
                <h2>SIGNUP</h2>
                <form action="#">
                    <div className="input-field">
                        <input type="text" required/>
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" required/>
                        <label>Create password</label>
                    </div>
                    <div className="policy-text">
                        <input type="checkbox" id="policy"/>
                        <label for="policy">
                            I agree the
                            <a href="#" className="option">Terms & Conditions</a>
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="bottom-link">
                    Already have an account? 
                    <a href="#" id="login-link">Login</a>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Nav
