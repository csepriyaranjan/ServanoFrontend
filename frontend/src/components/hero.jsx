import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?_gl=1*18xl5a5*_ga*MTczODYyMDk4NS4xNzUzNDU4MTI1*_ga_8JE65Q40S6*czE3NTM0NTgxMjQkbzEkZzEkdDE3NTM0NTgyMDgkajYwJGwwJGgw')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Servano
          <span className="block text-blue-300">You Can Trust</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Experience the difference with certified technicians, cutting-edge
          equipment, and unmatched customer service for all your automotive
          needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/book-services"><button className="bg-blue-600 text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shadow-lg">
            <i className="fas fa-calendar-alt mr-2"></i>
            Book Service Now
          </button>
          </Link>
          <button className="bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 !rounded-button font-semibold text-lg hover:bg-opacity-20 transition-colors cursor-pointer whitespace-nowrap border border-white border-opacity-30">
            <i className="fas fa-phone mr-2"></i>
            Call (555) 123-4567
          </button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
              25+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
              50K+
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
              15
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Service Bays
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
              4.9★
            </div>
            <div className="text-sm md:text-base text-blue-100">
              Customer Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
