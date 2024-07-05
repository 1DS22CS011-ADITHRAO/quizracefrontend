import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot password</a>
        </div>
        <button className="btn" type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an Account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
