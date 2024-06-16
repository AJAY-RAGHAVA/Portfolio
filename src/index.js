import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this line is present
import App from './App';
import './styles.css';
import './components/Navbar.css';  // Ensure this line is present
import './components/about.css';   // Ensure this line is present

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
