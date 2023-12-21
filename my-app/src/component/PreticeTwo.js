import React, { useState, useEffect, useCallback } from "react";
import image1 from "../img/image1.jpg";

// const TodoList = () => {
//     이런것도 되네?
// }

function ExCallBack(){
    const [count, setCount] = useState(0);
    const inClick = useCallback (() =>{
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={inClick}>증가하기</button>
        </div>
    )
}
function MiniApp(){
    return(
        <div>
            <ExCallBack/>
            <PreticeTwo/>
        </div>
    )
}


function PreticeTwo() {
    const [count, setCount] = useState(0);

    const increament = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    useEffect(() => {
        console.log(` 현재 증가한 값 : ${count}`)
        document.title = `${count}`;
    });

    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if(newTodo.trim() !== ''){

            setTodos([...todos, newTodo]);

            setNewTodo('');
            // 할 일이 추가될 때마다 count 증가
            setCount(count +1);
        }
    };

    const removeTodo = (index) => {
        const updateTodos = [...todos];

        updateTodos.splice(index,1); 
        // 뒤에 숫자는 길이. 예를들어 [1,2,3,4,5] 가 있는데
        // 3을 삭제하기 눌렀을때 뒤 숫자가 2라면 3,4 가 지워지게된다.

        setTodos(updateTodos);

        // 할 일 삭제할 경우 count 감소
        setCount(count -1);
    };

    useEffect(() => {
        //document.title = `오늘 할일 갯수 : ${todos.length}`;
         document.title = `할일 갯수 : ${count}`;
    });


    return (
        <div>
            
            <h1> 하하하하하하하하하</h1>
            <img class="App-logo" src={image1} />
            <input
                type="text"
                value={newTodo}
                onChange={(H) => setNewTodo(H.target.value)}
            />
            <button onClick={addTodo}>할일 추가 凸</button>
            <br/>
            <ul>
                {todos.map((todo, index) =>(
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>할일 삭제하기♡~ ლ ´ڡ`ლ</button>
                    </li>
                ))}

            </ul>
            <br/>
            <h1>TodoList Count : {todos.length}</h1>
            <h1>Count : {count}</h1>
            {/*<button onClick={increament}>증가버튼</button> */}
        </div>
    )
}

export default MiniApp;