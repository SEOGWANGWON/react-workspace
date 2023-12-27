import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';

export default function App() {

  const Home = () => <div>홈페이지</div>



  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link></Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Todos/>} />
        </Routes>

      </div>
    </Router>
  )
  

}


