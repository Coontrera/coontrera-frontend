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
        
    </>
  );
};

export default AboutPage;
