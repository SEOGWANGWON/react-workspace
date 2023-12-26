import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);
  
  return result.rows.map((row) => ({
    ID: row[0],
    NAME: row[1],
    PRICE: row[2],
}))

  // npm i axios
  useEffect(() => {
    // 추후 server에서 Express를 활용해서 todos 데이터 가져올 것
    // fetch 를 npm i axios로 axios 설치해서 axios 코드로 변경하기

    // if문
    // fetch('/')
    // .then((res) => res.json())  // fetch 로 http를 응답할때 필요한 형식 fetch는 json()으로 변환 해줘야함
    // .then((data) => setTodos(data))
    // .catch((error) => console.error('에러가 발생했습니다.', error))
    
    axios
    // 데이터 가져오기
    .get('http://localhost:5006/api/todos') // 백엔드에서 데이터를 가져옴
    .then(res => {
      setTodos(res.data); // res를 괄호안에 넣어주는것과 안넣어주는건 무슨차이 ??? = 차이없음 그냥 변수명
    })
    .catch(error => {
      console.error('에러가 발생했습니다.', error);
    })
    
  }, []);


  return (
    <div>
      <h1>투두 리스트</h1>
      <ul>
        <li>
          {todos.map((todo) => (
            // 기존 <li key={todo.ID}> {todo.TASK} </li>
            <li key={todo.ID}> {todo.TASK} </li>
            ))}
        </li>
      </ul>
    </div>
  );
}

export default App;
