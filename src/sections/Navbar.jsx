import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const NavItems = ({ closeMenu, isMobile = false }) => {
    return (
        <ul className="space-y-2 sm:space-y-0 sm:flex sm:space-x-6">
            {navLinks.map(({ id, href, name }) => (
                <li key={id}>
                    <Link
                        to={href}
                        onClick={closeMenu}
                        className={`
              block transition-colors
              ${isMobile
                            ? "w-full px-4 py-2 rounded-md text-black hover:bg-gray-100"
                            : "text-black hover:text-gray-500"
                        }
            `}
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
        <header className="border-b border-gray-200 fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="font-semibold text-lg text-black hover:text-gray-600 transition-colors"
                    >
                        Danh
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden flex focus:outline-none text-black hover:text-gray-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6 invert"
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
                    <nav className="p-5 sm:hidden bg-white text-black shadow-md border-t border-gray-200 rounded-b-lg">
                        <NavItems closeMenu={closeMenu} isMobile={true} />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
