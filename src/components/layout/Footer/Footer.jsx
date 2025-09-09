import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Coontrera</h5>
            <p className="small">Pilates e Fisioterapia<br />Transformando movimento em bem-estar.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/servicos">Nossos Serviços</Link></li>
              <li><Link to="/sobre">Quem Somos</Link></li>
              <li><Link to="/contato">Fale Conosco</Link></li>
              <li><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Siga-nos</h5>
            <div className="social-icons">
              <a href="https://instagram.com/contrera.pilatesefisioterapia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5516994593131" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <p className="small text-center footer-copy">&copy; {currentYear} - Coontrera. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;