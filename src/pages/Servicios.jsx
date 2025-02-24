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
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
        <>
            <div className="bg-[#F0E6DC] h-screen flex flex-col">
                {/* Contenedor de imagen con transición */}
                <div className="w-full pt-28 sm:pt-28 md:pt-28 lg:pt-28 xl:pt-28 2xl:pt-28">
                    <img
                        key={currentService}
                        src={services[currentService].image}
                        alt={services[currentService].title}
                        className="w-full h-full object-cover animate-fadeSlide"
                    />
                </div>

                {/* Título con flechas */}
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-28 2xl:pt-24">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrevService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowLeft}
                                alt="Previous"
                                className="w-[30px] h-[33px] sm:w-[36px] sm:h-[40px] md:w-[42px] md:h-[46px] 2xl:w-[38px] 2xl:h-[42px]"
                            />
                        </button>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] 2xl:text-[56px] font-acumin text-center">
                            {services[currentService].title}
                        </h1>
                        <button
                            onClick={handleNextService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowRight}
                                alt="Next"
                                className="w-[30px] h-[33px] sm:w-[36px] sm:h-[40px] md:w-[42px] md:h-[46px] 2xl:w-[38px] 2xl:h-[42px]"
                            />
                        </button>
                    </div>

                    {/* Descripción */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] 2xl:text-[28px] font-acumin text-center mt-4">
                        {services[currentService].description}
                    </p>
                </div>

                {/* Botones de servicios en la parte inferior */}
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 py-8 mt-auto">
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentService(index)}
                                className={`
                                    bg-[#1E1E1E] text-[#F1F0F0] 
                                    font-acumin text-sm sm:text-lg md:text-xl lg:text-[32px] 2xl:text-[28px] uppercase 
                                    px-3 sm:px-4 md:px-5 lg:px-6 
                                    min-h-[36px] sm:min-h-[42px] md:min-h-[48px] lg:min-h-[56px] 2xl:min-h-[50px]
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
                </div>
            </div>

            {/* Sección de contacto separada */}
            <div className="bg-[#F0E6DC] py-16 sm:py-20 md:py-24 lg:py-[129px]">
                {/* Texto de contacto */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[810px] mx-auto text-center">
                    <p className="font-acumin text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                        Si estas interesado en cualquiera de nuestros servicios <span className="font-bold">no dudes en contactarnos</span>
                    </p>
                </div>

                {/* Botón de contacto */}
                <div className="flex justify-center mt-6 sm:mt-8 md:mt-[29px]">
                    <img
                        src={buttonContactanos}
                        alt="Contáctanos"
                        className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[502px] h-auto cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
}

export default Servicios;