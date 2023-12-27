import React, { useState, useEffect } from 'react';
import './App.css'; // className="App-logo"
import axios from 'axios';

// A~Z 순서에 맞게 임포트 해주는게 예의


function AppCafe() {
  const [cafes, setCafes] = useState([]);
  const [newCafe, setNewCafe] = useState({name: '', price:''});

  useEffect(() => {
    axios
    .get('http://localhost:5555/api/cafes')
    .then((response) => setCafes(response.data))
    .catch((error) => console.error('에러입니다', error));
  
  });

  const addCafe = () => {
    axios
      .post('http://localhost:5003/api/cafe', newCafe)
      .then((response) => {
        setCafes(response.data);
        setNewCafe({ name: '', price: '' }); //데이터베이스에 저장 후 초기화 해주는 것
      })
      .catch((error) => console.error('에러가 발생했습니다.', error));
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
      <label>가격 : </label>
      <input 
        type='text'
        value={newCafe.price}
        onChange={(e) => setNewCafe({...newCafe, price : e.target.value})}
      />
      <button onClick={addCafe}>메뉴 추가하기</button>

      </div>

    </div>
  )
}


export default AppCafe;

