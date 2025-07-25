import React from "react";

const Testimonials = () => {
    const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Exceptional service! The team went above and beyond to fix my car quickly and professionally.',
      service: 'Engine Diagnostic'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Been coming here for 3 years. Always honest, fair pricing, and quality work every time.',
      service: 'Oil Change'
    },
    {
      name: 'Emma Rodriguez',
      rating: 5,
      text: 'Love the online booking system and how they keep me updated throughout the service process.',
      service: 'Brake Service'
    }
  ];
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied
            customers who trust us with their vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="fas fa-star text-yellow-400 text-lg"
                  ></i>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-600 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2,847</div>
              <div className="text-sm text-gray-300">Total Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;