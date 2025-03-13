import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef, memo, useCallback, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load de las páginas
const Inicio = lazy(() => import('./pages/Inicio'));
const SobreNosotros = lazy(() => import('./pages/SobreNosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Contacto = lazy(() => import('./pages/Contacto'));

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
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [inverseColors, setInverseColors] = useState(false);
  const footerRef = useRef(null);
  const whatsappButtonRef = useRef(null);
  const location = useLocation();

  // Reset pageLoaded state on route change
  useEffect(() => {
    setPageLoaded(false);
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

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

      const footerRect = footerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const buttonRect = whatsappButtonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Mostrar el botón después de 200px de scroll y ocultarlo cerca del footer
      const shouldShowWhatsApp = scrollPosition > 200 &&
        (footerRect.top - buttonRect.height - 32) > windowHeight;

      setShowWhatsApp(shouldShowWhatsApp);

      // Solo buscar la sección verde si estamos en la página de inicio
      if (location.pathname === '/') {
        const greenSection = document.querySelector('[data-section="typewriter"]');
        if (greenSection) {
          const greenSectionRect = greenSection.getBoundingClientRect();

          // Verificar si el botón está dentro de la sección verde
          const isButtonInGreenSection =
            buttonRect.bottom >= greenSectionRect.top &&
            buttonRect.bottom <= greenSectionRect.bottom;

          setInverseColors(isButtonInGreenSection);
        }
      } else {
        setInverseColors(false);
      }
    };

    handleScroll(); // Llamada inicial
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="relative">
      <Header />

      {/* Main content with Suspense */}
      <div className="min-h-screen">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/servicios" element={
              <Servicios handleWhatsAppClick={memoizedHandleWhatsAppClick} />
            } />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>

      {/* Footer wrapper */}
      <div
        className={`transition-opacity duration-500 ease-in-out
          ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>

      {/* WhatsApp button fuera del wrapper del footer */}
      <WhatsAppButton
        onClick={memoizedHandleWhatsAppClick}
        showWhatsApp={showWhatsApp}
        inverseColors={inverseColors}
        whatsappButtonRef={whatsappButtonRef}
      />
    </div>
  );
}

export default App;
