import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="page-header-section">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">
            Entre em Contato
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Estamos prontos para ouvir você e ajudar no que for preciso.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {/* Card WhatsApp */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
              <div className="contact-card">
                <div className="card-body">
                  <div className="icon-container">
                    <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="contact-icon" />
                  </div>
                  <h3 className="contact-title">WhatsApp</h3>
                  <p className="contact-text">
                    <a href="https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer">
                      Clique aqui para agendar ou tirar dúvidas
                    </a>
                  </p>
                  <p className="contact-info">(16) 99459-3131</p>
                </div>
              </div>
            </div>

            {/* Card Instagram */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="250">
              <div className="contact-card">
                <div className="card-body">
                  <div className="icon-container">
                    <img src="/images/insta.svg" alt="Instagram" className="contact-icon" />
                  </div>
                  <h3 className="contact-title">Instagram</h3>
                  <p className="contact-text">
                    <a href="https://www.instagram.com/contrera.pilatesefisioterapia/" target="_blank" rel="noopener noreferrer">
                      Siga-nos no Instagram
                    </a>
                  </p>
                  <p className="contact-info">@contrera.pilatesefisioterapia</p>
                </div>
              </div>
            </div>

            {/* Card Localização */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="350">
              <div className="contact-card">
                <div className="card-body">
                  <div className="icon-container">
                    <img src="/images/map-icon.svg" alt="Localização" className="contact-icon" />
                  </div>
                  <h3 className="contact-title">Nossa Localização</h3>
                  <p className="contact-text">Santa Ernestina - SP</p>
                  <p className="contact-info">15970-000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay="450">
              <h2 className="map-title">Mapa de Localização</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.731518921849!2d-48.38133318506144!3d-21.4005219857984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91b9a9b3d1b3d%3A0x8f0b1e4f1b2d0d3a!2sR.%209%20de%20Julho%2C%20795%2C%20Santa%20Ernestina%20-%20SP%2C%2015970-000!5e0!3m2!1spt-BR!2sbr!4v1685295537552!5m2!1spt-BR!2sbr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Localização da Clínica Coontrera"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;