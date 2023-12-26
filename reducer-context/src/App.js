import './App.css';
import Quiz from '../../react-game/src/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberGuessingGame from '../../react-game/src/NumberGuessingGame';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NumberGuessingGameLimit from '../../react-game/src/NumberGuessingGameLimit';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <span className=''>
              <Link to='/'>Home</Link>
            </span>
            <span>
              <Link to='/Quiz'>도전! 골든벨~!</Link>
            </span>
            <span>
              <Link to='/NumberGuessingGameLimit'>숫자 맞추기 게임</Link>
            </span>
          </ul>
        </nav>
        <hr/>
        <Routes>
          <Route path='/Quiz' element={<Quiz/>}/>
          <Route path='/NumberGuessingGameLimit' element={<NumberGuessingGameLimit/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;



