import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';
import logoBlanco from '../assets/images/logo-onlinesolo-blanco.svg';
import logoNegro from '../assets/images/logo-onlinesolo-negro.svg';
import { useState, useEffect } from 'react';
import { useScrollTop } from '../hooks/useScrollTop';

function Header() {
    const location = useLocation();
    useScrollTop();
    const isHomePage = location.pathname === '/';
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerLogoOpacity, setHeaderLogoOpacity] = useState(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
            if (scrollPosition === 0) {
                setIsMenuOpen(false);
            }
        };

        const handleHeroLogoScroll = (event) => {
            if (!isHomePage) return;
            
            const { opacity } = event.detail;
            setHeaderLogoOpacity(1 - opacity);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('heroLogoScroll', handleHeroLogoScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('heroLogoScroll', handleHeroLogoScroll);
        };
    }, [isHomePage]);

    useEffect(() => {
        setHeaderLogoOpacity(isHomePage ? 0 : 1);
    }, [isHomePage]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out
            ${hasScrolled ? 'bg-[#000] shadow-lg backdrop-blur-sm bg-opacity-90' : 'bg-transparent'}`}>
            <div className="max-w-[95%] mx-auto px-4">
                <div className={`flex items-center justify-between transition-all duration-500
                    ${hasScrolled ? 'h-20' : 'h-28'}`}>
                    <Link to="/" className="flex-shrink-0 pl-0">
                        <img
                            className={`w-auto transition-all duration-500
                                ${hasScrolled ? 'h-8 xs:h-6 sm:h-8 md:h-8 lg:h-10' : 'h-9 xs:h-10 sm:h-11 md:h-10 lg:h-14'}`}
                            style={{
                                opacity: isHomePage ? headerLogoOpacity : 1,
                                transform: isHomePage ? `translate3d(0, ${(1 - headerLogoOpacity) * 20}px, 0) 
                                          rotate(${(1 - headerLogoOpacity) * -10}deg)
                                          scale(${0.8 + (headerLogoOpacity * 0.2)})` : 'none',
                                visibility: isHomePage && headerLogoOpacity === 0 ? 'hidden' : 'visible',
                                pointerEvents: isHomePage && headerLogoOpacity === 0 ? 'none' : 'auto'
                            }}
                            src={isHomePage ? logoBlanco : (hasScrolled ? logoBlanco : logoNegro)}
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        className={`md:hidden p-2 relative z-50 transition-all duration-300 hover:scale-105 
                            ${isHomePage && headerLogoOpacity === 0 ? 'opacity-0' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-5 xs:w-4 h-0.5 mb-1.5 transition-all duration-300 transform
                            ${hasScrolled ? 'bg-white' : 'bg-black'}
                            ${isMenuOpen ? 'rotate-45 translate-y-2' : 'hover:w-4 xs:hover:w-3'}`}></div>
                        <div className={`w-5 xs:w-4 h-0.5 mb-1.5 transition-all duration-300
                            ${hasScrolled ? 'bg-white' : 'bg-black'}
                            ${isMenuOpen ? 'opacity-0' : 'hover:w-3 xs:hover:w-2'}`}></div>
                        <div className={`w-5 xs:w-4 h-0.5 transition-all duration-300 transform
                            ${hasScrolled ? 'bg-white' : 'bg-black'}
                            ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'hover:w-2 xs:hover:w-1'}`}></div>
                    </button>

                    {/* Desktop menu */}
                    <div className={`hidden md:flex items-center justify-end space-x-4 flex-1 
                        ${isHomePage && headerLogoOpacity === 0 ? 'opacity-0' : ''}`}>
                        {navigationLinks.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                isHomePage={isHomePage}
                                headerLogoOpacity={headerLogoOpacity}
                                isInitialLoad={isInitialLoad}
                                hasScrolled={hasScrolled}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile menu */}
                    <div className={`md:hidden absolute top-16 left-0 w-full bg-[#000] transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-95
                        ${isMenuOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-4'}`}>
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navigationLinks.map(({ path, label }) => (
                                <MobileNavLink
                                    key={path}
                                    to={path}
                                    isHomePage={isHomePage}
                                    headerLogoOpacity={headerLogoOpacity}
                                    onClick={() => setIsMenuOpen(false)}
                                    isInitialLoad={isInitialLoad}
                                    hasScrolled={hasScrolled}
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

function NavLink({ to, children, isHomePage, headerLogoOpacity, isInitialLoad, hasScrolled }) {
    return (
        <Link
            to={to}
            className={`flex items-center justify-center rounded-full font-normal transition-all duration-500 ease-in-out uppercase font-archivo 
                w-[13.43vw] sm:w-[10vw] md:w-[9.5vw] lg:w-[13.43vw] 
                min-w-[120px] sm:min-w-[110px] md:min-w-[115px] lg:min-w-[150px] max-w-[193px]
                text-[1.04vw] sm:text-[13px] md:text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] leading-[1.25] tracking-normal
                px-2 sm:px-2 md:px-2 lg:px-4
                transform hover:scale-105 hover:shadow-md hover:rotate-2
                ${hasScrolled 
                    ? 'h-[3.5vh] min-h-[28px] md:min-h-[26px] lg:min-h-[30px] max-h-[32px]' 
                    : 'h-[4.2vh] min-h-[32px] md:min-h-[30px] lg:min-h-[35px] max-h-[38px]'}
                ${isHomePage
                    ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                    : hasScrolled
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                        : 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
            style={isHomePage ? {
                opacity: isInitialLoad ? 0 : headerLogoOpacity,
                transform: `translate3d(0, ${(1 - headerLogoOpacity) * 15}px, 0) 
                          rotate(${(1 - headerLogoOpacity) * 5}deg)
                          scale(${0.9 + (headerLogoOpacity * 0.1)})`,
                visibility: headerLogoOpacity === 0 ? 'hidden' : 'visible'
            } : undefined}
        >
            {children}
        </Link>
    )
}

function MobileNavLink({ to, children, isHomePage, headerLogoOpacity, onClick, isInitialLoad, hasScrolled }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`relative overflow-hidden font-archivo uppercase text-lg w-4/5 text-center py-3
                transition-all duration-300 ease-in-out
                border-b-2 border-transparent
                ${isHomePage
                    ? 'text-white hover:border-white'
                    : hasScrolled
                        ? 'text-white hover:border-white'
                        : 'text-black hover:border-black'
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-full after:h-[2px] after:bg-current
                after:transform after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300 after:ease-in-out
                hover:after:scale-x-100 hover:after:origin-left`}
            style={isHomePage ? {
                opacity: isInitialLoad ? 0 : headerLogoOpacity,
                transform: `scale(${Math.max(0.95, headerLogoOpacity)})`,
                visibility: headerLogoOpacity === 0 ? 'hidden' : 'visible'
            } : undefined}
        >
            {children}
        </Link>
    )
}

export default Header; 