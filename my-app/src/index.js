import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './component/reportWebVitals';
import Count from './component/Count';
import ToggleButton from "./component/ToggleButton";
import IndexExample from "./component/IndexExample";
import ImageChange from "./component/ImageChange";
import ObjectExample from "./component/ObjectExample";
import Animal from "./component/Animal";
import TimerCount from "./component/TimerCount";
import PreticeOne from "./component/PreticeOne";
import ExampleCallback from "./component/ExampleCallback"
import PreticeTwo from "./component/PreticeTwo";
import ParentComponent from "./component/ParentComponent";
import Board from "./component/Board";
import Bobobobo from "./component/Bobobobo";
import JSXExam from "./component/JSXExam";
import TagExam from "./component/TagExam";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Count/> */}
    {/* <ToggleButton/> */}
    {/* <IndexExample/> */}
    {/* <ImageChange/>  */}
    {/* <ObjectExample/> */}
    {/* <Animal/> */}
    {/*<PreticeOne/>  여기 나중에 확인 */}
    {/* <TimerCount/> */}
    {/*  <ExampleCallback/> */}
    {/* <PreticeTwo/> */}
    {/* <ParentComponent/> */}
    {/* <Board/> */}
    {/*  <JSXExam/> */}
    <TagExam/>

    </React.StrictMode>
);


reportWebVitals();

// Reacf.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
// reportWebVitals : react 성능 측정하기 위한 메서드
