import React from 'react';
import errorImage from '../../assets/images/common/error_img.jpg';

function Image({ src, alt, className }) {
  const handleError = (event) => {
    event.target.src = errorImage; // 대체 이미지 경로
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

export default Image;