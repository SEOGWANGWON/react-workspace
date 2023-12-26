

// 가지고온 express 활용하기 위한 app 생성
const app = express();
const PORT = 5010;

// 현재 도메인에서 포트번호를 5010만 사용하는 것이 아니라
// 리액트에서 가지고 온 포트번호도 사용할 것이기 때문에 cors를 사용
const cors = require('cors');

// 어떤 경로든 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

// Oracle 연결정보
const dbConfig = {
    user: 'REACT',
    password: 'REACT',
    connectString: 'localhost:1521/xe',
}

// db에 연결을 도와줄 express에서 json파일로 db를 보여주는 것을
// 허락해서 json 형식으로 보여줄 수 있도록 설정
app.use(express.json());

async function runQuery(sql, binds = [], options = {}){
    //String connection = null;
    let connection;

    try{
        // 2줄 추가로    1. 데이터베이스 연결 가지고오기
        connection = await OracleDB.getConnection(dbConfig);

        // 2. 가지고온 결과를 return을 활용해서 전달하기
        const result = await connection.execute(sql, binds, options);
        return result.rows;

    } catch (error){
        console.error(errer);
    }

}

// 자바로치면 컨트롤러
// api endpoint 사용해서 backend 연결 설정
app.get('/', (request, response) => {
    response.send('백엔드 연결에 오신것을 환영합니다.')
})

// 서버가 제대로 실행되는지 확인하기 위해 콘솔창에 서버시작을 알려줌
app.listen(`서버가 시작되었습니다. : http://localhost:${PORT}`);