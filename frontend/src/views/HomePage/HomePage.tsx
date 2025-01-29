import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Technical Test 👋🏻</h1>
      <p className="subtitle">Please select an exercise:</p>
      <nav className="nav-links">
        <Link to="/exercise1" className="link">
          Go to Exercise 1
        </Link>
        <Link to="/exercise2" className="link">
          Go to Exercise 2
        </Link>
      </nav>
    </div>
  );
};
