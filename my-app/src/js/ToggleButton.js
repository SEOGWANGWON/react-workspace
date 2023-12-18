import React, {useState} from "react";

function ToggleButton(){
    // script 공간
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }
    var idname = document.getElementById("idname");
    return(
        // html 공간
        <div id="idname">
            {/* 만약에 버튼이 true 이면 글자로 On 이라는 글자가 
            표시될 수 있도록 삼항 연산자를 이용해서 표기
            삼항 연산자란 
                어떤값 ? true : false */}
            <p>버튼 상태 : {isOn ? 'On' : 'Off'}</p>
            <button onCilck={toggle}>버튼상태변경하기</button>
        </div>
    )
}
export default ToggleButton;