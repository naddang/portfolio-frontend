import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/index/Introduction';
import ProjectsSection from './components/index/ProjectsSection';
import FeaturesSection from './components/index/FeaturesSection';
import NotFound from './components/common/NotFound'; // 404 페이지 컴포넌트
import Header from './components/Header'; // Header 컴포넌트
import Footer from './components/Footer'; // Footer 컴포넌트

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/features" element={<FeaturesSection />} />
            <Route path="*" element={<NotFound />} /> {/* 404 페이지 라우트 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;