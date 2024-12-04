import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 이 홈페이지는 비상업용이며, 이 곳 에서 모든 소스를 확인하실 수 있습니다.</p>
        <div className="social-links">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;