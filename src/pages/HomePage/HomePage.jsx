import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faRunning, faBone, faTint } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,   
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {/* ATRIBUTO DE ANIMAÇÃO */}
          <h1 data-aos="fade-up">Movimento é Vida.<br />Descubra a Sua Melhor Versão.</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            Na Coontrera, combinamos a arte do Pilates e a ciência da Fisioterapia para oferecer a você uma jornada única de saúde, bem-estar e recuperação.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Link to="/servicos" className="btn btn-cta-hero">Conheça Nossos Tratamentos</Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section py-5">
        <div className="container text-center py-5">
          <h2 className="section-title">Serviços Pensados para Você</h2>
          <p className="section-subtitle">
            Oferecemos uma gama completa de terapias para atender suas necessidades individuais, desde a reabilitação até a busca por uma vida mais ativa e equilibrada.
          </p>
          <div className="row">
            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="service-highlight-card">
                <div className="icon"><FontAwesomeIcon icon={faSpa} /></div>
                <h3>Pilates Terapêutico</h3>
                <p>Fortaleça seu corpo, melhore a postura e alivie dores com o método Pilates adaptado às suas necessidades.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-highlight-card">
                <div className="icon"><FontAwesomeIcon icon={faRunning} /></div>
                <h3>Fisioterapia Especializada</h3>
                <p>Recupere-se de lesões e cirurgias com tratamentos fisioterapêuticos avançados e personalizados.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-highlight-card">
                <div className="icon"><FontAwesomeIcon icon={faBone} /></div>
                <h3>Quiropraxia Clínica</h3>
                <p>Alinhe sua coluna, alivie tensões e promova o bem-estar geral através de ajustes quiropráticos precisos.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-highlight-card">
                <div className="icon"><FontAwesomeIcon icon={faTint} /></div>
                <h3>Hidroterapia</h3>
                <p>Reabilitação suave e eficaz na água, ideal para todas as idades e condições físicas, promovendo alívio e fortalecimento.</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Link to="/servicos" className="btn btn-outline-primary btn-lg">Ver Todos os Serviços</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="cta-banner-section">
        <div className="container" data-aos="fade-up">
          <h2 className="display-5 mb-3">Pronto para Transformar sua Saúde?</h2>
          <p className="lead mb-4">Agende sua aula experimental gratuita ou uma avaliação e dê o primeiro passo rumo a uma vida com mais qualidade e menos dor.</p>
          <a href="https://api.whatsapp.com/send?phone=5516994593131" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
            Agendar via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;