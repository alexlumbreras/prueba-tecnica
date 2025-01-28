import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage';
import { USCovidDashboard } from './components/USCovidDashboard/USCovidDashboard';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise1" element={<>Exercise 1</>} />
        <Route path="/exercise2" element={<USCovidDashboard />} />
      </Routes>
    </Router>
  );
};
