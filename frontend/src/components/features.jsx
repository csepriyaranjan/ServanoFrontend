import React from "react";

const features = () => {

    const features = [
    {
      icon: 'fas fa-clock',
      title: 'Quick Service',
      description: 'Fast, efficient service with minimal wait times'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certified Technicians',
      description: 'ASE certified professionals with years of experience'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Warranty Guaranteed',
      description: 'All services backed by our comprehensive warranty'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Digital Experience',
      description: 'Easy online booking and real-time service updates'
    }
  ];

    return(
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Servano?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine decades of expertise with modern technology to deliver 
              an unparalleled automotive service experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <i className={`${feature.icon} text-3xl text-blue-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default features;
