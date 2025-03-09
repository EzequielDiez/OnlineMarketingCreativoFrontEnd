import { useState } from 'react';
import servicesImage from '../assets/images/banner-servicios.png';
import arrowLeft from '../assets/images/arrow-left.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import buttonContactanos from '../assets/images/button-contactanos2.png'
import iceLeft from '../assets/images/ice-left2.png'
import iceRight from '../assets/images/ice-right2.png'

function Servicios({ handleWhatsAppClick }) {
    const [currentService, setCurrentService] = useState(0);

    const services = [
        {
            title: "COMMUNITY MANAGEMENT",
            description: "Construimos y gestionamos la comunidad de tu marca, interactuando con tu audiencia de manera auténtica y estratégica. Nos encargamos de responder mensajes, moderar comentarios y generar engagement real.",
            image: servicesImage
        },
        {
            title: "SOCIAL MEDIA MANAGER",
            description: "Planificamos, analizamos y optimizamos tu estrategia en redes sociales para que tu marca crezca con propósito. Desde la creación de contenido hasta la medición de resultados, hacemos que cada publicación cuente.",
            image: servicesImage
        },
        {
            title: "PAID MEDIA",
            description: "Maximizamos el alcance y el impacto de tus campañas publicitarias. Diseñamos estrategias de anuncios en múltiples plataformas para que tu inversión se transforme en resultados.",
            image: servicesImage
        },
        {
            title: "FACEBOOK ADS",
            description: "Creamos y gestionamos campañas en Facebook e Instagram Ads, segmentadas para llegar al público adecuado. Más visibilidad, más conversiones, más crecimiento.",
            image: servicesImage
        },
        {
            title: "DISEÑO GRAFICO",
            description: "Tu identidad visual es clave. Diseñamos piezas atractivas, creativas y alineadas con tu marca para generar impacto y reconocimiento en cada plataforma.",
            image: servicesImage
        },
        {
            title: "BRANDING",
            description: "Construimos marcas con personalidad y propósito. Desde la identidad visual hasta la comunicación, hacemos que tu marca se diferencie y conecte con su audiencia.",
            image: servicesImage
        },
        {
            title: "WEB DEVELOPMENT",
            description: "Diseñamos y desarrollamos sitios web funcionales, atractivos y optimizados para que tu marca tenga una presencia digital sólida y efectiva.",
            image: servicesImage
        },
        {
            title: "FILMMAKING",
            description: "Creamos contenido audiovisual de alta calidad para potenciar la imagen de tu marca. Desde spots publicitarios hasta contenido para redes, convertimos ideas en historias visuales.",
            image: servicesImage
        },
        {
            title: "FOTOGRAFIA",
            description: "Imágenes que comunican. Desde fotografía de producto hasta sesiones corporativas, capturamos la esencia de tu marca con una estética profesional y creativa.",
            image: servicesImage
        },
        {
            title: "EMAIL MARKETING",
            description: "Diseñamos campañas de email marketing estratégicas para fidelizar clientes, generar ventas y mantener una comunicación efectiva con tu audiencia.",
            image: servicesImage
        },
        {
            title: "ANALISIS DIGITAL",
            description: "Tomamos decisiones basadas en datos. Analizamos métricas clave, identificamos oportunidades de mejora y optimizamos tu estrategia digital para lograr mejores resultados.",
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
            <div className="bg-[#fff] h-screen flex flex-col">
                {/* Contenedor de imagen con transición - ajustamos el padding superior */}
                <div className="w-full mt-28">
                    <img
                        key={currentService}
                        src={services[currentService].image}
                        alt={services[currentService].title}
                        className="w-full h-full object-cover animate-fadeSlide"
                    />
                </div>

                {/* Título con flechas - Ajustamos el padding superior */}
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 pt-20 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrevService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowLeft}
                                alt="Previous"
                                className="w-[30px] h-[33px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[34px] xl:h-[34px] 2xl:w-[34px] 2xl:h-[34px]"
                            />
                        </button>
                        <h1 className="text-3xl sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-advercase text-center">
                            {services[currentService].title}
                        </h1>
                        <button
                            onClick={handleNextService}
                            className="hover:opacity-75 transition-opacity"
                        >
                            <img
                                src={arrowRight}
                                alt="Next"
                                className="w-[30px] h-[33px] sm:w-[22px] sm:h-[26px] md:w-[26px] md:h-[30px] lg:w-[30px] lg:h-[34px] xl:w-[34px] xl:h-[38px] 2xl:w-[34px] 2xl:h-[38px]"
                            />
                        </button>
                    </div>

                    {/* Descripción */}
                    <p className="max-w-[1200px] mx-auto text-lg sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[24px] font-archivo font-thin text-center mt-4 sm:mt-8 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-12">
                        {services[currentService].description}
                    </p>
                </div>

                {/* Botones de servicios en la parte inferior - Ajustamos el margin superior */}
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto px-4 py-8 mt-auto sm:mt-12 md:mt-10 lg:mt-14 xl:mt-18 2xl:mt-20">
                    <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-4 justify-center">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentService(index)}
                                className={`
                                    border-2 border-[#1E1E1E]
                                    font-archivo font-light text-sm sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[24px] uppercase 
                                    px-3 sm:px-3 md:px-5 lg:px-6 
                                    min-h-[36px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[40px] xl:min-h-[44px] 2xl:min-h-[44px]
                                    rounded-full whitespace-normal
                                    transition-all duration-300
                                    ${currentService === index 
                                        ? 'bg-[#1E1E1E] !text-[#fff]' 
                                        : 'bg-transparent text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#fff]'
                                    }
                                `}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sección de Servicio Estrella */}
            <div className="bg-[#000] py-16 sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[115px] 2xl:py-[120px]">
                <div className="w-[95%] md:w-[90%] lg:w-[90.4%] mx-auto">
                    {/* Título y descripción principal */}
                    <div className="text-center mb-12">
                        <h2 className="text-[#fff] font-advercase text-3xl sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] mb-6">
                            GESTION INTEGRAL DE MARCA
                        </h2>
                        <p className="text-[#fff] font-archivo font-medium italic text-xl sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] mb-4">
                            (Nuestro servicio estrella)
                        </p>
                        <p className="text-[#fff] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px]">
                            Transformamos tu marca con una estrategia 360°. Nos encargamos de TODO para que tu negocio crezca y se posicione en el mundo digital.
                        </p>
                    </div>

                    {/* Lista de servicios incluidos */}
                    <div className="bg-[#fff] rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 2xl:p-16 max-w-[1200px] mx-auto">
                        <p className="text-[#000] font-advercase text-xl sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[28px] mb-6">
                            Incluye:
                        </p>
                        <div className="space-y-4">
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Creación y gestión de medios – Desarrollamos y administramos tus plataformas digitales.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ SEO y optimización constante – Mejoramos tu posicionamiento para que te encuentren fácilmente.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Gestión y desarrollo de publicidad – Creamos campañas estratégicas que convierten.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Producción audiovisual – Contenido de alto impacto para redes y web.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Estrategias de crecimiento y ejecución total – Desde la planificación hasta la acción.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Diseño gráfico – Identidad visual alineada con tu marca.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Gestión de redes sociales – Community management, contenidos y más.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Análisis y reporte de rendimiento – Decisiones basadas en datos.
                            </p>
                            <p className="text-[#000] font-archivo font-light text-lg sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px]">
                                ✔ Desarrollo web – Creación y mantenimiento de sitios web profesionales y optimizados.
                            </p>
                        </div>
                        <p className="text-[#000] font-archivo font-medium text-lg sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[24px] mt-8 text-center">
                            Nos ocupamos de cada detalle para que tu marca brille y crezca con resultados reales.
                        </p>
                    </div>
                </div>
            </div>

            {/* Nueva sección "Hagamos que tu marca crezca" */}
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#fff] text-black py-20">
                <div className="flex flex-col items-center">
                    <p className="font-perfect text-3xl md:text-4xl lg:text-6xl">Hagamos que tu marca</p>
                    <p className="font-akira text-4xl md:text-6xl lg:text-8xl text-transparent -mt-4" style={{
                        WebkitTextStroke: '2px black',
                        '@media (min-width: 768px)': {
                            WebkitTextStroke: '3px black'
                        }
                    }}>CREZCA</p>
                </div>

                <div className="relative group w-[400px] h-[250px] flex items-center justify-center">
                    <a 
                        href="#"
                        onClick={handleWhatsAppClick}
                        className="relative z-10"
                    >
                        <img
                            src={buttonContactanos}
                            alt="Contactanos"
                            className="relative z-10 w-[250px] h-auto opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"
                        />
                    </a>
                    <img
                        src={iceLeft}
                        alt="Ice Left"
                        className="absolute -left-6 z-20 w-[65%] h-full object-contain object-right transition-transform duration-300 group-hover:-translate-x-full"
                    />
                    <img
                        src={iceRight}
                        alt="Ice Right"
                        className="absolute -right-10 -top-1.5 z-20 w-[65%] h-full object-contain object-left transition-transform duration-300 group-hover:translate-x-full"
                    />
                </div>

                <p className="font-archivo text-4xl">ROMPAMOS EL HIELO</p>
            </div>
        </>
    );
}

export default Servicios;