const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-100 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        {/* Left side - Name & Title */}
        <div>
          <h2 className="text-lg font-bold tracking-widest">DANH TRAN</h2>
          <p className="text-gray-600">Mechatronics Engineer</p>
        </div>

        {/* Right side - Social Links */}
        <div>
          <h2 className="text-lg font-bold tracking-widest">SOCIAL</h2>
          <div className="mt-1 flex justify-center gap-4 sm:justify-start">
            <a
              href="mailto:danhcorps@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              Email
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/danh-tran-9b657a362/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/VeryFluffed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} by Danh Tran
      </div>
    </footer>
  );
};

export default Footer;
