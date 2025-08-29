import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Importe aqui o componente de Layout que criaremos depois (Navbar e Footer)
// import Layout from './components/Layout';

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Adicione outras rotas aqui, ex: <Route path="/servicos" element={<ServicosPage />} /> */}
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;