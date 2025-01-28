import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage/HomePage';
import { USCovidDashboard } from './views/USCovidDashboard/USCovidDashboard';
import { NameForm } from './views/NameForm/NameForm';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise1" element={<NameForm />} />
        <Route path="/exercise2" element={<USCovidDashboard />} />
      </Routes>
    </Router>
  );
};
