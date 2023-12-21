// import React, {Component} from 'react';
// class R003_ImportComponent extends Components {
// 	render() {
// 	return (
// 		<h2>[THIS IS IMPORTED COMPONENT]</h2>
// 	)
// }
// }
// export default R003_ImportComponent;

import React, {useState, useEffect} from 'react';

function Test(){
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count +1273);
        document.title = `클릭횟수 ${count}`;
    }

    return(

        <div>
            <h1>THIS IS NOT IMPORTED COMPONENT</h1>
            <p>창규가 눈깜빡인 수  {count}</p>
            <button onClick={upCount}>Click</button>
        </div>
        
    )
}

export default Test;