import React from 'react';
import ChildComponent from './ChildComponent';

// childComponent 에서는 prop 라는 이름으로 
// 파라미터를 전달 받는다
// prop는 무조건으로 사용해야하는 이름은 아니지만  (부모에게 전달받음을 나타내는 약속한 단어)
// 부모에게 전달받아서 데이터를 사용한다는 의미를 지니기 때문에 부모 컴포넌트에서 전달받을 때는
// prop 라는 이름을 사용하는게 좋음
// message 와 data 또한 개발자가 정해놓은 이름일 뿐
// 무조건으로 작성해야하는 이름은 아님

function ParentComponent(){
    const data = 'Hello 나는 ParentComponent';

    return <ChildComponent message={data} />;  // 약속어 아님 내가 쓰고싶은 변수를 쓴것
}

export default ParentComponent;