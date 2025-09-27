import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">CS — Ticket System</h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Products & Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Customer Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Information</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Social Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">X</span>
                <span className="text-gray-400 text-xs md:text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">in</span>
                <span className="text-gray-400 text-xs md:text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">f</span>
                <span className="text-gray-400 text-xs md:text-sm">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center text-xs">@</span>
                <span className="text-gray-400 text-xs md:text-sm">support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 md:pt-6">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            © {currentYear} CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;