// 백엔드 js 를 실행하기 위한
// 파일을 생성해준 것이며 파일명은 굳이 server.js 를 사용하지 않아도 됨
// (리액트처럼) 함수를 사용하지 않음 (리액트처럼) 컴포넌트 사용 x -> return 을 사용해서 div를 
// 사용할 일이 없다는 의미 

// oracledb를 연동하기위해 oracledb 요청하는 함수 작성
// 중간에 역할해주는 jdbc와 같은 역할을 하는 express를 요청하는 함수 작성

const oracledb = require('oracledb');
const express = require('express');

// 가지고온 express 를 사용하기 위한 app 생성
const app = express();

// 만약에 추후 다른 도메인에서 요청이 들어올 경우
// 요청을 허용해주는 cors를 설치한 후 생성할 것
// npm i cors

const cors = require('cors');
// 모든 경로에서 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

// Express로 백엔드에서 가지고 온 데이터를 사용할 수 있도록 설정

// 백엔드 전용 포트번호
const PORT = 5006;

// db 연결 정보 
const dbConfig = {
    user: 'REACT',
    password: 'REACT',
    connectString: 'localhost:1521/xe',
}

// Express 미들웨어 설정
app.use(express.json());

// oracle 연결하기 위한 connection과 sql 쿼리 실행 함수
// sql 쿼리와 쿼리로 인해 발생한 변수, 추가옵션을 지정해서 데이터베이스와 상호작용
// async 를 이용해서 비동기 작업을 수행할 것


// binds = [], options = {}
// 파라미터를 필수로 넣지 않아도됨

// binds = [], where ID 값이 필요하거나 추가적으로 클라이언트가 넣어야지만
// 들어갈 수 있는 값을 넣어줌

// 예를들어 runQuery('SELECT * FROM todos WHERE id = taskid,[taskid]')
// options = {} 자동 커밋을 해야하거나 객체화 로 변경해줄 때 많이 사용
// options 은 하나만 있을 일이 없을 수 있으므로
// {} 안에 내용을 여러개 묶어서 사용할 수 있도록 함 지금은 
// 사용할일이 없음 이런놈이 있구나~ 음 ~~
async function runQuery(sql, binds = [], options = {}){
    let connection;

    // try {} catch(err) {} finally {}
    // try 안에서 데이터베이스 연결을 실행하고, 쿼리도 실행
    // 만약에 오류가 발생하면 catch 를 사용해서 콘솔에 에러를 출력할 수 있게 설정
    // finally 만약에 데이터베이스를 닫고 싶다면 연결을 닫을 수 있도록 설정

    try {
        // await 를 사용해서ㅗ 비동기적으로 연결을 기다림
        connection = await oracledb.getConnection(dbConfig);

        // .execute 를 사용해서 쿼리를 실행할 수 있도록 함
        const result = await connection.execute(sql, binds, options);

        // 쿼리 실행 결과에서 행 정보를 모두 반환 하겠다 표기 rows = 행
        //return result.rows;
        return result.rows.map((row) => ({
            ID:row[0],
            TASK: row[1],
        }));
        // https://yts.mx/api/v2/list_movies.json 에서 
        // address 부분 처럼 가져오려면 배열을 두번써야한다 
        // ex TASK: TASK.[] 여기부분 좀더 찾아봐야 이해가될듯 근데 보통 쓸일이 없다고 하셨다.
        

    } catch(err) {
        console.error(err);
    } finally {
        if(connection){
            try{
                await connection.close();
            } catch(err) {
                close.error(err);
            }
        }
    }


}

// API를 사용해서 back-end 연결 설정

app.get('/', (request, response) => {
    response.send('백엔드 연결 성공!');
});


// api 를 활용해서 db query에 작성한 내용 갖고오기
app.get('/api/todos', async (request, response) => {
    const todos = await runQuery('SELECT * FROM todos');
    response.json(todos);

});

// 우리가 연결한 PORT에 정상적으로 연결되었는지 확인하기 위한 console 문 출력
app.listen(PORT, () => {
    console.log(`서버 시작 : http://localhost:${PORT}`);
})