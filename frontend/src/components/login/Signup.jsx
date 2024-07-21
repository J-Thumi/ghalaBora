

const Signup = () => {
    
  return (
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
                <label htmlFor="policy">
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
  )
}

export default Signup
