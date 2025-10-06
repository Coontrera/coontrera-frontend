import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogout = async () => {
    try {
      await logout();
      setIsNavCollapsed(true);
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const userName = currentUser ? (currentUser.displayName || currentUser.email) : "";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/images/logo.svg" alt="Coontrera Logo" className="navbar-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`navbar-collapse collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={() => setIsNavCollapsed(true)}>Início</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/servicos" onClick={() => setIsNavCollapsed(true)}>Serviços</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre" onClick={() => setIsNavCollapsed(true)}>Sobre Nós</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contato" onClick={() => setIsNavCollapsed(true)}>Contato</NavLink>
              </li>

              {currentUser ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownUser"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} className="me-1" /> Olá, {userName}!
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                    <li><Link className="dropdown-item" to="/admin/dashboard">Painel Admin</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>Sair</button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item ms-lg-3">
                  <Link className="btn btn-primary btn-sm px-4 py-2" to="/login" onClick={() => setIsNavCollapsed(true)}>Entrar</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;