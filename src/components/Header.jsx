import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-navbar.svg'

function Header() {
    const navLinks = [
        { path: '/sobre-nosotros', label: 'QUIÉNES SOMOS' },
        { path: '/servicios', label: 'SERVICIOS' },
        { path: '/portfolio', label: 'PORTFOLIO' },
        { path: '/contacto', label: 'CONTACTO' }
    ];

    return (
        <nav className="w-full fixed top-0 z-50">
            <div className="max-w-[95%] mx-auto px-4">
                <div className="flex items-center justify-between h-28">
                    <Link to="/" className="flex-shrink-0 pl-0">
                        <img className="h-14 w-auto" src={logo} alt="Logo" />
                    </Link>

                    <div className="flex space-x pr-0">
                        {navLinks.map(({ path, label }) => (
                            <NavLink key={path} to={path}>{label}</NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            className="bg-[#F1F0F0] text-black px-4 py-2 rounded-full text-base font-normal 
                 transition-all uppercase hover:bg-white hover:scale-105 font-acumin"
        >
            {children}
        </Link>
    )
}

export default Header 