import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar'
import StorySection from './components/StorySection'
import story1 from './assets/images/story1.jpg'
import story2 from './assets/images/story2.jpg'
import story3 from './assets/images/story3.jpg'
import coffeeCup from './assets/images/coffee-cup.png'

function App() {
  const cupRef = useRef(null);
  const storiesContainerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!cupRef.current || !storiesContainerRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = windowHeight;

      if (scrollPosition >= heroHeight) {
        const scrollProgressInStories = (scrollPosition - heroHeight) / windowHeight;
        const currentSection = Math.floor(scrollProgressInStories);

        // Añadida la propiedad rotate para cada posición
        const positions = [
          { x: 66, y: 72, scale: 0.5, rotate: 25 },    // Rotación de 25 grados en la primera imagen
          { x: 53, y: 52, scale: 0.65, rotate: -10 },   // Sin rotación en la segunda
          { x: 50, y: 60, scale: 1.5, rotate: 0 }    // Sin rotación en la tercera
        ];

        if (currentSection < positions.length) {
          const currentImage = sectionsRef.current[currentSection]?.querySelector('img');

          if (currentImage) {
            const imageRect = currentImage.getBoundingClientRect();
            const pos = positions[currentSection];

            const absoluteX = imageRect.left + (imageRect.width * pos.x / 100);
            const absoluteY = imageRect.top + (imageRect.height * pos.y / 100);

            cupRef.current.style.left = `${absoluteX}px`;
            cupRef.current.style.top = `${absoluteY}px`;
            // Añadida la rotación al transform
            cupRef.current.style.transform = `translate(-50%, -50%) scale(${pos.scale}) rotate(${pos.rotate}deg)`;
            cupRef.current.style.opacity = '1';
          }
        }
      } else {
        cupRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}>
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

      <iframe src="https://www.behance.net/embed/project/110094931?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>

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
    </div>
  )
}

export default App;
