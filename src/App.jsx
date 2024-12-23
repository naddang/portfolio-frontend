import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/index/Introduction';
import DesignPage from './components/menu/DesignPage';
import BBS from './components/bbs/List';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NotFound from './components/common/NotFound'; // 404 페이지 컴포넌트
import Header from './components/Header'; // Header 컴포넌트
import Footer from './components/Footer'; // Footer 컴포넌트

import './App.css';

const fetchMenus = async () => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/menu`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menus:', error);
    return { list: [] }; // 빈 배열을 기본값으로 반환
  }
};

function App() {
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

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Introduction />} />
            {menus.map((menu) => (
              <Route key={menu.path} path={menu.path} element={<DynamicComponent componentName={menu.menuType} />} />
            ))}
            <Route path="*" element={<NotFound />} /> {/* 404 페이지 라우트 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const DynamicComponent = ({ componentName }) => {
  const components = {
    DesignPage,
    BBS,
    // 다른 컴포넌트를 여기에 추가
  };

  const Component = components[componentName];
  return Component ? <Component /> : <componentName />;
};

export default App;