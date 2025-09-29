import React from "react";

const Footer = () => {
    return (
        <footer className="border-t border-gray-300 py-8 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-6">

                {/* Left side - Name & Title */}
                <div>
                    <h2 className="font-bold tracking-widest text-lg">DANH TRAN</h2>
                    <p className="text-gray-600">Mechatronics Engineer</p>
                </div>

                {/* Right side - Social Links */}
                <div>
                    <h2 className="font-bold tracking-widest text-lg">SOCIAL</h2>
                    <div className="flex justify-center sm:justify-start gap-4 mt-1">
                        <a
                            href="mailto:danhcorps@gmail.com"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            Email
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                            href="https://www.linkedin.com/in/danh-tran-9b657a362/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            LinkedIn
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                            href="https://github.com/VeryFluffed"
                            className="text-gray-600 hover:text-black transition-colors"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center text-gray-500 text-sm mt-6">
                © {new Date().getFullYear()} by Danh Tran
            </div>
        </footer>
    );
};

export default Footer;