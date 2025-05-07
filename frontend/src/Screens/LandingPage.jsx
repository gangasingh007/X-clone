import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="app">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <img src="https://cdn-icons-png.freepik.com/256/2496/2496110.png?semt=ais_hybrid" alt="Twitter Logo" className="logo-img" />
          <span className="logo-text">Twitter</span>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Testimonials</a>
          <a href="#" className="nav-link">Help</a>
        </div>
        <div className="nav-buttons">
         <a href="/login"><button className="btn-login">Log In</button></a>
         <a href="/signup"><button className="btn-signup">Sign Up</button></a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Connect and share with <span>Twitter</span></h1>
          <p className="hero-description">
            Join millions of people who discover, share, and discuss what's happening around the world in real time.
          </p>
          <div className="hero-buttons">
            <a href="/signup"><button className="btn-hero-primary">Get Started</button></a>
            <a href="/learnmore"><button className="btn-hero-secondary">Learn More</button></a>
          </div>
        </div>

        {/* Image Collage replacing the signup container */}
        <div className="image-collage">
          <div className="collage-item item1">
            <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe7f0b91c-5b06-4ce3-8e19-de25adc9195f.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" alt="Collage Image 1" />
          </div>
          <div className="collage-item item2">
            <img src="https://www.usatoday.com/gcdn/presto/2023/07/25/USAT/ce3b1d19-aac6-4e88-86af-bba0293257fe-AP23205349176876.jpg?crop=2333,2333,x350,y0" alt="Collage Image 2" />
          </div>
          <div className="collage-item item3">
            <img src="https://www.denverpost.com/wp-content/uploads/2023/04/Twitter_Blue_Checks_29185.jpg?w=525" alt="Collage Image 3" />
          </div>
          <div className="collage-item item4">
            <img src="https://media.wired.com/photos/679977e25dc88e317454dd36/3:2/w_1280%2Cc_limit/Elon-Musk-Twitter-Playbook-Business--2194950573.jpg" alt="Collage Image 4" />
          </div>
          <div className="collage-item item5">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/20232710-elon-musk-twitter-anniversary-march-2023.jpg?q=w_1110,c_fill" alt="Collage Image 5" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Twitter?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📣</div>
            <h3 className="feature-title">Real-time Updates</h3>
            <p className="feature-description">
              Stay connected with the latest trends and news as they happen with our real-time feed system.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Privacy First</h3>
            <p className="feature-description">
              Advanced privacy controls give you complete power over who sees your content and how it's shared.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Global Community</h3>
            <p className="feature-description">
              Connect with millions of users worldwide and expand your network beyond borders.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Cross-platform</h3>
            <p className="feature-description">
              Access Twitter from any device, anywhere, with our seamless cross-platform experience.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Twitter has completely changed how I stay informed. The interface is clean, fast, and the community is amazing!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">AJ</div>
              <div className="author-info">
                <span className="author-name">Alex Johnson</span>
                <span className="author-handle">@alexj</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "As a content creator, Twitter gives me the best platform to connect with my audience and share my work instantly."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MP</div>
              <div className="author-info">
                <span className="author-name">Maya Patel</span>
                <span className="author-handle">@mayacreates</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "The privacy features on Twitter are unmatched. I feel completely in control of my data and who sees my content."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">TS</div>
              <div className="author-info">
                <span className="author-name">Tom Smith</span>
                <span className="author-handle">@tomsmith</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to join the conversation?</h2>
        <p className="cta-subtitle">
          Sign up today and connect with friends, family, and millions of users worldwide.
          Share your thoughts, discover new trends, and be part of our growing community.
        </p>
        <a href="/signup"><button className="btn-hero-primary">Get Started Now</button></a>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Cookie Policy</a>
          <a href="#" className="footer-link">Accessibility</a>
          <a href="#" className="footer-link">Ads Info</a>
          <a href="#" className="footer-link">Blog</a>
          <a href="#" className="footer-link">Status</a>
          <a href="#" className="footer-link">Careers</a>
          <a href="#" className="footer-link">Help Center</a>
        </div>
        <p className="footer-copyright">© 2025 Twitter, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;