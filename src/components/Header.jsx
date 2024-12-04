import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';

function Header() {
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">포트폴리오</Link>
        <nav className={isMobileMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/"><FaHome /> Home</Link></li>
            <li><Link to="/about"><FaUser /> About</Link></li>
            <li 
              onMouseEnter={() => setIsProjectsMenuOpen(true)}
              onMouseLeave={() => setIsProjectsMenuOpen(false)}
            >
              <Link to="#"><FaBriefcase /> Works</Link>
              {isProjectsMenuOpen && (
                <ul className="submenu">
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
          </ul>
        </nav>
        <button className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;