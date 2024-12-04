import React, { useEffect, useState } from 'react';

function FeaturesSection() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/api/features')
      .then(response => response.json())
      .then(data => setFeatures(data.slice(0, 3))); // 최근 3건만 표시
  }, []);

  return (
    <div className="features-section w50p">
      <h2>포트폴리오 기능 소개</h2>
      {features.length === 0 ? (
        <p>참여한 프로젝트가 없습니다</p>
      ) : (
        <ul>
          {features.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeaturesSection;