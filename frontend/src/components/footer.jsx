import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/smlogo-blue.svg"
import { useParams } from "react-router-dom";

const Footer = () => {
  
    return(
        <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <i to="/" className="cursor-pointer"> <img className="h-7 mt-1" src={logo} alt="logo"/></i>
                <span className="text-2xl ml-2 font-bold">SERVANO</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted automotive service partner since 1999. We combine expertise, 
                technology, and exceptional customer service to keep you on the road.
              </p>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition-colors"></i>
                <i className="fab fa-twitter text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition-colors"></i>
                <i className="fab fa-instagram text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition-colors"></i>
                <i className="fab fa-youtube text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition-colors"></i>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/book-services/" className="hover:text-white cursor-pointer transition-colors">Oil Change</Link></li>
                <li><Link to="/book-services" className="hover:text-white cursor-pointer transition-colors">Brake Service</Link></li>
                <li><Link to="/book-services" className="hover:text-white cursor-pointer transition-colors">Tire Service</Link></li>
                <li><Link to="/book-services" className="hover:text-white cursor-pointer transition-colors">Engine Diagnostic</Link></li>
                <li><Link to="/book-services" className="hover:text-white cursor-pointer transition-colors">AC Service</Link></li>
                <li><Link to="/book-services" className="hover:text-white cursor-pointer transition-colors">Transmission Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-white cursor-pointer transition-colors">About Us</Link></li>
                <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Our Team</Link></li>
                <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Careers</Link></li>
                <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Blog</Link></li>
                <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Press</Link></li>
                <li><Link to="/" className="hover:text-white cursor-pointer transition-colors">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-blue-400"></i>
                  <span>Servano Service Ave, City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone mr-3 text-blue-400"></i>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <span>info@servano.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-exclamation-triangle mr-3 text-red-400"></i>
                  <span className="text-red-400 font-semibold">Emergency: (555) 911-AUTO</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Get maintenance tips and special offers</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 p-2 rounded-l-lg border-none text-gray-900 text-sm"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap !rounded-button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Servano. All rights reserved. Made with Love ❤️.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-services" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white cursor-pointer transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;