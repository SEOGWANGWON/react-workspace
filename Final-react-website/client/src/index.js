import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Component/Todo/Todo';
import TodoNoCSS from './Component/Todo/TodoNoCSS';
import TodoList from './Component/Todo/TodoList';
import Weather from './Component/Weather/WeatherSearch'
import AppMain from './AppMain';
import TodoNotCSS from './Component/Todo/TodoNotCSS';

// indexJS가 최상위 js이기 때문에
// 경로문제로 인해 제일 위에도 bootstrap을 넣어줌

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMain />
    {/* <Todo/> */}
    {/* <TodoNoCSS/> */}
    {/* <TodoList/> */}
    {/* <Weather/> */}
    {/* <TodoNotCSS/> */}
  </React.StrictMode>
);


reportWebVitals();
