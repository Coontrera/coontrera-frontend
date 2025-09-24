import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesPage.css';

const servicesData = [
  {
    id: 'fisioterapia',
    title: 'Fisioterapia Personalizada',
    description: 'A fisioterapia é uma ciência da saúde focada no estudo, prevenção e tratamento de distúrbios do movimento humano. Nosso objetivo é preservar, desenvolver ou restaurar a integridade de órgãos, sistemas ou funções, utilizando técnicas terapêuticas avançadas e personalizadas para promover sua saúde e bem-estar integral.',
    items: [
      'Avaliação diagnóstica completa e individualizada',
      'Tratamento de lesões ortopédicas e esportivas',
      'Reabilitação neurológica e cardiorrespiratória',
      'Prevenção de disfunções e promoção da saúde funcional',
    ],
    ctaText: 'Agendar Avaliação',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Fisioterapia.',
    image: '/images/vetor fisio.svg',
    aosContent: 'fade-right',
    aosImage: 'fade-left',
  },
  {
    id: 'pilates',
    title: 'Pilates para Todos os Níveis',
    description: 'O método Pilates oferece inúmeros benefícios para corpo e mente, trabalhando coordenação, flexibilidade, mobilidade, equilíbrio e postura. É indicado para todos, desde crianças a idosos, gestantes e pessoas com patologias específicas, adaptando-se a cada necessidade individual.',
    items: [
        'Aumento da força central e tônus muscular global',
        'Melhora da flexibilidade e mobilidade articular',
        'Correção postural e alívio de dores crônicas',
        'Consciência corporal, respiração e bem-estar mental',
    ],
    ctaText: 'Agendar Aula Experimental',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Pilates.',
    image: '/images/vetor pilates.svg',
    aosContent: 'fade-left',
    aosImage: 'fade-right',
  },
  {
    id: 'quiropraxia',
    title: 'Quiropraxia Clínica Avançada',
    description: 'A quiropraxia clínica foca na manipulação articular da coluna e sistema musculoesquelético para tratar e prevenir problemas, aliviando dores, reduzindo risco de lesões e promovendo bem-estar. Reconhecida pela OMS, é uma abordagem eficaz para uma vida mais saudável e sem limitações.',
    items: [
        'Alívio de dores na coluna (cervical, torácica, lombar)',
        'Tratamento de hérnias de disco, ciatalgia e dores de cabeça',
        'Correção de subluxações vertebrais e desalinhamentos',
        'Melhora da mobilidade geral e função do sistema nervoso',
    ],
    ctaText: 'Agendar Consulta',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Quiropraxia.',
    image: '/images/vetor quiropraxia.svg',
    aosContent: 'fade-right',
    aosImage: 'fade-left',
  },
  {
    id: 'hidroterapia',
    title: 'Hidroterapia Revigorante',
    description: 'Movimentos e exercícios terapêuticos em piscina aquecida estimulam a recuperação de lesões, trabalham a musculatura e fortalecem o corpo, ideal para reabilitação com baixo impacto, alívio de dores articulares e relaxamento profundo.',
    items: [
        'Reabilitação de lesões ortopédicas e reumatológicas com baixo impacto',
        'Alívio de dores articulares, musculares e fibromialgia',
        'Melhora da circulação sanguínea e linfática, e relaxamento',
        'Fortalecimento muscular suave, progressivo e seguro',
    ],
    ctaText: 'Saber Mais sobre Hidroterapia',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Hidroterapia.',
    image: '/images/vetor hidroterapia.svg',
    aosContent: 'fade-left',
    aosImage: 'fade-right',
  },
  {
    id: 'liberacao',
    title: 'Liberação Miofascial',
    description: 'Técnica terapêutica manual que visa aliviar dores musculares e tensões, melhorando a mobilidade e a flexibilidade através da aplicação de pressão em pontos específicos para liberar o tecido fibroso (fáscia) que reveste os músculos.',
    items: [
        'Alívio de tensões, contraturas e nódulos musculares (pontos-gatilho)',
        'Aumento da flexibilidade, mobilidade e amplitude de movimento',
        'Melhora da circulação sanguínea local e recuperação muscular',
        'Prevenção de lesões e tratamento de dores crônicas',
    ],
    ctaText: 'Agendar Sessão',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Libera%C3%A7%C3%A3o%20Miofascial.',
    image: '/images/vetor liberacao.svg',
    aosContent: 'fade-right',
    aosImage: 'fade-left',
  },
  {
    id: 'dryneedling',
    title: 'Dry Needling (Agulhamento a Seco)',
    description: 'Técnica terapêutica minimamente invasiva que consiste na inserção de agulhas finas em pontos gatilho miofasciais para aliviar dores musculares e melhorar a mobilidade. É um tratamento rápido, seguro e eficaz para controlar lesões e inflamações musculoesqueléticas.',
    items: [
        'Alívio rápido e eficaz de pontos gatilho e dores referidas',
        'Restauração da função muscular normal e relaxamento de bandas tensas',
        'Redução da inflamação local e melhora da microcirculação',
        'Complemento valioso a outras terapias manuais e reabilitação',
    ],
    ctaText: 'Consultar Especialista',
    whatsappLink: 'https://api.whatsapp.com/send?phone=5516994593131&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Dry%20Needling.',
    image: '/images/vetor dry.svg',
    aosContent: 'fade-left',
    aosImage: 'fade-right',
  },
];

function ServicesPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });

        const navLinks = document.querySelectorAll('.services-nav-menu a[href^="#"]');
        const mainNavbarHeight = 75; 
        const servicesNavbar = document.getElementById('servicesNavbar');
        const stickyNavMenuHeight = servicesNavbar ? servicesNavbar.offsetHeight : 0;

        const handleNavLinkClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - (mainNavbarHeight + stickyNavMenuHeight);

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        };

        navLinks.forEach(anchor => {
            anchor.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            navLinks.forEach(anchor => {
                anchor.removeEventListener('click', handleNavLinkClick);
            });
        };
    }, []);

    return (
        <>
            <div className="page-header-section">
                <div className="container">
                    <h1 className="page-title" data-aos="fade-up">Nossos Tratamentos Especializados</h1>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                        Descubra como nossas terapias podem ajudar você a alcançar seus objetivos de saúde e bem-estar.
                    </p>
                </div>
            </div>

            <nav id="servicesNavbar" className="services-nav-menu sticky-top">
                <div className="container">
                    <ul className="nav nav-pills justify-content-center flex-nowrap">
                        <li className="nav-item"><a className="nav-link" href="#fisioterapia">Fisioterapia</a></li>
                        <li className="nav-item"><a className="nav-link" href="#pilates">Pilates</a></li>
                        <li className="nav-item"><a className="nav-link" href="#quiropraxia">Quiropraxia</a></li>
                        <li className="nav-item"><a className="nav-link" href="#hidroterapia">Hidroterapia</a></li>
                        <li className="nav-item"><a className="nav-link" href="#liberacao">Lib. Miofascial</a></li>
                        <li className="nav-item"><a className="nav-link" href="#dryneedling">Dry Needling</a></li>
                    </ul>
                </div>
            </nav>

            <div>
                {servicesData.map((service) => (
                    <section className="service-detail-item page-section" id={service.id} key={service.id}>
                        <div className="container">
                            <div className="row align-items-center gy-4">
                                <div className="col-lg-6 service-content" data-aos={service.aosContent}>
                                    <h2 className="service-title">{service.title}</h2>
                                    <p>{service.description}</p>
                                    <ul>
                                        {service.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <a href={service.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                                        <i className="fab fa-whatsapp me-2"></i>{service.ctaText}
                                    </a>
                                </div>
                                <div className="col-lg-6 service-image-container" data-aos={service.aosImage}>
                                    <img src={service.image} className="img-fluid service-image" alt={service.title} />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}

export default ServicesPage;