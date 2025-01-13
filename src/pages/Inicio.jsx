import { useRef, useEffect, useCallback } from 'react';
import StorySection from '../components/StorySection';
import story1 from '../assets/images/story1.jpg';
import story2 from '../assets/images/story2.jpg';
import story3 from '../assets/images/story3.jpg';
import coffeeCup from '../assets/images/coffee-cup.png';
import iceLeft from '../assets/images/ice-left.png';
import iceRight from '../assets/images/ice-right.png';

function Inicio() {
    const cupRef = useRef(null);
    const storiesContainerRef = useRef(null);
    const sectionsRef = useRef([]);

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

    return (
        <>
            {/* Hero Section */}
            <div className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{ backgroundImage: "url('/src/assets/images/portada.jpg')" }}>
                <img
                    src="/src/assets/images/logo-portada.svg"
                    alt="Logo Portada"
                    className="max-w-xl"
                />
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

            {/* Container para las story sections con altura fija */}
            <div
                ref={storiesContainerRef}
                className="relative h-[300vh]" // Altura fija para 3 pantallas
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                }}
            >
                {[story1, story2, story3].map((story, index) => (
                    <div
                        key={index}
                        ref={el => sectionsRef.current[index] = el}
                        className="sticky top-0 h-screen"
                    >
                        <StorySection
                            image={story}
                            align={index % 2 === 0 ? "right" : "left"}
                            sectionId={`story${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Nueva sección después de stories */}
            <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#F0E6DC] text-black py-20">
                <div className="flex flex-col items-center">
                    <p className="font-perfect text-6xl">Hagamos que tu marca</p>
                    <p className="font-akira text-8xl text-transparent -mt-4" style={{
                        WebkitTextStroke: '3px black'
                    }}>CREZCA</p>
                </div>

                {/* Nuevo contenedor para el botón y el hielo */}
                <div className="relative group w-[400px] h-[250px] flex items-center justify-center">
                    <img
                        src="/src/assets/images/button-contactanos.png"
                        alt="Contactanos"
                        className="relative z-10 w-[250px] h-auto opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150"
                    />
                    <img
                        src={iceLeft}
                        alt="Ice Left"
                        className="absolute -left-10 z-20 w-[65%] h-full object-contain object-right transition-transform duration-300 group-hover:-translate-x-full"
                    />
                    <img
                        src={iceRight}
                        alt="Ice Right"
                        className="absolute -right-10 -top-3 z-20 w-[65%] h-full object-contain object-left transition-transform duration-300 group-hover:translate-x-full"
                    />
                </div>

                <p className="font-acumin text-5xl">ROMPAMOS EL HIELO</p>
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
