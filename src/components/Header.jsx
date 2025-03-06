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
        <nav className={`w-full fixed top-0 z-50 transition-all duration-300
            ${hasScrolled
                ? 'bg-[#DBD0C6] shadow-lg'
                : 'bg-transparent'}`}>
            <div className="max-w-[95%] mx-auto px-4">
                <div className="flex items-center justify-between h-28">
                    <Link to="/" className="flex-shrink-0 pl-0">
                        <img
                            className="h-14 w-auto"
                            src={hasScrolled ? logoNegro : logoBlanco}
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        className="md:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x pr-0">
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
                    <div className={`md:hidden absolute top-28 left-0 w-full bg-[#F0E6DC] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className="flex flex-col items-center gap-4 py-4">
                            {navigationLinks.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    isHomePage={isHomePage}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
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
            className={`flex items-center justify-center rounded-full font-normal transition-all uppercase font-acumin 
                w-[13.43vw] min-w-[150px] max-w-[193px] h-[4.2vh] min-h-[35px] max-h-[38px] text-center
                text-[1.04vw] min-text-[16px] max-text-[18px] leading-[1.25] tracking-normal
                ${isHomePage
                    ? 'bg-[#fff] text-black hover:bg-white hover:scale-105'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#E2A07E] hover:text-white'
                }`}
        >
            {children}
        </Link>
    )
}

export default Header; 