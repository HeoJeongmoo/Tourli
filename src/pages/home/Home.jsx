import { useState, useEffect, useRef } from "react";
import styles from './Home.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";

function Home() {
  const containerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(50); // 기본 50%

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    const startX = e.clientX;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const containerWidth = container.offsetWidth;

      // 왼쪽 기준이 아니라 오른쪽 기준으로 반대로 계산
      let newWidth = ((container.offsetWidth - (startX + deltaX - container.getBoundingClientRect().left)) / containerWidth) * 100;
      if (newWidth > 90) newWidth = 90;
      if (newWidth < 10) newWidth = 10;
      setScreenWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,   // 여러 번 실행 가능
      mirror: true,  // 스크롤 업 시 반대로 실행
    });
  }, []);
  return (
    <>
      <article className='gradient'>
        <section className="visual" data-aos="fade-down">
          <div className="main">
            <div className={`${styles.mainModel} w-100`}>
              <p className="visual-title text-white font-bo mb-4">
                <span className='text-white font-me'>당신의 여행,</span><br/>
                영원한 추억과 새로운 시작
                {/* <ReactTyped
                  strings={[
                    "<span className='text-white font-me'>당신의 여행,</span><br/>영원한 추억과 새로운 시작",
                    "<span className='text-white font-me'>또 다른 도전,</span><br/>새로운 여정을 시작하세요",
                    "<span className='text-white font-me'>함께하는 순간,</span><br/>더 큰 행복이 됩니다"
                  ]}
                  typeSpeed={100}
                  backSpeed={20}
                  backDelay={1500}   // 다 타이핑 후 지우기 전 대기 시간 (ms)
                  loop={true}        // 반복 여부
                  showCursor={true}
                  cursorChar="!"
                /> */}
              </p>
              <ReactTyped
                strings={[
                  "여행의 순간을 사진과 이야기로 기록하고, 마음속 추억을 다시 만나보세요.",
                  "당신만의 여행 이야기를 담아보세요.",
                  "새로운 장소와 경험을 마음껏 기록해보세요."
                ]}
                typeSpeed={100}       // 타이핑 속도
                backSpeed={50}       // 지우는 속도
                loop={true}          // 반복
                showCursor={true}    // 커서 표시
                cursorChar="|"       // 커서 모양
                className='text-white section-sub-title font-re' // 기존 클래스 유지
              />

              {/* <p className='text-white section-sub-title font-re'>여행 순간을 기록하고, 추억 속에서 영감을 찾아보세요.</p> */}
              <button className='white-button'>
                <p className='text-xl font-bo mb-0'>여행 기록 시작하기</p>
                <div className='arrowHero'></div>
              </button>
            </div>
          </div>
        </section>
        {/* 섹션1 */}
        <section className='section1'>
          <div className="main">
              <p className="section-title font-me text-center" style={{height : "77px", marginBottom: "40px"}}  data-aos="fade-bottom" data-aos-offset="100">
            단순한 기록을 넘어 <span className='font-bo'>Tourli만의 특별함</span>
          </p>
          <p className="section-sub-title font-me text-center" style={{height : "66px", marginBottom: "80px"}}  data-aos="fade-bottom" data-aos-offset="50">다른 앱에서는 느낄 수 없는, <br />
            Tourli만의 세 가지 특별한 가치를 경험해보세요.
          </p>
          <div className="d-flex justify-content-between">
            <div className="block">
              <div className={styles.section1Content1} data-aos="fade-left" data-aos-offset="100">
                <div className="d-flex w-100 justify-content-between">
                  <div className="d-block">
                    <p className='content-title text-black mb-2'>살아 숨 쉬는 추억 기록</p>
                    <p className='content-sub-title mb-0'>여행의 모든 순간을 사진, 오디오, 감정, 날씨 등으로 기록하고, <br /> AI가 감성 하이라이트를 자동 제안하여 생동감 있는 추억을 완성합니다.</p>
                  </div>
                  <button className={`${styles.section1Button} bg-black d-flex justify-content-between`}>
                    <p className='text-white font-me text-sm mb-0'>시작하기</p>
                    <div className="arrow-white"></div>
                  </button>  
                </div>
                <div className={styles.function1}></div>
              </div>
              <div className={`${styles.section1Content2} overflow-hidden d-flex justify-content-between`} data-aos="fade-down" data-aos-offset="100">
                <div className="content-block">
                  <p className='content-title text-black mb-2'>안전하고 자유로운 공유</p>
                  <p className='content-sub-title mb-4'>
                    여행 기록을 비공개, 친구와 공유, 전체 공개로 <br />
                    세분화하여 자유롭고 안전하게 공유할 수 있습니다.
                  </p>
                  <button className={`${styles.section1Button} bg-black d-flex justify-content-between`}>
                      <p className='text-white font-me text-sm mb-0'>시작하기</p>
                      <div className="arrow-white"></div>
                  </button>
                </div>
                <div 
                  className={`${styles.function2} position-relative`} 
                  ref={containerRef} 
                >
                  <div 
                    className={`${styles.screen} position-absolute h-100`} 
                    style={{ width: `${screenWidth}%`}}
                  >
                    <div 
                      className={`${styles.lockButton} position-absolute`} 
                      onMouseDown={handleMouseDown}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.section1Content3} overflow-hidden position-relative`} data-aos="fade-right" data-aos-offset="100">
              <p className='content-title text-black mb-2 text-white'>나만을 위한 추천 여행지</p>
              <p className='content-sub-title mb-4 text-white' style={{opacity: "0.6"}}>사용자의 여행 기록을 분석해 취향에 맞는 여행지와 활동을 맞춤 추천하여, 다음 여행을 위한 영감을 제공합니다.</p>
              <button className={`${styles.section1Button} bg-white d-flex justify-content-between`}>
                  <p className='text-black font-me text-sm mb-0'>시작하기</p>
                  <div className="arrow-black"></div>
              </button>
              {/* 추후 api 작업 들어가면 수정 진행 */}
              <div className={`${styles.skew} d-flex h-100 position-absolute`} style={{ whiteSpace: 'nowrap' }}>
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button>
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button>
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>                  
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button>
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.skew} ${styles.skew2} d-flex h-100 position-absolute`} style={{ whiteSpace: 'nowrap' }}>
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button>
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button>
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>                  
                <div className={styles.card}>
                  <div className={styles.cardImg}></div>
                  <div className={styles.cardContentBloack}>
                    <p className='text-lg text-black font-bo mb-2'>기요미즈데라, 전통의 아름다움</p>
                    <p className='text-sm font-me'>
                      교토의 기요미즈데라는 일본의 고대 건축과 풍경 <br />
                      을 동시에 경험할 수 있는 곳입니다. 붉은 다층 ...
                    </p>
                    <div className="d-flex w-100 justify-content-between">
                      <button className={`${styles.cardButton} text-white`}>
                        둘러보기
                      </button> 
                      <button className={`${styles.cardHeartButton} text-white`}>
                        <div className={styles.heart}></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.background} w-100`}></div>
            </div>
          </div>
          </div>
        </section>
        {/* 섹션2 */}
        <section className='section2'>
          <div className="main">
            <div className="w-100" data-aos="fade-up" data-aos-offset="100">
              <p className="section-sub-title font-me">
              여행의 순간을 기록하고
              </p>
              <p className="section-title font-me" style={{marginBottom: "40px"}}>
                그 후 <span className='font-bo'> 당신의 삶</span>은 <br /> 어떻게 <span className='font-bo'>변했나요?</span>
              </p>
            </div>
          <div className={styles.reviews} data-aos="fade-down" data-aos-offset="100"></div>
          </div>
        </section>
        <section id={styles.section3} className='section3'>
          <div className="main d-flex justify-content-between">
            <div className="w-50"  data-aos="fade-left" data-aos-offset="100">
            <div className={styles.phone}></div>
          </div>
          <div className='d-flex align-items-end'  data-aos="fade-right" data-aos-offset="100">
            <div className="block">
              <p className="section-title font-me" style={{marginBottom: "40px"}}>
                다음 여행, <br />
                <span className='font-bo'>Tourli에서 시작하세요.</span>
              </p>
              <p className="section-sub-title font-me">
                지금 Tourli에 가입하고,소중한 여행 기록을 시작하세요. <br /> 
                새로운 세계가 열립니다.
              </p>
              <button className='navy-button'>
                <p className='text-xl font-bo mb-0'>여행 기록 시작하기</p>
                <div className='arrowWhite'></div>
              </button>
            </div>
          </div>
          </div>
        </section>
      </article>
    </>
  );
}
export default Home;