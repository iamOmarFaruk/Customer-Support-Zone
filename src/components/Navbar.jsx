import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex gap-6">
              <li><a href="/home" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
              <li><a href="/changelog" className="text-gray-600 hover:text-gray-800">Changelog</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="/download" className="text-gray-600 hover:text-gray-800">Download</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
            <a href="/new-ticket" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">+ New Ticket</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
