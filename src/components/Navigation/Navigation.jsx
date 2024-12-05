import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-2xl">
              <i className="ri-windy-fill"></i>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-xl focus:outline-none focus:text-white"
              >
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
