import React, {useCallback, useState} from "react";

function ExampleCallback(){

    const [count, setCount] = useState(0);

    const increaClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); // 끝나기전 배열을 넣어주는 의미
                

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increaClick}>증가하기</button>
        </div>
    )
}
export default ExampleCallback;