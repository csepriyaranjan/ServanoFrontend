import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img className="h-12" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              to="/#services"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              About
            </Link>
            <Link
              to="/#testimonials"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Reviews
            </Link>
            <Link
              to="/#contact"
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button, Profile Icon & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/book-services">
              <button className="bg-blue-600 hidden md:flex text-white px-5 py-1.5 font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Book Service
              </button>
            </Link>
            {/* Profile Icon */}
            <Link to="/profile" className="flex items-center">
              <i className="fas fa-user-circle text-4xl text-gray-700 hover:text-blue-600 transition-colors"></i>
            </Link>
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-gray-700"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Home
              </Link>
              <a
                to="#services"
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Services
              </a>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                About
              </Link>
              <a 
                to="#testimonials"
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Contact
              </a>

              <Link to="/book-services">
              <button className="bg-blue-600 w-full text-white px-5 py-1.5 font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Book Service
              </button>
            </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
