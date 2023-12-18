import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


reportWebVitals();

// Reacf.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
// reportWebVitals : react 성능 측정하기 위한 메서드

