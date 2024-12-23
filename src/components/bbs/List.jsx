import React, { useEffect, useState } from 'react';

function BBS() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 백엔드에서 이미지 데이터를 가져오는 함수
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images'); // 백엔드 API 엔드포인트
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bbs">
      <h1>갤러리 게시판</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BBS;