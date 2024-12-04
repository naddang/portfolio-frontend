import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsSection from './ProjectsSection';
import FeaturesSection from './FeaturesSection';
import Image from '../common/Image';

function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <div className="intro-content">
          <Image src="/assets/images/common/profile.jpg" alt="프로필 이미지" className="profile-image" />
          <div className="intro-text">
            <h1>백엔드 개발자 OOO입니다</h1>
            <p>2년 6개월의 경력을 가지고 있습니다.</p>
            <Link to="/about" className="cta-button">소개 자세히 보기</Link>
          </div>
        </div>
        <div className="main_container">
          <ProjectsSection />
          <FeaturesSection />
        </div>
      </div>
    </section>
  );
}

export default Introduction;