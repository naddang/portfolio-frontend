import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';

const fetchMenus = async () => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL; // 변수 선언
    const response = await fetch(`${backendUrl}/api/menu`); // 백엔드 API 엔드포인트
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menus:', error);
    return [];
  }
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const getMenus = async () => {
      const menuData = await fetchMenus();
      if (menuData && Array.isArray(menuData.list)) {
        setMenus(menuData.list);
      } else {
        setMenus([]); // 배열이 아닌 경우 빈 배열로 설정
      }
    };

    getMenus();
  }, []);

  const renderMenu = (menuList, clsName) => {
    return (
      clsName ? (<ul className={`${clsName} ${clsName && isSubMenuOpen ? 'open' : ''}`}>
        {menuList.map(menu => {
          const IconComponent = Icons[menu.icon] || FaBriefcase; // 기본 아이콘 설정
          return (
            <li 
              key={menu.url}
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}>
              <Link to={menu.url}><IconComponent /> {menu.name}</Link>
              {menu.children && menu.children.length > 0 && renderMenu(menu.children, 'submenu')}
            </li>
          );
        })}
      </ul>) : 
      (<ul>
        {menuList.map(menu => {
          const IconComponent = Icons[menu.icon] || FaBriefcase; // 기본 아이콘 설정
          return (
            <li 
              key={menu.url}
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}>
              <Link to={menu.url}><IconComponent /> {menu.name}</Link>
              {menu.children && menu.children.length > 0 && renderMenu(menu.children, 'submenu')}
            </li>
          );
        })}
      </ul>)
    );
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">포트폴리오</Link>
        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>
        <nav className={isMenuOpen ? 'open' : ''}>
          {renderMenu(menus)}
        </nav>  
      </div>
    </header>
  );
}

export default Header;