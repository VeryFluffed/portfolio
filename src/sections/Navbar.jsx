import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const NavItems = ({ isDark }) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <Link
                        to={href}
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

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

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
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                isDark ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-3 mx-auto c-space">
                    <a
                        href="/"
                        className={`font-bold text-lg transition-colors ${
                            isDark
                                ? "text-white hover:text-gray-300"
                                : "text-black hover:text-gray-700"
                        }`}
                    >
                        Danh
                    </a>

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
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems isDark={isDark} />
                    </nav>
                </div>

                <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                    <nav className="p-5">
                        <NavItems isDark={isDark} />
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
