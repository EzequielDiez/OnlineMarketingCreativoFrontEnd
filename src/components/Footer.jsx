import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';

const Footer = () => {
    return (
        <footer className="bg-[#F0E6DC] text-black py-8">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-8 mb-12">
                    {/* Logo - Izquierda */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="src/assets/images/logo-online-footer.svg"
                            alt="Logo Footer"
                            className="h-10"
                        />
                    </div>

                    {/* Enlaces - Centro */}
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-center">
                        {navigationLinks.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className="hover:text-gray-600 font-acumin text-[22px] lowercase first-letter:uppercase text-center"
                            >
                                {label}
                            </Link>
                        ))}
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
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
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
