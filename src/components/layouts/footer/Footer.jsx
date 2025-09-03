// src/components/Footer.jsx
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="logo mt-0"></div>
        <div className="d-flex w-100">
          <div className="w-50">
            <p className='text-md font-me'>
            <span className='text-lg font-bo'>Tourli와 함께하는 여정의 동반자</span> <br />
            Tourli는 여행의 모든 순간을 기록하고, 개인 맞춤형 여행 영감을 제공하는 앱입니다.</p>
          </div>
          <div className="d-flex justify-content-end w-50">
            <div className={`${styles.links} d-flex`}>
              <a href="/terms">이용약관</a>
              <a href="/privacy">개인정보처리방침</a>
              <a href="/faq">자주 묻는 질문</a>
              <a href="/support">고객센터</a>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <p className='text-sm font-me'>© 2025 Tourli. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;