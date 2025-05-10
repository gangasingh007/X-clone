import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Add the stylesheet to the head
    const style = document.createElement('style');
    style.textContent = `
      /* Modern styling for the landing page */
      :root {
        --primary-color: #1da1f2;
        --background-color: ${isDarkMode ? 'black' : '#f8fafc'};
        --text-color: ${isDarkMode ? '#f1f5f9' : '#1e293b'};
        --secondary-bg: ${isDarkMode ? 'black' : 'white'};
        --accent-color: #0284c7;
        --card-bg: ${isDarkMode ? 'black' : '#ffffff'};
        --card-shadow: ${isDarkMode ? '0 20px 50px rgba(6, 49, 149, 0.29)' : '0 20px 50px rgba(0, 0, 0, 0.31)'};
        --card-border: ${isDarkMode ? '1px solid rgba(0, 183, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.2)'};
      }
      
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      
      body {
        margin: 0;
        padding: 0;
        
        color: var(--text-color);
        background-color: var(--background-color);
        transition: all 0.3s ease;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .page-container {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--background-color);
        transition: all 0.3s ease;
      }
      
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        background:none;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        // background-color: ${isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 0.8)'};
        margin: 0px 40px;
        transition: all 0.3s ease;
      }
      
      .theme-toggle {
        background: none;
        border: none;
        color: var(--text-color);
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border:1px solid white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--secondary-bg);
        transition: all 0.3s ease;
      }
      
      .theme-toggle:hover {
        transform: rotate(30deg);
      }
      
      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--primary-color);
      }
      
      .landing-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        padding: 3rem 2rem;
        max-width: 1200px;
        margin: 5rem auto 2rem;
        gap: 2rem;
        background-color: var(--card-bg);
        box-shadow: var(--card-shadow);
        border: var(--card-border);
        position: relative;
        overflow: hidden;
      }
      
      .image-container {
        position: absolute;
        top: -20px;
        right: -20px;
        width: 160px;
        height: 160px;
        
        border-radius:50%;
        padding:0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }
      
      .logo-circle {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), #0ea5e9);
        opacity: 0.1;
      }
      
      .logo-image {
        width: 80px;
        height: 80px;
        filter: drop-shadow(0 0 15px rgba(29, 161, 242, 0.5));
        z-index: 1;
      }
      
      .text {
        text-align: center;
        max-width: 600px;
        width: 100%;
      }
      
      .text-info {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        background: linear-gradient(to right, var(--primary-color), #0ea5e9);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .subtext {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: ${isDarkMode ? '#94a3b8' : '#64748b'};
      }
      
      .auth {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .sign-up-btn {
        padding: 1rem 2.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        min-width: 180px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
      
      .sign-up-btn:first-child {
        background: linear-gradient(135deg, var(--primary-color), #0ea5e9);
        color: white;
        border: none;
      }
      
      .sign-up-btn:first-child:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(29, 161, 242, 0.3);
      }
      
      .sign-up-btn:last-child {
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }
      
      .sign-up-btn:last-child:hover {
        background-color: rgba(29, 161, 242, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(29, 161, 242, 0.15);
      }
      
      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
        width: 100%;
      }
      
      .feature-card {
        background-color: ${isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 0px 30px ${isDarkMode ? 'rgba(0, 33, 180, 0.2)' : 'rgba(0, 0, 0, 0.39)'};
        display: flex;
        border:1px solid rgba(0, 33, 180, 0.32);
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .feature-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--primary-color), #0ea5e9);
        border-radius: 50%;
        margin-bottom: 1.5rem;
        color: white;
        font-size: 1.5rem;
      }
      
      .feature-title {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      
      .feature-desc {
        font-size: 1rem;
        line-height: 1.6;
        color: ${isDarkMode ? '#94a3b8' : '#64748b'};
      }
      
      .footer {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        margin-top: auto;
        background-color: var(--secondary-bg);
        color: ${isDarkMode ? '#94a3b8' : '#64748b'};
        font-size: 0.9rem;
      }
      
      .footer-links {
        display: flex;
        gap: 1.5rem;
      }
      
      .footer-link {
        color: ${isDarkMode ? '#94a3b8' : '#64748b'};
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .footer-link:hover {
        color: var(--primary-color);
      }
      
      /* Responsive design */
      @media (min-width: 768px) {
        .landing-container {
          flex-direction: column;
          text-align: center;
          padding: 5rem 4rem 4rem;
        }
        
        .image-container {
          position: relative;
          top: auto;
          right: auto;
          width: 220px;
          height: 220px;
          margin-bottom: 1rem;
        }
        
        .logo-image {
          width: 120px;
          height: 120px;
        }
        
        .text {
          text-align: center;
          margin-top: 2rem;
        }
        
        .auth {
          justify-content: center;
        }
      }
      
      @media (max-width: 767px) {
        .navbar {
          padding: 1rem;
        }
        
        .text-info {
          font-size: 2rem;
        }
        
        .landing-container {
          margin-top: 4rem;
          padding: 2rem 1.5rem;
        }
        
        .features {
          grid-template-columns: 1fr;
        }
        
        .footer {
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // SVG icons
  const XLogo = () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );

  const TrendingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

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

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="page-container">
      <div className="navbar">
        <div className="logo">
          <div style={{ width: "30px", height: "30px", color: "#1da1f2" }}>
            <XLogo />
          </div>
          <span></span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      
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
          <div className="logo-circle"></div>
          <motion.div
            className="logo-image"
            variants={logoVariants}
            whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
            style={{ color: "#1da1f2" }}
          >
            <XLogo />
          </motion.div>
        </motion.div>
        
        <div className="text">
          <motion.h1 
            className="text-info"
            variants={itemVariants}
          >
            Experience X
          </motion.h1>

          <motion.p
            className="subtext"
            variants={itemVariants}
          >
            Connect with friends, share moments, discover news, and join discussions on topics that matter to you. Experience the global conversation on X.
          </motion.p>
          
          <motion.div 
            className="auth"
            variants={itemVariants}
          >
            <motion.a 
              className="sign-up-btn" 
              href="/signup"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Create Account
            </motion.a>
            
            <motion.a 
              className="sign-up-btn" 
              href="/signin"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign In
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="features"
            variants={itemVariants}
          >
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="feature-icon">
                <ChatIcon />
              </div>
              <h3 className="feature-title">Join the Conversation</h3>
              <p className="feature-desc">Engage with people and topics that interest you from around the world.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="feature-icon">
                <TrendingIcon />
              </div>
              <h3 className="feature-title">Stay on Top of Trends</h3>
              <p className="feature-desc">Discover what's happening now, from breaking news to viral memes.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="feature-icon">
                <UserIcon />
              </div>
              <h3 className="feature-title">Build Your Community</h3>
              <p className="feature-desc">Connect with like-minded individuals and grow your personal network.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="footer">
        <div>© 2025 X Corporation</div>
        <div className="footer-links">
          <a href="/about" className="footer-link">About</a>
          <a href="/privacy" className="footer-link">Privacy</a>
          <a href="/terms" className="footer-link">Terms</a>
          <a href="/cookies" className="footer-link">Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;