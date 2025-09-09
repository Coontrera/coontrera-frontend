// src/components/layout/Navbar/Navbar.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isAuthenticated = false;
  const userName = "Marcos";

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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            {}
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

              {isAuthenticated ? (
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
                      <button className="dropdown-item" onClick={() => { /* Lógica de logout aqui */ }}>Sair</button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item ms-lg-3">
                  {}
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