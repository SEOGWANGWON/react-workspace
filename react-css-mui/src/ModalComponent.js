// 모달이란
//웹페이지에서 특정 작업을 수행하기 위해
// 표시되는 작은 창
//////////////////////////////////////////////// 알림창 같은 느낌의 작은 창 ( 결과 )

import React, { useState } from 'react' ;
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function ModalComponent {}
// export const ModalComponent {}
// function ModalComponent {}
// export const ModalComponent {}
// 모두 같은것

/*
import { Modal, Button } from 'react-bootstrap';
    -> 부트스트랩 스타일을 아예 함수(컴포넌트)로 만들어서 
        제공해주는 것
import 'bootstrap/dist/css/bootstrap.min.css';
    -> className 에 bottstrap이 지정한 형식이 들어감  
        className = "mt-5"
        css 형식

*/

const ModalComponent = () => {

    // 모달의 상태를 관리해줄 useState 훅 사용
    const [ showModal, setShowModal ] = useState(false);0

    // 모달을 열고 닫는 함수를 표현
    const handleShow = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    return (
        <div>
            {/* 모달을 열기 위한 버튼을 생성해줄 예정 
            variant : 부트스트랩에서 버튼 등 다양한 요소에 스타일 변형을 주기위해 지정해주는 속성
            
            종류 : primary secondary success danger warning info light dark (참고하는 사이트가 있음 링크 집에 있는 메모장에 있음)
            
            
            */}
            <Button variant='primary' onClick={handleShow}>
                모달 열기
            </Button>
            {/* 모달 함수 (컴포넌트) */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>모달 제목</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>안녕하세요. 모달 바디입니다!</p>
                    <p>ooo 님이 요청하신 사항을 확인해주시길 바랍니다.</p>
                    <ul>
                        <li>샤워</li>
                        <li>노스모킹</li>
                        <li>취사가능</li>
                        <li>커플 절대 금지 ^^ 반박 안받음</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        닫기
                    </Button>   
                    <Button variant='success' onClick={handleClose}>
                        저장
                    </Button>
                    <Button variant='danger' onClick={handleClose}>
                        홈페이지로 이동
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ModalComponent;