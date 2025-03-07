import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';
import logoBlanco from '../assets/images/logo-onlinesolo-blanco.svg';
import logoNegro from '../assets/images/logo-onlinesolo-negro.svg';
import { useState, useEffect } from 'react';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out
            ${hasScrolled
                ? 'bg-[#DBD0C6] shadow-lg backdrop-blur-sm bg-opacity-90'
                : 'bg-transparent'}`}>
            <div className="max-w-[95%] mx-auto px-4">
                <div className="flex items-center justify-between h-28">
                    <Link to="/" className="flex-shrink-0 pl-0 transition-transform duration-300 hover:scale-105">
                        <img
                            className="h-14 w-auto sm:h-11 md:h-10 lg:h-14 transition-all duration-300"
                            src={hasScrolled ? logoNegro : logoBlanco}
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        className="md:hidden p-2 relative z-50 transition-all duration-300 hover:scale-105"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 transform
                            ${isMenuOpen ? 'rotate-45 translate-y-2' : 'hover:w-5'}`}></div>
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300
                            ${isMenuOpen ? 'opacity-0' : 'hover:w-4'}`}></div>
                        <div className={`w-6 h-0.5 bg-black transition-all duration-300 transform
                            ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'hover:w-3'}`}></div>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center justify-end space-x-4 flex-1">
                        {navigationLinks.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                isHomePage={isHomePage}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile menu */}
                    <div className={`md:hidden absolute top-28 left-0 w-full bg-[#DBD0C6] transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-95
                        ${isMenuOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-4'}`}>
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navigationLinks.map(({ path, label }) => (
                                <MobileNavLink
                                    key={path}
                                    to={path}
                                    isHomePage={isHomePage}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </MobileNavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ to, children, isHomePage }) {
    return (
        <Link
            to={to}
            className={`flex items-center justify-center rounded-full font-normal transition-all duration-300 ease-in-out uppercase font-acumin 
                w-[13.43vw] sm:w-[10vw] md:w-[9.5vw] lg:w-[13.43vw] 
                min-w-[120px] sm:min-w-[110px] md:min-w-[115px] lg:min-w-[150px] max-w-[193px]
                h-[4.2vh] min-h-[32px] md:min-h-[30px] lg:min-h-[35px] max-h-[38px] text-center
                text-[1.04vw] sm:text-[13px] md:text-[13px] lg:text-[16px] leading-[1.25] tracking-normal
                px-2 sm:px-2 md:px-2 lg:px-4
                transform hover:scale-105 hover:shadow-md
                ${isHomePage
                    ? 'bg-[#fff] text-black hover:bg-white'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#E2A07E] hover:text-white'
                }`}
        >
            {children}
        </Link>
    )
}

function MobileNavLink({ to, children, isHomePage, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`relative overflow-hidden font-acumin uppercase text-lg w-4/5 text-center py-3
                transition-all duration-300 ease-in-out
                border-b-2 border-transparent
                ${isHomePage
                    ? 'text-black hover:border-black'
                    : 'text-[#1E1E1E] hover:border-[#E2A07E]'
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-full after:h-[2px] after:bg-current
                after:transform after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300 after:ease-in-out
                hover:after:scale-x-100 hover:after:origin-left`}
        >
            {children}
        </Link>
    )
}

export default Header; 