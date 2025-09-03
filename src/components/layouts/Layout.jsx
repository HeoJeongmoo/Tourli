import Header from './header/Header';
import Footer from './footer/Footer';
import MainRouter from '../../routes/MainRouter';

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <MainRouter />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
