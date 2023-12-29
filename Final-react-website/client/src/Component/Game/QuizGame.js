import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const QuizGame = () => {

    const questions = [
        {
            id: 1,
            question: 'React는 어떤 라이브러리인가요?',
            options: ['UI 라이브러리', '모두'],
            correctAnswer: 'UI 라이브러리',
          },
          {
              id: 2,
              question: 'jSX는 어떤 무엇인가요?',
              options: ['JavaScript XML', '모름','모두'],
              correctAnswer: 'JavaScript XML',
          },
          {
              id: 3,
              question: '포트폴리오를 제대로 작성하실건가요?',
              options: ['네', '아니오', '고민중'],
              correctAnswer: '네',
          },
          {
              id: 4,
              question: '당신은 제대로 공부를 하고있나요?',
              options: ['네', '아니오','잘 모르겠다.'],
              correctAnswer: '네',
          },
          {
              id: 5,
              question: '당신은 코딩공부라는걸 정확히 인지하고 있는거 같습니까?',
              options: ['네', '아니오', '잘 모르겠다.'],
              correctAnswer: '네',
      
          },
            {
              id: 6,
              question: 'React Hook에서 상태를 어떻게 관리하나요?',
              options: ['useState', 'useEffect', 'useContext', '모두'],
              correctAnswer: '모두',
            },
            {
              id: 7,
              question: 'React에서 컴포넌트 간의 통신을 위해 사용되는 속성은?',
              options: ['state', 'props', 'context', 'event'],
              correctAnswer: 'props',
            },
            {
              id: 8,
              question: 'React에서 라우팅을 구현하기 위한 라이브러리는 무엇인가요?',
              options: [
                'React Router',
                'React Navigation',
                'React Route',
                'Routing React',
              ],
              correctAnswer: 'React Router',
            },
            {
              id: 9,
              question: 'React에서 Redux를 사용하기 위한 라이브러리는 무엇인가요?',
              options: ['react-redux', 'redux-thunk', 'redux-saga', 'redux'],
              correctAnswer: 'react-redux',
            },
            {
              id: 10,
              question:
                'React 컴포넌트의 생명주기 메서드 중 마운트 단계에서 호출되는 메서드는?',
              options: [
                'componentDidMount',
                'componentWillUnmount',
                'componentDidUpdate',
                'render',
              ],
              correctAnswer: 'componentDidMount',
            },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);  
    const [showScore, setShowScore] = useState(false);


    // 프로그래스바 가 100% 되는 값을 넣어주는 함수 생성
    const progress = (currentQuestion / questions.length) * 100;
    
    const userProgress = (score / questions.length) * 100;

    // currentQuestion : 현재 사용자가 답한 질문의 번호를 나타내는 상태
    // questions.length : 전체 질문의 개수
    // 예를 들어서 currentQuestion 가 1이고
    // questions.length 7이라면
    // progress 는 (1/7) * 100 계산돼서 약 14.29%가 됨
    // 14.29%는 사용자가 퀴즈를 14.29% 완료했음을 보여줄 수 있음

    const AnswerButtonClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer){
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="container mt-5">
            {showScore ? (
                <div className="card">
                    <div className='card-body'>
                        <h2 className='card-title'>
                            점수 : {score} / {questions.length}
                        </h2>
                        <button className='btn' onClick={restartQuiz}>
                            다시시작
                        </button>
                    </div>
                </div>
            ) : (
                <div className='md-2'>
                    <ProgressBar 
                    variant="success"
                    now={progress} 
                    style={{ height: '30px', borderRadius: '10px' }}
                    label={`전체 문제 진행률 : ${progress.toFixed(2)}%`}/>

                    <ProgressBar 
                    variant="warning"
                    now={userProgress} 
                    style={{ height: '30px', borderRadius: '10px' }}
                    label={`내가 맞춘 문제 : ${userProgress.toFixed(2)}%`}/>
                    
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='card-title'>질문 : {currentQuestion + 1}</h2>
                        <p className='card-text'>{questions[currentQuestion].question}</p>
                    </div>
                    <div className='mt-3'>
                        {questions[currentQuestion].options.map((option) => (
                            <button className='btn btn-outline-primary mb-2' key={option} onClick={() => AnswerButtonClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default QuizGame;