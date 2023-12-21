import React , {useState,useEffect} from 'react';
import axios from 'axios';

const TestAPI = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        // 백엔드가 query문을 써서 db에서 보내준 데이터
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            
            const testData = response.data.map(test => ({

                id : test.id,
                name : test.name,
                username : test.username,
                email : test.email,
                address : test.address,
            }));
            setTest(testData);
        })
        .catch(error => {
            console.log('넌 실패했어', error);
        });
        
    }, []);

    return(
        <>
        {test.map(test => (

       
        <div key={test.id}>
            <p>이름 : {test.name}</p>
            <p>닉네임 : {test.username}</p>
            <p>이메일 : {test.email}</p>
            <p>주소 : {test.address}</p>
        </div>
         ))}
        </>
    )

}

export default TestAPI;