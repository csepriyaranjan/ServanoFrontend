import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            About Servano
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <strong>Servano</strong> is your trusted car service booking
            platform designed to bring ease and efficiency to vehicle
            maintenance. No more long calls, no more uncertainty — just simple,
            seamless service at your fingertips.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Whether you're booking a routine checkup, major repair, or emergency
            service, Servano connects you to verified service centers with
            real-time scheduling and complete transparency. Users can track
            service status, view history, and stay informed — all in one place.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Built for both convenience and control, Servano empowers vehicle
            owners and streamlines operations for service providers. We're not
            just a platform — we're your{" "}
            <span className="text-blue-600 font-semibold">
              car care companion
            </span>
            .
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join hundreds of satisfied users who trust Servano to keep their
            vehicles in top shape. Because with Servano,{" "}
            <span className="italic font-medium text-black">
              service is just a click away
            </span>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
