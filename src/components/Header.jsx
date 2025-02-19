import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../config/navigation';
import logo from '../assets/images/logo-navbar.svg';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className={`w-full fixed top-0 z-50 bg-transparent`}>
            <div className="max-w-[95%] mx-auto px-4">
                <div className="flex items-center justify-between h-28">
                    <Link to="/" className="flex-shrink-0 pl-0">
                        <img
                            className={`h-14 w-auto ${!isHomePage ? '[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(0%)_saturate(1%)_hue-rotate(314deg)_brightness(95%)_contrast(88%)]' : ''}`}
                            src={logo}
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex space-x pr-0">
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
                    ? 'bg-[#F1F0F0] text-black hover:bg-white hover:scale-105'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#E2A07E] hover:text-white'
                }`}
        >
            {children}
        </Link>
    )
}

export default Header; 