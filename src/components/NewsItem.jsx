import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
      <h3>{news.date}</h3>
      <h4>{news.title}</h4>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsItem;
