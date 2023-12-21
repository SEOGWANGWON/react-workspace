import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image1 from './img/Gray.png';
import image2 from './img/안보고싶엇냐.jpg';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-light py-5">
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/* 
        bg-dark:
        bg : background 배경색
        -dark : 검정

        text-light : 글자색 흰색으로 설정

        py-5
        py : padding-y
        y : 위 아래 여백을 조절하는 클래스 (y축)
        x : 좌우 여백 조절 클래스
        
        부트스트랩에서 패딩을 상하좌우로 주고싶다면
        px-1 py-1 해서 숫자 조절하면됨.

        BootStrap : 여백의 크기를 1 ~ 5까지 5단계



        container : 본문을 담을 컨테이너를 생성

        mt-4 : mt는 margin-top 을 나타냄
               margin-top 본 문에 위 크기를 조정하는 것
               -4는 상단 마진을 4 단위로 설정하겠다는 것

        row : 컬럼을 나열하는데 사용

        col-md-6
        col : column 컬럼의 약자
        md : medium 중간 화면 크기
        -6 : 6개의 컬럼을 차지
             1줄의 컬럼은 12개 구성


      */}

      <main className="container mt-6"> {/* margin-top-4 줄인말 */}

        <section className='mb-5 '>  {/* mb-5 : margin bottom 5 섹션이 끝나고 아래 공간을주겟다 */}
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src={image1}/>
              <h2 className='text-center'>하나</h2>
              <p>이거 하나</p>
            </div>
            <div className='col-md-6'>
              <h2>About</h2>
              <p>Gray Baby</p>
            </div>
          </div>
        </section>

        <section className='mb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='text-center'>설명란입니다</h2>
              <p>왜냐하면 설명란이기때문입니다.</p>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src="https://img.freepik.com/free-vector/simple-geometric-seo-sessions-facebook-profile-cover_23-2149509971.jpg?w=900&t=st=1703121945~exp=1703122545~hmac=380d3ff3b58be68a3d954b9e215a25f7207f2e3bd6e620236cea03"/>
             </div>
          </div>
        </section>

        <section className='mb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src={image2}/>
            </div>
            <div className='col-md-6'>
              <h2>설명란</h2>
              <p>난 보고싶었는데</p>
              <p>넌 왜 나안찾아</p>
            </div>
          </div>
        </section>

        <section className='mb-5'>
          <h2 className='mb-4'>카드시작</h2>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title' class="text-light bg-dark">GitHub</h5>
                    <p className='card-text'>
                      <a href='https://github.com/SEOGWANGWON' class="text-warning" >My GitHub Link</a>
                    </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title' class="text-light bg-dark">My Blog</h5>
                    <p className='card-text'>
                    <a href='https://hotsixlover.tistory.com/' class="text-warning" >My Blog Link</a>
                    </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title' class="text-light bg-dark">추가 예정입니다</h5>
                    <p className='card-text' class="text-danger">
                      I'm 추가할거에요
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <form>
            <div className='mb-3'>
              <label className='form-labe'>
                Name
              </label>
              <input type='text' className='form-control' id='name' />
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                Email
              </label>
              <input type='email' className='form-control' 
              aria-describedby='emailSmall'/>
              <small id='emailSmall' className='form-text text-muted'>이메일</small>
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                메세지 작성
              </label>
              <textarea rows='4' className='form-control'> </textarea>
            </div>
            <button className='btn btn-primary mb-3'>전송하기</button>
          </form>
        </section>

      </main>
      <footer className='bg-dark text-light text-center py-3'>
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>
  );
}

export default App;
