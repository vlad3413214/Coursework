import React from 'react';
import './Footer.css'; 
import instagram from './images/2.png';
import email from './images/1.png';
import facebook from './images/4.png'; // Додайте імпорт зображення Facebook

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p className="text-muted">&copy; 2024 Бухгалтерія ЗВО</p>
          <nav className="footer-nav">
            <a href="/privacy-policy" className="footer-link">Політика конфіденційності</a>
            <a href="/terms-of-service" className="footer-link">Умови використання</a>
          </nav>
        </div>
        <div className="contact-section">
          <p className="contact-title">Зв'язатися з нами</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="mailto:yourmail@example.com">
              <img src={email} alt="Email" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;