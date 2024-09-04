import React from 'react';
import NewsList from '../components/NewsList';
import HomePage from './pages/HomePage';



const HomePage = () => {
  return (
    <div>
      <h1>Notícias</h1>
      <NewsList />
    </div>
  );
};

export default HomePage;
