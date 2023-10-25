import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  // Intersection Observer를 이용하여 무한 스크롤 감지
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 스크롤이 감지되면 새로운 데이터를 로드
          loadMoreData();
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newItems = Array.from({ length: 200 }, (_, i) => `Item ${items.length + i + 1}`);
      setItems([...items, ...newItems]);
      setLoading(false);
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={containerRef}></div>
    </div>
  );
};

export default InfiniteScroll;
