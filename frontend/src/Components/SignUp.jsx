import React from 'react'
import logoimg from '../assets/logo2.svg'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="signup-container">
          <div className="logo">
            <img src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png" className="logo-img" alt="Logo" />
          </div>
          <h2>Sign Up</h2>
          <input type="email" placeholder="Enter your Email" required />
          <input type="password" placeholder="Enter your Password" required />
          <input type="text" placeholder="Enter Username" required />
          <input type="text" placeholder="Enter Your Full Name" required />
          <button>Sign Up</button>
        </div>
      );
    };

export default SignUp