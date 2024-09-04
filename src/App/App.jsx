import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AdminPage from '../AdminPage/AdminPage';
import AddEditNews from '../components/AddEditNews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} /> 
        <Route path="/edit" element={<AddEditNews />} />
      </Routes>
    </Router>
  );
};

export default App;
