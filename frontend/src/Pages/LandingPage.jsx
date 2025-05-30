import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Add the stylesheet to the head
    const style = document.createElement('style');
    style.textContent = `
      /* Modern styling for the landing page */
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      
      :root {
        --primary-color: #1d9bf0;
        --primary-hover: #0f8ad9;
        --background-color: ${isDarkMode ? '#0f172a' : '#f9fafb'};
        --text-color: ${isDarkMode ? '#f1f5f9' : '#1e293b'};
        --secondary-bg: ${isDarkMode ? '#1e293b' : '#e2e8f0'};
        --accent-color: #0284c7;
        --card-bg: ${isDarkMode ? '#1e293b' : '#ffffff'};
        --card-shadow: ${isDarkMode ? '0 20px 50px rgba(29, 155, 240, 0.2)' : '0 20px 50px rgba(0, 0, 0, 0.08)'};
        --card-border: ${isDarkMode ? '1px solid rgba(29, 155, 240, 0.2)' : '1px solid rgba(0, 0, 0, 0.03)'};
        --font-family: 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif;
        --pill-bg: ${isDarkMode ? 'rgba(29, 155, 240, 0.1)' : 'rgba(29, 155, 240, 0.08)'};
        --gradient-bg: ${isDarkMode ? 
          'linear-gradient(135deg, rgba(29, 155, 240, 0.15), rgba(29, 155, 240, 0))' : 
          'linear-gradient(135deg, rgba(29, 155, 240, 0.08), rgba(29, 155, 240, 0))'};
        --subtle-text: ${isDarkMode ? '#94a3b8' : '#64748b'};
        --feature-card-bg: ${isDarkMode ? 'rgba(30, 41, 59, 0.4)' : 'rgba(255, 255, 255, 0.7)'};
        --feature-card-hover: ${isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.95)'};
        --footer-bg: ${isDarkMode ? '#0f172a' : '#f1f5f9'};
        --footer-border: ${isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)'};
        --highlight-ring: ${isDarkMode ? 'rgba(29, 155, 240, 0.3)' : 'rgba(29, 155, 240, 0.2)'};
      }
      
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
        background-image: ${isDarkMode ? 
          'radial-gradient(circle at 10% 30%, rgba(29, 155, 240, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 70%, rgba(29, 155, 240, 0.08) 0%, transparent 30%)' : 
          'radial-gradient(circle at 10% 30%, rgba(29, 155, 240, 0.05) 0%, transparent 30%), radial-gradient(circle at 90% 70%, rgba(29, 155, 240, 0.04) 0%, transparent 40%)'};
      }
      
      .page-container {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;
        overflow: hidden;
      }
      
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background:none;
        background-color: ${isDarkMode ? 'rgba(0, 0, 0, 0)' : 'rgba(249, 250, 251, 0.8)'};
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        box-shadow: 0 1px 0 ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
      }
      
      .theme-toggle {
        display:none;
      }
      
      .theme-toggle:hover {
        transform: rotate(30deg);
        box-shadow: 0 0 0 4px var(--highlight-ring);
      }
      
      .theme-toggle:active {
        transform: scale(0.9);
      }
      
      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--primary-color);
      }
      
      .logo-icon {
        width: 32px;
        height: 32px;
        color: var(--primary-color);
        transition: all 0.3s ease;
      }
      
      .button-nav {
        display: flex;
        gap: 1rem;
      }
      
      .nav-link {
        padding: 0.6rem 1.2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        color: var(--text-color);
      }
      
      .nav-link:hover {
        background-color: var(--pill-bg);
        color: var(--primary-color);
      }
      
      .nav-link.active {
        background-color: var(--pill-bg);
        color: var(--primary-color);
      }
      
      .main-content {
        margin-top: 5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      
      .hero-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 4rem;
        position: relative;
        overflow: hidden;
        padding: 4rem 2rem;
        border-radius: 24px;
        background: var(--gradient-bg);
        box-shadow: var(--card-shadow);
        border: var(--card-border);
      }
      
      .highlight-pill {
        padding: 0.5rem 1.2rem;
        border-radius: 50px;
        background-color: var(--pill-bg);
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .highlight-pill svg {
        width: 16px;
        height: 16px;
      }
      
      .hero-heading {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        text-align: center;
        line-height: 1.1;
        letter-spacing: -0.03em;
        background: linear-gradient(to right, var(--primary-color), #36c2ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .hero-subtext {
        font-size: 1.3rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        color: var(--subtle-text);
        text-align: center;
        max-width: 700px;
        font-weight: 400;
      }
      
      .cta-buttons {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .cta-button {
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
        position: relative;
        overflow: hidden;
      }
      
      .cta-button:first-child {
        background: linear-gradient(135deg, var(--primary-color), #36c2ff);
        color: white;
        border: none;
      }
      
      .cta-button:first-child:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(29, 155, 240, 0.3);
      }
      
      .cta-button:first-child::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: translateX(-100%);
        transition: 0.5s;
      }
      
      .cta-button:first-child:hover::after {
        transform: translateX(100%);
      }
      
      .cta-button:last-child {
        background-color: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }
      
      .cta-button:last-child:hover {
        background-color: var(--pill-bg);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(29, 155, 240, 0.15);
      }
      
      .features-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
      }
      
      .feature-card {
        background-color: var(--feature-card-bg);
        padding: 2.5rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 30px ${isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        transition: all 0.3s ease;
        border: ${isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.03)'};
        position: relative;
        overflow: hidden;
      }
      
      .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), #36c2ff);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
        background-color: var(--feature-card-hover);
      }
      
      .feature-card:hover::before {
        transform: scaleX(1);
      }
      
      .feature-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--primary-color), #36c2ff);
        border-radius: 16px;
        margin-bottom: 2rem;
        color: white;
        font-size: 1.5rem;
        box-shadow: 0 10px 20px rgba(29, 155, 240, 0.2);
      }
      
      .feature-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text-color);
      }
      
      .feature-desc {
        font-size: 1rem;
        line-height: 1.7;
        color: var(--subtle-text);
        margin-bottom: 1.5rem;
      }
      
      .learn-more {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.3s ease;
        margin-top: auto;
      }
      
      .learn-more:hover {
        gap: 0.8rem;
      }
      
      .stats-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        padding: 4rem 2rem;
        border-radius: 24px;
        background: var(--gradient-bg);
        box-shadow: var(--card-shadow);
        border: var(--card-border);
        margin-bottom: 4rem;
      }
      
      .stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      
      .stat-number {
        font-size: 3rem;
        font-weight: 800;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 1rem;
        color: var(--subtle-text);
        font-weight: 500;
      }
      
      .testimonials-section {
        margin-bottom: 4rem;
      }
      
      .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 3rem;
        text-align: center;
        color: var(--text-color);
        position: relative;
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
      }
      
      .section-title::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background: linear-gradient(to right, var(--primary-color), #36c2ff);
        border-radius: 2px;
      }
      
      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      
      .testimonial-card {
        background-color: var(--feature-card-bg);
        padding: 2rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 30px ${isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.05)'};
        border: ${isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.03)'};
        transition: all 0.3s ease;
      }
      
      .testimonial-card:hover {
        transform: translateY(-5px);
        background-color: var(--feature-card-hover);
      }
      
      .quote {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-color);
        margin-bottom: 1.5rem;
        font-style: italic;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      
      .author-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
      }
      
      .author-info {
        display: flex;
        flex-direction: column;
      }
      
      .author-name {
        font-weight: 600;
        color: var(--text-color);
      }
      
      .author-title {
        font-size: 0.9rem;
        color: var(--subtle-text);
      }
      
      .footer {
        background-color: var(--footer-bg);
        padding: 4rem 2rem 2rem;
        border-top: var(--footer-border);
      }
      
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .footer-top {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 3rem;
        margin-bottom: 3rem;
      }
      
      .footer-column {
        display: flex;
        flex-direction: column;
      }
      
      .footer-logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }
      
      .footer-about {
        color: var(--subtle-text);
        margin-bottom: 1.5rem;
        line-height: 1.6;
        font-size: 0.95rem;
      }
      
      .social-icons {
        display: flex;
        gap: 1rem;
      }
      
      .social-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--pill-bg);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      
      .social-icon:hover {
        transform: translateY(-5px);
        background-color: var(--primary-color);
        color: white;
      }
      
      .footer-title {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }
      
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      
      .footer-link {
        color: var(--subtle-text);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.95rem;
      }
      
      .footer-link:hover {
        color: var(--primary-color);
        transform: translateX(5px);
      }
      
      .footer-bottom {
        padding-top: 2rem;
        border-top: ${isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--subtle-text);
        font-size: 0.9rem;
      }
      
      .copyright {
        display: flex;
        gap: 0.5rem;
      }
      
      .bottom-links {
        display: flex;
        gap: 1.5rem;
      }
      
      .bottom-link {
        color: var(--subtle-text);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .bottom-link:hover {
        color: var(--primary-color);
      }
      
      /* Animation class */
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
      
      /* Responsive design */
      @media (max-width: 1024px) {
        .hero-heading {
          font-size: 3.5rem;
        }
        
        .feature-card {
          padding: 2rem;
        }
      }
      
      @media (max-width: 768px) {
        .hero-heading {
          font-size: 2.8rem;
        }
        
        .hero-subtext {
          font-size: 1.1rem;
        }
        
        .navbar {
          padding: 1rem;
        }
        
        .button-nav {
          display: none;
        }
        
        .main-content {
          padding: 1rem;
        }
        
        .hero-section {
          padding: 3rem 1.5rem;
        }
        
        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
        
        .copyright {
          justify-content: center;
        }
        
        .bottom-links {
          justify-content: center;
        }
      }
      
      @media (max-width: 480px) {
        .hero-heading {
          font-size: 2.2rem;
        }
        
        .cta-buttons {
          flex-direction: column;
          width: 100%;
        }
        
        .cta-button {
          width: 100%;
        }
        
        .logo span {
          display: none;
        }
        
        .stats-section {
          padding: 2rem 1rem;
        }
        
        .stat-number {
          font-size: 2.5rem;
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
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      <line x1="6.5" y1="17.5" x2="6.51" y2="17.5" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
          <div className="logo-icon">
            <XLogo />
          </div>
          <span></span>
        </div>
        <div className="button-nav">
          <a href="/features" className="nav-link">Features</a>
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/about" className="nav-link">About</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      
      <div className="main-content">
        <motion.div 
          className="hero-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="highlight-pill" variants={itemVariants}>
            <SparkleIcon /> New X Experience
          </motion.div>
          
          <motion.h1 className="hero-heading" variants={itemVariants}>
            Connect with the world in real-time
          </motion.h1>
          
          <motion.p className="hero-subtext" variants={itemVariants}>
            Join millions of people sharing ideas, experiences, and moments that matter. Discover what's happening now and be part of the global conversation.
          </motion.p>
          
          <motion.div className="cta-buttons" variants={itemVariants}>
            <motion.a 
              className="cta-button" 
              href="/signup"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </motion.a>
            
            <motion.a 
              className="cta-button" 
              href="/signin"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign In
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="features-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="feature-card"
            variants={featureVariants}
            whileHover="hover"
          >
            <div className="feature-icon">
              <ChatIcon />
            </div>
            <h3 className="feature-title">Meaningful Conversations</h3>
            <p className="feature-desc">Engage with topics and people that matter to you through rich conversations and interactive content.</p>
            <a href="/features/conversations" className="learn-more">
              Learn more <ArrowRightIcon />
            </a>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            variants={featureVariants}
            whileHover="hover"
          >
            <div className="feature-icon">
              <TrendingIcon />
            </div>
            <h3 className="feature-title">Real-time Trends</h3>
            <p className="feature-desc">Stay ahead with personalized trends and breaking news tailored to your interests and location.</p>
            <a href="/features/trends" className="learn-more">
              Learn more <ArrowRightIcon />
            </a>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            variants={featureVariants}
            whileHover="hover"
          >
            <div className="feature-icon">
              <UserIcon />
            </div>
            <h3 className="feature-title">Community Building</h3>
            <p className="feature-desc">Create and join communities of like-minded individuals to share ideas and grow your network.</p>
            <a href="/features/community" className="learn-more">
              Learn more <ArrowRightIcon />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="stats-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="stat-card">
            <div className="stat-number animate-pulse">500M+</div>
            <div className="stat-label">Daily Active Users</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number animate-pulse">100K+</div>
            <div className="stat-label">Topics Trending Daily</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number animate-pulse">180+</div>
            <div className="stat-label">Countries Connected</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number animate-pulse">24/7</div>
            <div className="stat-label">Real-time Updates</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="testimonials-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">What people are saying</h2>
          
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card"
              variants={featureVariants}
            >
              <p className="quote">"X has completely changed how I connect with my audience. The engagement and reach are unlike anything I've experienced on other platforms."</p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Content Creator</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              variants={featureVariants}
            >
              <p className="quote">"As a business owner, X has given me direct access to my customers in a way that feels authentic and meaningful. It's our primary platform for announcements."</p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <div className="author-name">Michael Chen</div>
                  <div className="author-title">Entrepreneur</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              variants={featureVariants}
            >
              <p className="quote">"The communities I've found on X have become an essential part of my daily routine. I've made real connections that extend beyond the platform."</p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <div className="author-name">Alex Rivera</div>
                  <div className="author-title">Community Member</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-icon">
                  <XLogo />
                </div>
                <span></span>
              </div>
              <p className="footer-about">
                Connecting the world through real-time conversations and authentic connections.
              </p>
              <div className="social-icons">
                {/* <a href="#" className="social-icon"><XLogo /></a> */}
                <a href="#" className="social-icon"><FacebookIcon /></a>
                <a href="#" className="social-icon"><InstagramIcon /></a>
                <a href="#" className="social-icon"><LinkedInIcon /></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <div className="footer-links">
                <a href="/about" className="footer-link">About Us</a>
                <a href="/careers" className="footer-link">Careers</a>
                <a href="/press" className="footer-link">Press</a>
                <a href="/blog" className="footer-link">Blog</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Resources</h3>
              <div className="footer-links">
                <a href="/help" className="footer-link">Help Center</a>
                <a href="/developers" className="footer-link">Developers</a>
                <a href="/advertise" className="footer-link">Advertise</a>
                <a href="/status" className="footer-link">Status</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
                <a href="/accessibility" className="footer-link">Accessibility</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              <span>© 2025 X Corporation.</span>
              <span>All rights reserved.</span>
            </div>
            <div className="bottom-links">
              <a href="/legal" className="bottom-link">Legal</a>
              <a href="/privacy" className="bottom-link">Privacy</a>
              <a href="/cookies" className="bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


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

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

 const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);