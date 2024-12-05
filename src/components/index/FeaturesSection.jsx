import React, { useEffect, useState } from 'react';
import Image from '../common/Image';

function FeaturesSection() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/api/features')
      .then(response => response.json())
      .then(data => setFeatures(data.slice(0, 6))); // 최근 6건 표시
  }, []);

  return (
    <div className="features-section w50p">
      <h2 className="text-2xl font-bold mb-4">포트폴리오 기능 소개</h2>
      {features.length === 0 ? (
        <p>소개할 기능이 없습니다</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map(feature => (
            <div key={feature.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturesSection;