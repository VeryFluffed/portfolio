import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const NavItems = ({ isDark, closeMenu }) => {
    return (
        <ul className="nav-ul space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <Link
                        to={href}
                        onClick={closeMenu}   // ✅ closes dropdown on click
                        className={`nav-li_a transition-colors ${
                            isDark
                                ? "text-white hover:text-gray-300"
                                : "text-black hover:text-gray-700"
                        }`}
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
    const [isDark, setIsDark] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false); // ✅ closes menu when item clicked

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsDark(scrollY > 100); // Adjust scroll threshold as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${isDark ? "sm:bg-black/70 sm:backdrop-blur-sm" : "sm:bg-transparent"}
        bg-black/70 backdrop-blur-sm sm:backdrop-blur-0
      `}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-3 mx-auto c-space">
                    {/* Logo */}
                    <a
                        href="/"
                        className={`
              font-bold text-lg transition-colors
              text-white hover:text-gray-300
              sm:${isDark ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"}
            `}
                    >
                        Danh
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={`focus:outline-none sm:hidden flex transition-colors ${
                            isDark
                                ? "text-white hover:text-gray-300"
                                : "text-black hover:text-gray-700"
                        }`}
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Desktop Nav */}
                    <nav className="sm:flex hidden">
                        <NavItems isDark={isDark} closeMenu={closeMenu} />
                    </nav>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                >
                    <nav className="p-5 sm:hidden bg-black/70 text-white backdrop-blur-sm shadow-md rounded-b-lg">
                        <NavItems isDark={true} closeMenu={closeMenu} />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
