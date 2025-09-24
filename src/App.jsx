import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './components/layout/Layout/Layout.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;