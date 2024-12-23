import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicComponent from './components/DynamicComponent';
import Introduction from './components/index/Introduction';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NotFound from './components/common/NotFound'; // 404 페이지 컴포넌트
import Header from './components/Header'; // Header 컴포넌트
import Footer from './components/Footer'; // Footer 컴포넌트

import './App.css';

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

function App() {
  const [menus, setMenus] = useState([]); // 배열로 초기화

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
              console.log(menu),
              console.log(menu.url),
              <Route key={menu.id} path={menu.url} element={<DynamicComponent menu={menu} />} />
            ))}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} /> {/* 404 페이지 라우트 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;