// import React , {useState,useEffect} from 'react';
// import axios from 'axios';

// const TestAPI = () => {

//     const [test, setTest] = useState([]);

//     useEffect(() => {
//         // 백엔드가 query문을 써서 db에서 보내준 데이터
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
            
//             const testData = response.data.map(test => ({

//                 id : test.id,
//                 name : test.name,
//                 username : test.username,
//                 email : test.email,
//                 address : test.address,
//             }));
//             setTest(testData);
//         })
//         .catch(error => {
//             console.log('넌 실패했어', error);
//         });
        
//     }, []);

//     return(
//         <>
//         {test.map(test => (

       
//         <div key={test.id}>
//             <p>이름 : {test.name}</p>
//             <p>닉네임 : {test.username}</p>
//             <p>이메일 : {test.email}</p>
//             <p>주소 : {test.address}</p>
//         </div>
//          ))}
//         </>
//     )

// }

// export default TestAPI;

import React, {useEffect, useState} from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data); 
            //response.data  = select *
        })
        .catch(err=> {
            console.log("err",err);
        });

    }, []);
    return (
        <div>
            <h1>관리자 사이트</h1>
            <h2>가입한 유저 정보</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>유저  이름 : {user.name}</p>
                        <p>유저이메일 : {user.email}</p>
                        <p>유저  주소 : {user.address && user.address.street}</p>
                        {/* 주소값 가져올떄의 경우 주의 */}
                    </li>
                ))}
            </ul>
        </div>

    )

}
export default UserList;