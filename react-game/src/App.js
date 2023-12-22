import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberGuessingGameLimit from './NumberGuessingGameLimit';
import Quiz from './Quiz';

function App() {

  const Home = () => {
    return (
      <div>
        <h2 className='text-center mt-3'>which you want GamePlay?</h2>
      </div>
    )
  }
  return (
    <Router>
      <div className='Container mt-4'>
        <h1 className='text-center'>
          게입 웹 사이트
        </h1>
        <nav className='nav justify-content-center mt-4'>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/number-guessing-game' className='nav-link'>Number Guessing Game</Link>
          <Link to='/quiz' className='nav-link'>Quiz Game</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/number-guessing-game' element={<NumberGuessingGameLimit/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </div>
    </Router>
    
  );

  
}

export default App;
