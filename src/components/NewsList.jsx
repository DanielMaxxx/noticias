import React from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const newsData = [
    { date: '28 Mar', title: 'Notícia 1', description: 'No dia 28 a fiesc irá organizar uma campanha de menor aprendiz' },
    { date: '31 Mar', title: 'Notícia 2', description: 'Dia 31 irá ter o dia D do terceiro ano com tema esportes' },
    // Adicione mais notícias conforme necessário
  ];

  return (
    <div>
      {newsData.map((news, index) => (
        <NewsItem key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
