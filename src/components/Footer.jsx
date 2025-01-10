import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#F0E6DC] text-black py-8">
            <div className="container mx-auto px-2">
                {/* Primera fila: Logo + Links + Redes */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-12">
                    {/* Logo - Izquierda */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="src/assets/images/logo-online-footer.svg"
                            alt="Logo Footer"
                            className="h-10"
                        />
                    </div>

                    {/* Enlaces - Centro */}
                    <div className="flex flex-col md:flex-row gap-6 text-xl justify-center">
                        <Link to="/" className="hover:text-gray-600">Inicio</Link>
                        <Link to="/servicios" className="hover:text-gray-600">Servicios</Link>
                        <Link to="/nosotros" className="hover:text-gray-600">Nosotros</Link>
                        <Link to="/contacto" className="hover:text-gray-600">Contacto</Link>
                    </div>

                    {/* Redes Sociales - Derecha */}
                    <div className="flex justify-center md:justify-end gap-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-600"
                        >
                            <i className="fab fa-instagram text-3xl"></i>
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-600"
                        >
                            <i className="fab fa-facebook text-3xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-600"
                        >
                            <i className="fab fa-linkedin text-3xl"></i>
                        </a>
                    </div>
                </div>

                {/* Segunda fila: Copyright alineado con los links */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="hidden md:block"></div>
                    <div className="text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} Online Marketing Creativo. Todos los derechos reservados.</p>
                    </div>
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
