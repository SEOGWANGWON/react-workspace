import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './component/Blog';

const About = () => <div>소개페이지</div>;

const App =() => {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/> {/* 경로 설정 */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;