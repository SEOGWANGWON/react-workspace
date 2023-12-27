import React, { useState, useEffect } from 'react';

import axios from 'axios';

// A~Z 순서에 맞게 임포트 해주는게 예의
// import './App.css'; // className="App-logo"

function App() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({name: '', price:''});

  useEffect(() => {
    const timestamp = new Date().getTime();
    axios
      .get(`http://localhost:5555/api/cafes?timestamp=${timestamp}`)
      .then((response) => setCafes(response.data))
      .catch((error) => console.error('에러입니다.', error));
  }, []);

  const addCafe = () => {
    axios
      .post('http://localhost:5555/api/cafes', newCafe)
      .then(() => {
        axios
          .get(
            `http://localhost:5555/api/cafes?timestamp=${new Date().getTime()}`
          )
          .then((response) => {
            setCafes(response.data);
            setNewCafe({ name: '', price: '' });
          })
          .catch((error) => console.error('에러입니다.', error));
      })
      .catch((error) => console.error('에러입니다.', error));
  };





  return (
    <div>
      <h1>카페 메뉴</h1>
      <ul>
        {cafes.map((cafe) => (
        /* key={caffe[0]} = key=(cafe.ID)
          cafe[1] = cafe.NAME  
        */
          <li key={cafe.ID}>
            {cafe.NAME} - {cafe.PRICE} 원
          </li>
        ))}
      </ul>
      <h2>새로운 메뉴 추가</h2>
      <div>
        <label>메뉴 이름 : </label>
        <input 
        type='text'
        value={newCafe.name}
        onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value})}
        />
      </div>
      <div>
        <label>가격 : </label>
        <input 
          type='text'
          value={newCafe.price}
          onChange={(e) => setNewCafe({...newCafe, price : e.target.value})}
        />
        </div>
        <button onClick={addCafe}>메뉴 추가하기</button>
      </div>
  )
}


export default App;

