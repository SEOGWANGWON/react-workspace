// 똑같이 다시 쳐본 코드 문제쪽만 다름

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QQQQ = () => {
    const questions = [
        {
            id: 1,
            question : '그대 나를 떠나 간다해도~',
            options: ['난 그댈 보낸적 없죠~', '여전히 그댈~ 나를 살게 하는 이율테니~'],
            correctAnswer: '난 그댈 보낸적 없죠~',
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const AnswerButtonClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer){

        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true);
        }
    };

    // 초기화 버튼
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className='container mt-5'>
            {showScore ? (
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='card-title'>
                            점수 : {score} / {questions.length}
                        </h2>
                        <button className='btn' onClick={restartQuiz}>
                            다시시작!
                        </button>
                    </div>
                </div>
            ) : (
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='card-title'>질문 : {currentQuestion + 1}</h2>
                        <p className='card-text'>{questions[currentQuestion].question}</p>
                    </div>
                    <div className='mt-3'>
                        {questions[currentQuestion].options.map((option) =>(
                            <button className='btn btn-outline-primary mb-2' key={option} onClick={() => AnswerButtonClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )


}