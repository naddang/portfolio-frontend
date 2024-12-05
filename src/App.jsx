import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/index/Introduction';
import DesignPage from './components/menu/DesignPage';
import BBS from './components/menu/BBS';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NotFound from './components/common/NotFound'; // 404 페이지 컴포넌트
import Header from './components/Header'; // Header 컴포넌트
import Footer from './components/Footer'; // Footer 컴포넌트

import './App.css'

//D: 디자인페이지
//B: 게시판
//M: 개별 메뉴

// 백엔드에서 메뉴를 받아와서 라우팅을 함

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about" element={<DesignPage />} />
            <Route path="/projects" element={<BBS />} />
            <Route path="/portfolio" element={<BBS />} />
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