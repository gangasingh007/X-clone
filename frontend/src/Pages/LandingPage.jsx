import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/x-logo.svg';

const LandingPage = () => {
  useEffect(() => {
    // Add the stylesheet to the head
    const style = document.createElement('style');
    style.textContent = `
      /* Modern styling for the landing page */
      :root {
        --primary-color: #1da1f2;
        --background-color: #15202b;
        --text-color: #ffffff;
        --secondary-bg: #192734;
        --accent-color: #1a91da;
        --font-family: 'Helvetica Neue', Arial, sans-serif;
      }
      
      body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
        color: var(--text-color);
        background: none;
      }
      
      .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #00b7ff29;
        box-shadow: 0 20px 50px #00b7ff32;
        border-radius : 10px;
        height: 50vh;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;

      }
      
      .image-container {
        margin-bottom: 3rem;
      }
      
      .logo-image {
        width: 80px;
        height: 80px;
        filter: drop-shadow(0 0 10px rgba(29, 161, 242, 0.5));
      }
      
      .text {
        text-align: center;
        max-width: 500px;
        width: 100%;
      }
      
      .text-info {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        line-height: 1.3;
      }
      
      .auth {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .sign-up-btn {
        padding: 0.8rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        transition: all 0.3s ease;
        min-width: 160px;
        text-align: center;
      }
      
      .sign-up-btn:first-child {
        background-color: var(--primary-color);
        color: white;
        border: 2px solid var(--primary-color);
      }
      
      .sign-up-btn:first-child:hover {
        background-color: var(--accent-color);
        transform: translateY(-3px);
        box-shadow: 0 7px 14px rgba(29, 161, 242, 0.25);
      }
      
      .sign-up-btn:last-child {
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }
      
      .sign-up-btn:last-child:hover {
        background-color: rgba(29, 161, 242, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 7px 14px rgba(29, 161, 242, 0.15);
      }
      
      /* Responsive design */
      @media (min-width: 768px) {
        .landing-container {
          flex-direction: row;
          text-align: left;
          gap: 4rem;
        }
        
        .image-container {
          margin-bottom: 0;
        }
        
        .logo-image {
          width: 120px;
          height: 120px;
        }
        
        .text {
          text-align: left;
        }
        
        .auth {
          justify-content: flex-start;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        duration: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1 
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="landing-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="image-container"
        variants={itemVariants}
      >
        <motion.img 
          className='logo-image' 
          src={Logo} 
          alt="X Logo" 
          variants={logoVariants}
          whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
        />
      </motion.div>
      
      <div className="text">
        <motion.h3 
          className='text-info'
          variants={itemVariants}
        >
          Create Your Account and Join the Amazing X Community Now
        </motion.h3>
        
        <motion.div 
          className="auth"
          variants={itemVariants}
        >
          <motion.a 
            className='sign-up-btn' 
            href="/signup"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Create Account
          </motion.a>
          
          <motion.a 
            className='sign-up-btn' 
            href="/signin"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Sign In
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;