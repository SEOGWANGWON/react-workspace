axios
javascript나 react에서 http 요청을 수행하기 위한 라이브러리

주로 웹서버와 통신, API 호출, 데이터 가져오기 작업에 사용

사용법
npm install axios

yarn install axios


// Axios 를 활용해서 API GET 요청

axios.get('https://jsonplaceholder.typicode.com/todos')
// axios.get로 데이터를 가져오는데 성공한다면
// then 을 사용해서 응답받을 데이터를 처리한다.
// 응답을 받을 때는 response로 서버에서 받은 응답을 표시
// response가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 보여줌
// response 를 활용해서 전달받은 데이터를 업데이트해서 화면에 보여주기 위해 setData를 활용
.then(respose => { setData(response.data);})

// 만약 데이터를 가져오는데 성공 데이터 처리
.then(response => {
    setData(response.data);
})

// 만약 데이터를 가져오는데 실패 데이터 처리
.catch(error => {
    console.log('일치하는 데이터가 없습니다.', error);
});

   