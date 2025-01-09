import logo from '../assets/images/logo.svg'

function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 pl-0">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </div>
          
          <div className="flex space-x-8 pr-0">
            <NavLink href="#quienes-somos">QUIÉNES SOMOS</NavLink>
            <NavLink href="#servicios">SERVICIOS</NavLink>
            <NavLink href="#portfolio">PORTFOLIO</NavLink>
            <NavLink href="#contacto">CONTACTO</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="bg-[#F1F0F0] text-black px-4 py-2 rounded-full text-sm font-medium 
                 transition-all uppercase hover:bg-white hover:scale-105"
    >
      {children}
    </a>
  )
}

export default Navbar 