
import React from "react";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactPage.css';

const ContactPage = () => {
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

      <section className="contact-section page-section">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="card contact-card">
                <div className="card-body text-center">
                  <img
                    src="/images/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="contact-icon mb-3"
                  />
                  <h3 className="contact-title">WhatsApp</h3>
                  <p>
                    <a
                      href="https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clique aqui para agendar ou tirar dúvidas
                    </a>
                  </p>
                  <p className="small mt-2">(16) 99459-3131</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="card contact-card">
                <div className="card-body text-center">
                  <img
                    src="/images/insta.svg"
                    alt="Instagram"
                    className="contact-icon mb-3"
                  />
                  <h3 className="contact-title">Instagram</h3>
                  <p>
                    <a
                      href="https://www.instagram.com/contrera.pilatesefisioterapia/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Siga-nos no Instagram
                    </a>
                  </p>
                  <p className="small mt-2">@contrera.pilatesefisioterapia</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="card contact-card">
                <div className="card-body text-center">
                  <img
                    src="/images/map-icon.svg"
                    alt="Localização"
                    className="contact-icon mb-3"
                  />
                  <h3 className="contact-title">Nossa Localização</h3>
                  <p>Santa Ernestina - SP, 15970-000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="450">
              <h2 className="section-title-global mb-4">Mapa de Localização</h2>
              <div className="map-container card p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.088119100775!2d-48.39080068559824!3d-21.22847808588993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b93dd9c56971%3A0xf3b0b2f936a5d888!2sSanta%20Ernestina%2C%20SP%2C%2015970-000!5e0!3m2!1spt-BR!2sbr!4v1622688000000!5m2!1spt-BR!2sbr"
                  style={{ border: 0, width: "100%", height: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Localização"
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


