import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Portfolio from './pages/Portfolio'; // Kept for future use

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [inverseColors, setInverseColors] = useState(false);
  const footerRef = useRef(null);
  const whatsappButtonRef = useRef(null);
  const location = useLocation();

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = '5491124822378';
    const message = 'Hola, quiero más información de...';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.location.href = whatsappUrl;
  };

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
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios handleWhatsAppClick={handleWhatsAppClick} />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <div ref={footerRef}>
        <Footer />
      </div>
      
      {/* WhatsApp floating button */}
      <a
        ref={whatsappButtonRef}
        href="#"
        onClick={handleWhatsAppClick}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer
          ${showWhatsApp 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20 pointer-events-none'}
          ${inverseColors 
            ? 'bg-white' 
            : 'bg-[#055749] text-white'}`}
        aria-label="Chat on WhatsApp"
      >
        <i className={`fab fa-whatsapp text-4xl ${inverseColors ? 'text-[#055749]' : 'text-white'}`}></i>
      </a>
    </div>
  )
}

export default App;
