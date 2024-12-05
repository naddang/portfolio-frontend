import React, { useEffect, useState } from 'react';

function DesignPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // 백엔드에서 HTML 데이터를 가져오는 함수
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('/api/html-content'); // 백엔드 API 엔드포인트
        const data = await response.text();
        setHtmlContent(data);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div className="design-page">
      <h1>Design Page</h1>
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export default DesignPage;