import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Signin.css';
import Logo from '../assets/x-logo.svg'


const SignIn = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const signinhandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username : username,
          password : password
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await response.json();
      console.log('Sign in Success:', data);
    } catch (error) {
      console.error('There was a problem:', error);
    }
  };

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
      className='SignIn-container'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="logo" variants={itemVariants}>
        <img 
          src={Logo} 
          className='logo-img' 
          alt="Logo" 
        />
      </motion.div>
      <motion.h2 variants={itemVariants}>Sign In</motion.h2>
      <motion.input 
        type="text" 
        placeholder='Enter Your Username' 
        variants={itemVariants}
        onChange={(e)=>{
          const value = e.target.value;
          setusername(value)
          
        }}
      />
      <motion.input 
        type="password" 
        placeholder='Enter your Password'
        variants={itemVariants}
        onChange={(e)=>{
          const value = e.target.value;
          setpassword(value);
        }}
      />
      <motion.button 
        className='sign-in-btn'
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={signinhandler}
  
      >
        Sign In
      </motion.button>
       <motion.h5 variants={itemVariants}>
              Create an Account ? <span ><a className='link' href="/SignUp">Sign Up</a></span>
            </motion.h5>
    </motion.div>
  );
};

export default SignIn;