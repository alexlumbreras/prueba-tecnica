import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Welcome to the Technical Test 👋🏻</h1>
      <p>Please select an exercise:</p>
      <nav>
        <Link to="/exercise1">Go to Exercise 1</Link>
        <Link to="/exercise2">Go to Exercise 2</Link>
      </nav>
    </>
  );
};
