import React, {useState} from 'react' ;
import sigyung from '../img/성시경4.jpg';
import '../App.css';
import image1 from '../img/image1.jpg';

let count = 1;

// 증가시키는 함수
function AddCount (){
    // userState 를 활용해서 값 증가하는 함수를 완성할 것

    const [count, setCount] = useState(0);
    const upCount = () => {
        setCount(count + 81981981723);
    }
    return (
        <div>
            <img src={sigyung} className="App-logo" alt="sigyung"/>
            <img src={image1} className="App-logo" alt="sigyung"/>
            <h1>박창규 통장잔고</h1>
            <h2>잔고 : {count} 원</h2>
            <button onClick={upCount}>증가시키는 버튼</button>
        </div>
    )
}

function Test(){

    return(
        <div>
            <input ></input>
        </div>
    )
}

function Count(){
    return(
        <div>
            <AddCount/>
        </div>
    )
}

export default Count;