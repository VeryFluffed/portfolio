import { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = ({ closeMenu, isMobile = false }) => {
  return (
    <ul className="space-y-2 sm:flex sm:space-y-0 sm:space-x-6">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <Link
            to={href}
            onClick={closeMenu}
            className={`block transition-colors ${
              isMobile
                ? "w-full rounded-md px-4 py-2 text-black hover:bg-gray-100"
                : "text-black hover:text-gray-500"
            } `}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-semibold text-black transition-colors hover:text-gray-600"
          >
            Danh
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex text-black transition-colors hover:text-gray-600 focus:outline-none sm:hidden"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6 invert"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <NavItems closeMenu={closeMenu} />
          </nav>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="rounded-b-lg border-t border-gray-200 bg-white p-5 text-black shadow-md sm:hidden">
            <NavItems closeMenu={closeMenu} isMobile={true} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
