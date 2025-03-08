import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';
import logoFooter from '../assets/images/logo-online-blanco.svg'

const Footer = () => {
    return (
        <footer className="bg-[#000] text-white py-8">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] grid-rows-2 gap-8">
                    {/* Logo - Ocupa dos filas */}
                    <div className="row-span-2 flex items-center justify-center lg:justify-start">
                        <Link
                            to="/"
                            className="transition-transform duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
                        >
                            <img
                                src={logoFooter}
                                alt="Logo Footer"
                                className="h-16 lg:h-20 filter hover:brightness-90"
                            />
                        </Link>
                    </div>

                    {/* Links - Primera fila, segunda columna */}
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        {navigationLinks.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className="relative hover:text-[#ACC7CC] font-acumin text-lg lg:text-[22px] lowercase first-letter:uppercase mx-2 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#ACC7CC] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Redes Sociales - Ocupa dos filas, tercera columna */}
                    <div className="row-span-2 flex flex-col items-center lg:items-end justify-start pt-2 gap-2">
                        <div className="relative">
                            <div className="flex justify-center lg:justify-end gap-4 relative py-2">
                                <div className="absolute -bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-gray-600/70 to-transparent lg:bg-gradient-to-l"></div>
                                <a
                                    href="https://instagram.com/online_marketingcreativo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ACC7CC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <i className="fab fa-instagram text-2xl lg:text-3xl"></i>
                                </a>
                                <a
                                    href="https://facebook.com/online_marketingcreativo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ACC7CC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <i className="fab fa-facebook text-2xl lg:text-3xl"></i>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@online_marketingcreativo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ACC7CC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <i className="fab fa-tiktok text-2xl lg:text-3xl"></i>
                                </a>
                                <a
                                    href="https://ar.pinterest.com/online_marketingcreativo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ACC7CC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <i className="fab fa-pinterest text-2xl lg:text-3xl"></i>
                                </a>
                                <a
                                    href="https://linkedin.com/company/online_marketingcreativo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ACC7CC] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <i className="fab fa-linkedin text-2xl lg:text-3xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright - Segunda fila, segunda columna */}
                    <div className="text-center">
                        <p className="text-sm lg:text-base text-[#ACC7CC] transition-opacity duration-300 hover:opacity-75">&copy; {new Date().getFullYear()} Online Marketing Creativo. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
