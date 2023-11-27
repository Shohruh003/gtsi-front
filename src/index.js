import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import { TokenProvider } from './context/tokenContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <TokenProvider>
        <App />
      </TokenProvider>
    </ThemeProvider>
  </Router>
);


