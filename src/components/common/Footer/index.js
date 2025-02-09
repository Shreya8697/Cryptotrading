import React from "react";
import "./styles.css";
import { FaTwitter, FaTelegramPlane, FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div>
          <h2>CryptoTrade</h2>
          <p>The best crypto trading platform with real-time analytics and secure transactions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Market</a></li>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3>Subscribe</h3>
          <p>Get updates on the latest crypto trends.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaTelegramPlane /></a>
        <a href="#"><FaDiscord /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaLinkedin /></a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; 2025 CryptoTrade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
