import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-lg lg:text-2xl font-bold text-gray-800">
            <a href="/">CS — Ticket System</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-6">
              <li><a href="/home" className="text-black hover:text-gray-800">Home</a></li>
              <li><a href="/faq" className="text-black hover:text-gray-800">FAQ</a></li>
              <li><a href="/changelog" className="text-black hover:text-gray-800">Changelog</a></li>
              <li><a href="/blog" className="text-black hover:text-gray-800">Blog</a></li>
              <li><a href="/download" className="text-black hover:text-gray-800">Download</a></li>
              <li><a href="/contact" className="text-black hover:text-gray-800">Contact</a></li>
            </ul>
            <a 
              href="/new-ticket" 
              className="text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: "url('/button-bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              + New Ticket
            </a>
          </div>

          {/* Mobile: New Ticket Button + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href="/new-ticket" 
              className="text-white  py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
              style={{
                backgroundImage: "url('/button-bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              + New Ticket
            </a>
            
            <button 
              className="flex flex-col gap-1 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <ul className="flex flex-col gap-4">
              <li><a href="/home" className="block text-black hover:text-gray-800 py-2">Home</a></li>
              <li><a href="/faq" className="block text-black hover:text-gray-800 py-2">FAQ</a></li>
              <li><a href="/changelog" className="block text-black hover:text-gray-800 py-2">Changelog</a></li>
              <li><a href="/blog" className="block text-black hover:text-gray-800 py-2">Blog</a></li>
              <li><a href="/download" className="block text-black hover:text-gray-800 py-2">Download</a></li>
              <li><a href="/contact" className="block text-black hover:text-gray-800 py-2">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
