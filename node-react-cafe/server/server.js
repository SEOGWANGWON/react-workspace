const oracledb = require('oracledb');
const express = require('express');

// express 활용하기 위한 app 생성
const app = express();

// 백엔드에서 쓸 포트번호 설정
const PORT = 5227;

// 백엔드와 프론트에서 포트번호를 가져와서 쓸것이기 때문에 cors 사용
const cors = require('cors');

// 어떤 경로든 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

// 오라클 연결
const dbConfig = {
    user: 'REACT',
    password: 'REACT',
    connectString: 'localhost:1521/XE',
}

// express 에서  json 형식으로 보여주게 허락, 설정
app.use(express.json());

async function runQuery(sql, binds = [], options = {}){
    let connection;

    try{
        // db 연결 
        connection = await oracledb.getConnection(dbConfig);

        // 가져온 값 return으로 전달
        const result = await connection.execute(sql, binds, options);
        //return result.rows

        return result.rows.map((cafe) => ({
            ID: cafe[0],
            MENU: cafe[1],
            PRICE: cafe[2],
        }))

    } catch (error){
        console.error(error);
    }
}

// 주소값 설정
app.get('/', (request, response) => {
    response.send('바쿠엔도 연결 완료.')
})

// db 제대로 연결 됐는지 확인
app.get('/api/cafes', async(request, response) => {
    const cafes = await runQuery('SELECT * FROM cafe');
    response.json(cafes);
})

// 서버 제대로 실행되는지 콘솔창 로그 
app.listen(PORT, () =>{
    console.log(`서버가 시작되었습니다. : http://localhost:${PORT}`)
})