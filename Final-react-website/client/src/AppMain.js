import React from 'react';
import './App.css'; // className="App-logo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Blog from './component/Blog';
// import Comment from './component/Comment';
import Footer from './Component/Footer';
// import Game from './component/Game/QuizGame';
// import MovieList from './component/MovieList';
// // import TodoList from './component/TodoList';
import Home from './Component/Home';
import Header from './Component/Header';
import NumberGuessingGame from './Component/NumberGuessingGame';

function App() {

  return (
    <Router>
      <div>
        <Header/>
          <div className='container mt-4'>
            <Routes>
              <Route path='/' element={<Home/>}>Home</Route>
              <Route path='/numberGuessingGame' element={<NumberGuessingGame/>}>숫자 맞추기 게임 </Route>
            </Routes>
          </div>
        <Footer/>
      </div>
    </Router>
  )
}


export default App;


// 1. 경로 인식 문제로 인해 이름 홈이나 헤 더 푸터랑 관련없는 이름으로 변경 후 재설정
// 2. 익스포트 디포트 같은 경우 콘스트에다가 옆에 적용해주면 에러날 경우가 농후하여 사용자제하길 바람 오케이? 확인.