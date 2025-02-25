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
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 pt-16 sm:pt-16 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrevService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowLeft}
                                alt="Previous"
                                className="w-[30px] h-[33px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[34px] xl:h-[34px] 2xl:w-[38px] 2xl:h-[38px]"
                            />
                        </button>
                        <h1 className="text-3xl sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-acumin text-center">
                            {services[currentService].title}
                        </h1>
                        <button
                            onClick={handleNextService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowRight}
                                alt="Next"
                                className="w-[30px] h-[33px] sm:w-[22px] sm:h-[26px] md:w-[26px] md:h-[30px] lg:w-[30px] lg:h-[34px] xl:w-[34px] xl:h-[38px] 2xl:w-[38px] 2xl:h-[42px]"
                            />
                        </button>
                    </div>

                    {/* Descripción */}
                    <p className="text-lg sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-acumin text-center mt-4 sm:mt-8 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-16">
                        {services[currentService].description}
                    </p>
                </div>

                {/* Botones de servicios en la parte inferior */}
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 py-8 mt-auto sm:mt-10 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
                    <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-4 justify-center">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentService(index)}
                                className={`
                                    bg-[#1E1E1E] text-[#F1F0F0] 
                                    font-acumin text-sm sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] uppercase 
                                    px-3 sm:px-3 md:px-5 lg:px-6 
                                    min-h-[36px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[40px] xl:min-h-[44px] 2xl:min-h-[50px]
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
            <div className="bg-[#F0E6DC] py-16 sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[115px] 2xl:py-[129px]">
                {/* Texto de contacto */}
                <div className="w-full sm:w-[90%] md:w-[600px] lg:w-[700px] xl:w-[760px] 2xl:w-[810px] mx-auto text-center">
                    <p className="font-acumin text-lg sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
                        Si estas interesado en cualquiera de nuestros servicios <span className="font-bold">no dudes en contactarnos</span>
                    </p>
                </div>

                {/* Botón de contacto */}
                <div className="flex justify-center mt-6 sm:mt-6 md:mt-[20px]">
                    <img
                        src={buttonContactanos}
                        alt="Contáctanos"
                        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[502px] h-auto cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
}

export default Servicios;