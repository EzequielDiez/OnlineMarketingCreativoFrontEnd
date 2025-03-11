import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef, memo, useCallback, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load de las páginas
const Inicio = lazy(() => import('./pages/Inicio'));
const SobreNosotros = lazy(() => import('./pages/SobreNosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

// Memoizar el botón de WhatsApp
const WhatsAppButton = memo(({ onClick, showWhatsApp, inverseColors, whatsappButtonRef }) => (
  <a
    ref={whatsappButtonRef}
    href="#"
    onClick={onClick}
    className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer
      ${showWhatsApp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}
      ${inverseColors ? 'bg-white' : 'bg-[#055749] text-white'}`}
    aria-label="Chat on WhatsApp"
  >
    <i className={`fab fa-whatsapp text-4xl ${inverseColors ? 'text-[#055749]' : 'text-white'}`}></i>
  </a>
));

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [inverseColors, setInverseColors] = useState(false);
  const footerRef = useRef(null);
  const whatsappButtonRef = useRef(null);
  const location = useLocation();

  // Memoizar el handleWhatsAppClick
  const memoizedHandleWhatsAppClick = useCallback((e) => {
    e.preventDefault();
    const phoneNumber = '5491124822378';
    const message = 'Hola, quiero más información de...';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.location.href = whatsappUrl;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current || !whatsappButtonRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Solo buscar la sección verde si estamos en la página de inicio
      if (location.pathname === '/') {
        const greenSection = document.querySelector('[data-section="typewriter"]');
        if (greenSection) {
          const greenSectionRect = greenSection.getBoundingClientRect();
          const buttonRect = whatsappButtonRef.current.getBoundingClientRect();

          // Verificar si el botón está dentro de la sección verde
          const buttonBottom = buttonRect.bottom;
          const isButtonInGreenSection =
            buttonBottom >= greenSectionRect.top &&
            buttonBottom <= greenSectionRect.bottom;

          setInverseColors(isButtonInGreenSection);
        }
      } else {
        setInverseColors(false);
      }

      // Mostrar/ocultar botón de WhatsApp
      setShowWhatsApp(
        scrollPosition > 200 &&
        footerTop > windowHeight - 100
      );
    };

    // Configurar el observer para cambios inmediatos
    const timeoutId = setTimeout(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/servicios" element={<Servicios handleWhatsAppClick={memoizedHandleWhatsAppClick} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Suspense>
      <div ref={footerRef}>
        <Footer />
      </div>

      <WhatsAppButton
        onClick={memoizedHandleWhatsAppClick}
        showWhatsApp={showWhatsApp}
        inverseColors={inverseColors}
        whatsappButtonRef={whatsappButtonRef}
      />
    </div>
  )
}

export default App;
