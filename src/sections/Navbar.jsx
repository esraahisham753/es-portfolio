import { useState } from "react"

const NavItems = () => {
  return (
    <ul className="nav-ul">

    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between mx-auto items-center c-space py-5">
                <a href="/" className="text-neutral-400 text-2xl font-bold hover:text-white transition-colors">EsraaCodes</a>
                <button onClick={toggle} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex cursor-pointer" aria-label="Toggle menu">
                  <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="menu" className="w-6 h-6"/>
                </button>
                
                <nav className="sm:flex hidden">

                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar