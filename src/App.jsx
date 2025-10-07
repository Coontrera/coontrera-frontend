import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './components/layout/Layout/Layout.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicos" element={<ServicesPage />} />
            <Route path="sobre" element={<AboutPage />} />          
            <Route path="login" element={<LoginPage />} />
            <Route path="registro" element={<RegisterPage/>} />
            <Route path="contato" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;