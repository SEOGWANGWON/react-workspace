import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {

  const [cafes, setCafes] = useState([]);

  // null 값으로 useState 선택해서 상세보기
  const [selectCafe, setSelectCafe] = useState(null);

  const infoCafe = (cafe) => {
    setSelectCafe(cafe);
  }

  useEffect(() => {
    axios.get('http://localhost:5227/api/cafes')
    .then((res) => setCafes(res.data))
    .catch((error) => {
      console.error('모두 불러오기 실패 에러입니다요~!', error)
    })
  }, []);

  return (
    <div >
      <h1>카페 목록</h1>
      <table border={1}>
        <thead>
          <th>메뉴번호</th>
          <th>메뉴이름</th>
          <th>메뉴가격</th>
        </thead>
      {cafes.map((cafe) => (
          <tr key={cafe.ID}>
            <td>{cafe.ID}</td>
            <td>{cafe.MENU}</td>
            <td>{cafe.PRICE}</td>
            <button onClick={() => infoCafe(cafe)}>상세보기</button>
          </tr>
        ))}
      </table>
      {selectCafe && (
        <div>
          <h2>상세 정보인데 ...........</h2>
          <p>ID : {selectCafe.ID}</p>
          <p>MENU : {selectCafe.MENU}</p>
          <p>PRICE : {selectCafe.PRICE}</p>
        </div>
      )}
      {/* 이게 왜 되지??? 좀 알아봐라*/}
      <h2>이건 ul, li로 불러온것</h2>
          <ul>
            {cafes.map((cafe) => (
              <li key={cafe.ID}>{cafe.MENU}{cafe.PRICE}</li>
            ))}
          </ul>
     
    </div>
  );
}

