import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import errorImg from "../assets/404-gif.gif";

const NotFound = () => {

  return (
    <>
      <Navbar />
    <div className="flex items-center justify-center h-min min-h-96 md:min-h-[500px] bg-white">
      <div className="text-center">
        <img className=" items-center h-80" src={errorImg} alt="404" />
        <h1 className="text-center text-5xl font-bold text-gray-400">404</h1>
        <h1 className="text-center text-xl mt-5 mb-10  font-bold text-gray-400">Page not found</h1>
      </div>
    </div>
      <Footer />
    </>
  );
}
export default NotFound;