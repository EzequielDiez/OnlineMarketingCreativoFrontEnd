import { useRef, useEffect, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../styles/carousel.css';
import StorySection from '../components/StorySection';
import story1 from '../assets/images/story1.jpg';
import story2 from '../assets/images/story2.jpg';
import story3 from '../assets/images/story3.jpg';
import coffeeCup from '../assets/images/coffee-cup.png';
import logoPortada from '../assets/images/logo-online-blanco.svg'
import portadaImg from '../assets/images/portada-horizontal.png'
import portadaVertical from '../assets/images/portada-vertical.png'
import carrusel1 from '../assets/images/carrusel-inicio-1.png';
import carrusel2 from '../assets/images/carrusel-inicio-2.png';
import carrusel3 from '../assets/images/carrusel-inicio-3.png';
import TypewriterText from '../components/TypewriterText';

function Inicio() {
    const cupRef = useRef(null);
    const storiesContainerRef = useRef(null);
    const sectionsRef = useRef([]);
    const heroLogoRef = useRef(null);
    const typewriterSectionRef = useRef(null);
    const [startTyping, setStartTyping] = useState(false);

    const cupPositions = [
        { x: 66, y: 72, scale: 0.5, rotate: 25 },
        { x: 53, y: 52, scale: 0.65, rotate: -10 },
        { x: 50, y: 60, scale: 1.5, rotate: 0 }
    ];

    const handleCupAnimation = useCallback(() => {
        if (!cupRef.current || !storiesContainerRef.current) return;

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const heroHeight = windowHeight;

        if (scrollPosition >= heroHeight) {
            const scrollProgressInStories = (scrollPosition - heroHeight) / windowHeight;
            const currentSection = Math.floor(scrollProgressInStories);

            if (currentSection < cupPositions.length) {
                updateCupPosition(currentSection);
            }
        } else {
            cupRef.current.style.opacity = '0';
        }
    }, []);

    useEffect(() => {
        const throttledScroll = throttle(handleCupAnimation, 16); // ~60fps
        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [handleCupAnimation]);

    useEffect(() => {
        const updateHeaderLogo = () => {
            if (!heroLogoRef.current) return;
            
            const logoRect = heroLogoRef.current.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            const logoCenter = logoRect.top + (logoRect.height / 2);
            const viewportCenter = window.innerHeight / 2;
            
            // Calculate opacity based on scroll position - fade out faster
            const opacity = Math.max(0, Math.min(1, 1 - (scrollPosition / (window.innerHeight * 0.3))));
            
            // Update hero logo opacity
            if (heroLogoRef.current) {
                heroLogoRef.current.style.opacity = opacity;
            }
            
            // Dispatch custom event with logo information
            window.dispatchEvent(new CustomEvent('heroLogoScroll', {
                detail: {
                    opacity,
                    isVisible: opacity > 0,
                    distanceFromCenter: Math.abs(logoCenter - viewportCenter)
                }
            }));
        };

        window.addEventListener('scroll', updateHeaderLogo);
        updateHeaderLogo(); // Initial call
        
        return () => window.removeEventListener('scroll', updateHeaderLogo);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    setStartTyping(true);
                    observer.disconnect(); // Solo necesitamos activarlo una vez
                }
            },
            {
                threshold: 0.5 // Activa cuando el 50% de la sección es visible
            }
        );

        if (typewriterSectionRef.current) {
            observer.observe(typewriterSectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Wrapper solo para la hero section */}
            <div className="overflow-x-hidden">
                <div 
                    className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('/src/assets/images/portada-vertical.png')] xs:bg-[url('/src/assets/images/portada-vertical.png')] sm:bg-[url('/src/assets/images/portada-horizontal.png')]">
                    <img
                        ref={heroLogoRef}
                        src={logoPortada}
                        alt="Logo Portada"
                        className="max-w-[70%] sm:max-w-[70%] md:max-w-xl w-auto px-4 transition-opacity duration-200 animate-heroLogo"
                        style={{ opacity: 1 }}
                    />
                </div>
            </div>

            {/* Taza fija */}
            <div
                ref={cupRef}
                className="fixed w-40 h-40 z-50"
                style={{
                    transform: 'translate(-50%, -50%) scale(0.3)',
                    opacity: 0,
                    transition: 'all 0.3s ease-out',
                    pointerEvents: 'none'
                }}
            >
                <img
                    src={coffeeCup}
                    alt="Coffee Cup"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Stories container sin overflow hidden */}
            <div
                ref={storiesContainerRef}
                className="relative h-[300vh]"
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                }}
            >
                {[
                    {
                        image: story1,
                        title: "¿QUE TANTO SABES DE TU MARCA?",
                        description: "A veces, por más que tengamos acceso a toda la información, puede ser dificil encontrar la forma correcta de aplicarla para recibir resultados."
                    },
                    {
                        image: story2,
                        title: "Siempre hay algo que mejorar",
                        
                        description: "Pero, ¿qué pasaría si te dijeran que no estás solo? Esa confusión, esa sensación de caos, es más común de lo que parece."
                    },
                    {
                        image: story3,
                        title: "Nada es imposible",
                        description: "Nos encargamos de transformar ideas en estrategias, crear experiencias memorables y diseñar soluciones que impulsen tu marca."
                    }
                ].map((story, index) => (
                    <div
                        key={index}
                        ref={el => sectionsRef.current[index] = el}
                        className="sticky top-0 h-screen"
                    >
                        <StorySection
                            image={story.image}
                            align={index % 2 === 0 ? "right" : "left"}
                            sectionId={`story${index + 1}`}
                            title={story.title}
                            description={story.description}
                        />
                    </div>
                ))}
            </div>

            {/* Nueva sección con frase */}
            <div 
                ref={typewriterSectionRef}
                data-section="typewriter"
                className="h-screen w-full bg-[#055749] flex items-center justify-center px-6"
            >
                <div className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center max-w-5xl leading-relaxed">
                    <div className="relative min-h-[2.4em]">
                        <TypewriterText
                            phrases={[
                                "No vendemos café, pero si tu marca fuera un café, queremos que sea el mejor despertar para tus clientes."
                            ]}
                            className="text-white"
                            words={[
                                { text: "No vendemos café, pero ", font: "font-['Archivo'] font-thin" },
                                { text: "si tu marca fuera un café, ", font: "font-['Archivo'] font-bold italic" },
                                { text: "queremos que sea ", font: "font-['Archivo'] font-thin" },
                                { text: "el mejor despertar para tus clientes.", font: "font-['Archivo'] font-bold italic" }
                            ]}
                            start={startTyping}
                        />
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="h-screen w-full">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    breakpoints={{
                        768: {  // md breakpoint
                            slidesPerView: 3
                        }
                    }}
                    spaceBetween={0}
                    loop={true}
                    loopedSlides={3}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    className="w-full h-full"
                    slideToClickedSlide={true}
                    centeredSlides={true}
                >
                    <SwiperSlide className="h-full">
                        <img src={carrusel1} alt="Carrusel 1" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <img src={carrusel2} alt="Carrusel 2" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <img src={carrusel3} alt="Carrusel 3" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <img src={carrusel1} alt="Carrusel 1" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <img src={carrusel2} alt="Carrusel 2" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide className="h-full">
                        <img src={carrusel3} alt="Carrusel 3" className="w-full h-full object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

// Utilidad para throttle
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

export default Inicio;
