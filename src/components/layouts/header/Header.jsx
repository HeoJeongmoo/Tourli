// src/components/Header.jsx
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='w-100 py-3'>
      <div className="main d-flex justify-content-between">
        <nav className='d-flex'>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/tips">여행 아이디어</Link>
          <Link to="/diary">여행 다이어리</Link>
          <Link to="/plan">여행 계획</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/support">문의하기</Link>
        </nav>
        <nav className='d-flex'>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
