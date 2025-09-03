import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import MainRouter from './routes/MainRouter';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <MainRouter />
      </Layout>
    </Router>
  );
}

export default App;