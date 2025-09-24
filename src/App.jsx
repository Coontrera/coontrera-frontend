import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';

import Layout from './components/layout/Layout/Layout.jsx';

function App() {
  return (
    <Router>
      {}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<AboutPage/>}/>
          {}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;