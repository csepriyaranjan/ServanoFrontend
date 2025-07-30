import react from "react";
import { Link } from "react-router-dom";

const Services = () => {
  
  const services = [
    {
      name: "Oil Change",
      icon: "fas fa-oil-can",
      duration: "30 min",
      price: "$49",
      description:
        "Premium oil change with filter replacement and multi-point inspection",
      bg: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg"
    },
    {
      name: "Brake Service",
      icon: "fas fa-dot-circle",
      duration: "60 min",
      price: "$199",
      description:
        "Complete brake system inspection and service with quality parts",
      bg:"https://images.pexels.com/photos/33141917/pexels-photo-33141917.jpeg"
    },
    {
      name: "Tire Service",
      icon: "fas fa-circle",
      duration: "45 min",
      price: "$89",
      description:
        "Tire rotation, balancing, and alignment for optimal performance",
      bg: "https://images.pexels.com/photos/8986177/pexels-photo-8986177.jpeg"
    },
    {
      name: "Engine Diagnostic",
      icon: "fas fa-search",
      duration: "90 min",
      price: "$129",
      description: "Advanced computer diagnostics to identify engine issues",
      bg: "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg"
    },
    {
      name: "AC Service",
      icon: "fas fa-snowflake",
      duration: "75 min",
      price: "$159",
      description: "Air conditioning system service and refrigerant recharge",
      bg: "https://images.pexels.com/photos/14992308/pexels-photo-14992308.jpeg"
    },
    {
      name: "Transmission Service",
      icon: "fas fa-cogs",
      duration: "120 min",
      price: "$299",
      description: "Complete transmission fluid change and system inspection",
      bg: "https://images.pexels.com/photos/7568427/pexels-photo-7568427.jpeg"
    },
  ];

  
  return (
    <section id="services" className="py-20  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, our certified
            technicians deliver exceptional service using the latest tools and
            genuine parts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div
                className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 p-8 flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('${service.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-500 bg-opacity-80"></div>
                <i
                  className={`${service.icon} text-6xl text-white relative z-10 group-hover:scale-110 transition-transform`}
                ></i>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                <Link to={`/book-services/${service.name}`}>
                <button className="w-full bg-blue-600 text-white py-3 px-6 !rounded-button font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap group-hover:bg-blue-700">
                  Book Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
