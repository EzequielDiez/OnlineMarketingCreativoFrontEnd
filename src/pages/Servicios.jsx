import { useState } from 'react';
import servicesImage from '../assets/images/services-communitymanager.jpg';
import arrowLeft from '../assets/images/arrow-left.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import buttonContactanos from '../assets/images/button-contactanos.png'

function Servicios() {
    const [currentService, setCurrentService] = useState(0);

    const services = [
        {
            title: "COMMUNITY MANAGEMENT",
            description: "Gestión profesional de tus redes sociales para construir y mantener una comunidad activa y comprometida.",
            image: servicesImage
        },
        {
            title: "SOCIAL MEDIA MANAGER",
            description: "Estrategias integrales para optimizar tu presencia en redes sociales y alcanzar tus objetivos de marca.",
            image: servicesImage
        },
        {
            title: "PAID MEDIA",
            description: "Maximiza tu inversión publicitaria con estrategias de medios pagados efectivas y orientadas a resultados.",
            image: servicesImage
        },
        {
            title: "FACEBOOK ADS",
            description: "Campañas publicitarias en Facebook e Instagram optimizadas para alcanzar a tu audiencia ideal.",
            image: servicesImage
        },
        {
            title: "DISEÑO GRÁFICO",
            description: "Creación de contenido visual impactante que comunica tu mensaje de marca de manera efectiva.",
            image: servicesImage
        },
        {
            title: "BRANDING",
            description: "Desarrollo y fortalecimiento de tu identidad de marca para destacar en el mercado.",
            image: servicesImage
        },
        {
            title: "WEB DEVELOPMENT",
            description: "Desarrollo de sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
            image: servicesImage
        },
        {
            title: "FILMMAKING",
            description: "Producción de contenido audiovisual profesional para contar tu historia de manera única.",
            image: servicesImage
        },
        {
            title: "FOTOGRAFIA",
            description: "Servicios fotográficos profesionales para capturar la esencia de tu marca y productos.",
            image: servicesImage
        },
        {
            title: "EMAIL MARKETING",
            description: "Estrategias de email marketing personalizadas para nutrir y convertir tu base de datos.",
            image: servicesImage
        },
        {
            title: "COACHING",
            description: "Asesoramiento especializado para potenciar tu presencia digital y alcanzar tus objetivos.",
            image: servicesImage
        },
        {
            title: "ANÁLISIS DIGITAL",
            description: "Análisis detallado de datos para optimizar tu estrategia digital y mejorar resultados.",
            image: servicesImage
        },
        {
            title: "CONTACTO CON INFLUENCERS",
            description: "Gestión y desarrollo de colaboraciones estratégicas con influencers alineados con tu marca.",
            image: servicesImage
        }
    ];

    const handlePrevService = () => {
        setCurrentService(prev => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const handleNextService = () => {
        setCurrentService(prev => (prev === services.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-[#F0E6DC] min-h-screen pt-56">
            {/* Contenedor de imagen con transición */}
            <div className="w-full overflow-hidden">
                <img
                    key={currentService}
                    src={services[currentService].image}
                    alt={services[currentService].title}
                    className="w-full h-auto animate-fadeSlide"
                />
            </div>

            {/* Contenedor del carrusel */}
            <div className="w-[90.4%] mx-auto px-4 py-12">
                {/* Título con flechas */}
                <div className="flex items-center justify-between mb-16">
                    <button
                        onClick={handlePrevService}
                        className="hover:opacity-75 transition-opacity"
                    >
                        <img
                            src={arrowLeft}
                            alt="Previous"
                            className="w-[42px] h-[46px]"
                        />
                    </button>
                    <h1 className="text-[64px] font-acumin text-center">
                        {services[currentService].title}
                    </h1>
                    <button
                        onClick={handleNextService}
                        className="hover:opacity-75 transition-opacity"
                    >
                        <img
                            src={arrowRight}
                            alt="Next"
                            className="w-[42px] h-[46px]"
                        />
                    </button>
                </div>

                {/* Descripción */}
                <p className="text-[32px] font-acumin text-center mb-24">
                    {services[currentService].description}
                </p>

                {/* Botones de servicios */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentService(index)}
                            className={`
                                bg-[#1E1E1E] text-[#F1F0F0] 
                                font-acumin text-[32px] uppercase 
                                px-6 min-h-[56px]
                                rounded-full whitespace-normal
                                transition-all duration-300
                                hover:bg-[#E2A07E] hover:text-[#1E1E1E]
                                ${currentService === index ? 'bg-[#E2A07E] text-[#1E1E1E]' : ''}
                            `}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Texto de contacto */}
                <div className="w-[810px] h-[87px] mx-auto mt-[129px] text-center">
                    <p className="font-acumin text-[32px]">
                        Si estas interesado en cualquiera de nuestros servicios <span className="font-bold">no dudes en contactarnos</span>
                    </p>
                </div>

                {/* Botón de contacto */}
                <div className="flex justify-center mt-[29px] mb-[129px]">
                    <img
                        src={buttonContactanos}
                        alt="Contáctanos"
                        className="w-[502px] h-[89px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Servicios;
