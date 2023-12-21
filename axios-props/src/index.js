import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieListCarousel from './MovieListCarousel';
import DogInfo from './DogInfo';
import TestAPI from './UserExam';
import PostAPI from "./PostAPI";
import PostComment from "./PostComment";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MovieList/> */}
    {/* <MovieList/> */}
    {/* <TestAPI/> */}
    {/* <PostAPI/> */}
    {/* <PostComment/> */}
    <MovieListCarousel/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
