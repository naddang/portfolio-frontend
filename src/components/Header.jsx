import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">포트폴리오</Link>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/about"><FaUser /> About</Link></li>
            <li 
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            >
              <Link to="#"><FaBriefcase /> Works</Link>
              <ul className={`submenu ${isSubMenuOpen ? 'open' : ''}`}>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </li>
            <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
            <li><Link to="/login">로그인</Link></li>
            <li><Link to="/signup">회원가입</Link></li>
          </ul>
        </nav>
        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;