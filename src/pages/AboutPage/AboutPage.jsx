import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './AboutPage.css';

export default function SobreNosPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <>
      {/* Header */}
        <div className="page-header-section">
            <div className="container">
                <h1 className="page-title" data-aos="fade-up">
                    Nossa História
                </h1>
                <p className="lead" data-aos="fade-up" data-aos-delay="100">
                    Conheça a trajetória e a paixão que movem a Clínica Coontrera.
                </p>
            </div>
        </div>

        {/* Sobre Nós */}
      <section className="sobre-nos-section page-section">
        <div className="container">
          {/* Primeira parte */}
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-title-global text-start mb-4">
                Dedicação e Profissionalismo
              </h2>
              <p>
                A Clínica Coontrera nasceu de um sonho aliado à dedicação e ao
                profissionalismo. Com um início modesto, oferecíamos apenas
                serviços de fisioterapia e Mat Pilates, sempre pautados no
                cuidado e na qualidade. À medida que os pacientes e alunos
                cresceram, nosso espaço também evoluiu, permitindo a aquisição
                dos primeiros aparelhos e o desenvolvimento de novos serviços.
              </p>
              <p>
                Após anos de esforço e aprendizado, concretizamos o grande
                objetivo de criar uma clínica completa e reconhecida, um espaço
                onde a saúde e o bem-estar dos nossos pacientes são a prioridade
                máxima.
              </p>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img
                src="/images/irmas3.jpg"
                alt="Fundadoras da Clínica Coontrera"
                className="img-fluid profile-img"
              />
            </div>
          </div>

          {/* Separador */}
          <hr className="my-5" style={{ borderColor: "var(--light-gray)" }} />

          {/* Segunda parte */}
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <h2 className="section-title-global text-start mb-4">
                Evolução e Excelência
              </h2>
              <p>
                Com mais de seis anos de trajetória até sua consolidação, a
                Clínica Coontrera tornou-se referência em fisioterapia, pilates,
                hidroginástica e outros serviços de reabilitação e bem-estar em
                nossa cidade. Além dos atendimentos presenciais, oferecemos
                modalidades como home care, liberação miofascial, Dry Needling e
                quiropraxia clínica.
              </p>
              <p>
                Nossa equipe é formada por profissionais especializadas em
                fisioterapia, biomecânica da atividade física, pilates para
                diversas necessidades (incluindo gestantes) e hidroterapia,
                garantindo um atendimento personalizado e de excelência a cada
                pessoa que confia em nosso trabalho.
              </p>
            </div>

            {/* Carousel Bootstrap */}
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <div
                id="carouselSobreNos"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      data-bs-target="#carouselSobreNos"
                      data-bs-slide-to={i}
                      className={i === 0 ? "active" : ""}
                      aria-current={i === 0 ? "true" : undefined}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="carousel-inner">
                  {[
                    "primeira.jpg",
                    "segunda.jpg",
                    "terceira.jpg",
                    "quarta.jpg",
                    "quinta.jpg",
                    "sexta.jpg",
                    "setima.jpg",
                    "oitava.jpg",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                    >
                      <img
                        src={`/images/${img}`}
                        className="d-block w-100"
                        alt={`Evolução da clínica - Imagem ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselSobreNos"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselSobreNos"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Próximo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    </>
  );
};

export default AboutPage;
