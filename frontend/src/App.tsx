import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise1" element={<>Exercise 1</>} />
        <Route path="/exercise2" element={<>Exercise 2</>} />
      </Routes>
    </Router>
  );
};
