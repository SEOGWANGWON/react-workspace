const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 5555;

// 들어오는 url 은 허용을 안해준 상태
// Post로 DB에 전달받을 url 주소도 허용할 수 있도록 넣어줘야함
app.use(cors({origin: 'http://localhost:3000'}))



// get으로 가져가는 주소만 허용해준 것
// app.use(cors());

const dbConfig = {
    user:'REACT',
    password: 'REACT',
    connectString: 'localhost:1521/XE',
}

app.use(express.json());

async function selectQuery(sql, binds = [], options = {}){
    let connection;

    try{
        // db와 연결하기
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(sql, binds, options);
        console.log('쿼리 결과:', result);

        return result.rows.map((row) => ({
            ID: row[0],
            NAME: row[1],
            PRICE: row[2],
        }));

    }catch(err){
        console.error('쿼리에러임다:', err);
    }finally{
        if(connection){
            try{
                await connection.close();
            }catch (err){
                console.error('문제생김 그래서닫음.:', err);
            }
        }
    }
}

app.get('/', (request, response) => {
    response.send('백엔드 연결 성공!');
  });

app.get('/api/cafes', async(request, response) => {
    const cafe = await selectQuery('SELECT * FROM cafe');
    response.json(cafe);
})

// post 로 전달받을 쿼리 작성해주기
app.post('/api/cafes', async (request, response) => {
    const {name, price} = request.body;
    console.log('데이터 들어왔는지 확인!', {name, price});

    if (!name || !price) {
        return response.status(400).json({ error: '이름이나 가격이 없습니다.' });
      }

    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        await connection.execute(
            'INSERT INTO cafe (ID, NAME, PRICE) VALUES (CAFE_SEQ.NEXTVAL, :name, :price)',
            { name, price },
            { autoCommit: true }
        );
        response.json({message: '성공적으로 저장되었습니다.'})
    } catch (error) {
        console.error('Error in POST /api/cafes:', error);
        response.status(500).json({ error: '서버에러' });
    } finally{
        if (connection){
            try{
                await connection.close();
            } catch (error){
                console.error('커넥션 닫기 에러 : ',error);
            }
        }
    }
})

// 연결 확인
app.listen(PORT, () => {
    console.log(`서버 시작 : http://localhost:${PORT}`)
})