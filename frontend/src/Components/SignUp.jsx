import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SignUp.css';
import Logo from '../assets/x-logo.svg'

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

  // Container animation
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Children elements animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      className="signup-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="logo" variants={itemVariants}>
        <img
          src={Logo}
          className="logo-img"
          alt="Logo"
        />
      </motion.div>
      <motion.h2 variants={itemVariants}>Sign Up</motion.h2>
      <motion.input
        variants={itemVariants}
        type="email"
        name="email"
        placeholder="Enter your Email"
        required
        onChange={handleChange}
      />
      <motion.input
        variants={itemVariants}
        type="password"
        name="password"
        placeholder="Enter your Password"
        required
        onChange={handleChange}
      />
      <motion.input
        variants={itemVariants}
        type="text"
        name="username"
        placeholder="Enter Username"
        required
        onChange={handleChange}
      />
      <motion.input
        variants={itemVariants}
        type="text"
        name="fullname"
        placeholder="Enter Your Full Name"
        required
        onChange={handleChange}
      />
      <motion.button
        variants={itemVariants}
        onClick={signUpHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up
      </motion.button>
      <motion.h5 variants={itemVariants}>
        Already Have an Account ? <span ><a className='link' href="/signin">Sign In</a></span>
      </motion.h5>
    </motion.div>
  );
};

export default SignUp;