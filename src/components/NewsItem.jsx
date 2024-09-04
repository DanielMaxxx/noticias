import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <div className="date-box">
        <div className="date">{news.date.split(' ')[0]}</div>
        <div className="month">{news.date.split(' ')[1]}</div>
      </div>
      <div className="content">
        <h3 className="title">{news.title}</h3>
        <p className="description">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
