import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signUpHandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      console.log('Sign Up Success:', data);
    } catch (error) {
      console.error('There was a problem:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo">
        <img
          src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png"
          className="logo-img"
          alt="Logo"
        />
      </div>
      <h2>Sign Up</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="fullname"
        placeholder="Enter Your Full Name"
        required
        onChange={handleChange}
      />
      <button onClick={signUpHandler}>Sign Up</button>
    </div>
  );
};

export default SignUp;