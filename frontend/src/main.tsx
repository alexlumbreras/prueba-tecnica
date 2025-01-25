import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  return <h1>Hello, React with Vite and TypeScript!</h1>;
};

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
