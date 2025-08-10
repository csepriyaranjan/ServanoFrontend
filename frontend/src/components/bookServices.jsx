import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api";
import Loader from "./Loader";

const BookServices = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const services = [
    {
      name: "Oil Change",
      icon: "fas fa-oil-can",
      duration: "30 min",
      price: "$49",
      description:
        "Premium oil change with filter replacement and multi-point inspection",
    },
    {
      name: "Brake Service",
      icon: "fas fa-dot-circle",
      duration: "60 min",
      price: "$199",
      description:
        "Complete brake system inspection and service with quality parts",
    },
    {
      name: "Tire Service",
      icon: "fas fa-circle",
      duration: "45 min",
      price: "$89",
      description:
        "Tire rotation, balancing, and alignment for optimal performance",
    },
    {
      name: "Engine Diagnostic",
      icon: "fas fa-search",
      duration: "90 min",
      price: "$129",
      description: "Advanced computer diagnostics to identify engine issues",
    },
    {
      name: "AC Service",
      icon: "fas fa-snowflake",
      duration: "75 min",
      price: "$159",
      description: "Air conditioning system service and refrigerant recharge",
    },
    {
      name: "Transmission Service",
      icon: "fas fa-cogs",
      duration: "120 min",
      price: "$299",
      description: "Complete transmission fluid change and system inspection",
    },
  ];

  const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM", "4:00 PM"];

  // Set selected service from URL param
  useEffect(() => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
  }, [serviceName]);

  const handleBooking = () => {
    setLoading(true);
    if (
      !selectedService ||
      !selectedVehicle ||
      !vehicleNumber.trim() ||
      !selectedDate ||
      !selectedTime
    ) {
      alert("Please fill all required fields including Vehicle No.");
      return;
    }
    API.post("/bookings", {
      service: selectedService,
      vehicleName: selectedVehicle,
      vehicleNumber: vehicleNumber,
      bookingDate: selectedDate,
      bookingTime: selectedTime,
    })
      .then((response) => {
        alert("Booking confirmed!");
        setSelectedService("");
        setSelectedVehicle("");
        setVehicleNumber("");
        setSelectedDate("");
        setSelectedTime("");
        navigate("/profile"); // Redirect to bookings page
      })
      .catch((error) => {
        alert("Booking failed!");
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Service
            </h2>
            <p className="text-xl text-gray-600">
              Schedule your appointment in just a few simple steps
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Service Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-6">
                  Select Service
                </label>
                <div className="space-y-3">
                  {services.slice(0, 5).map((service) => (
                    <div
                      key={service.name}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                        selectedService === service.name
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setSelectedService(service.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <i
                            className={`${service.icon} text-blue-600 mr-4 text-xl`}
                          ></i>
                          <div>
                            <span className="font-semibold text-gray-900">
                              {service.name}
                            </span>
                            <div className="text-sm text-gray-500">
                              {service.duration}
                            </div>
                          </div>
                        </div>
                        <span className="font-bold text-blue-600">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle & DateTime Selection */}
              <div className="space-y-8">
                {/* Vehicle Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Select Vehicle
                  </label>
                  <div className="relative">
                    <select
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      value={selectedVehicle}
                      onChange={(e) => setSelectedVehicle(e.target.value)}
                    >
                      <option value="">Choose your vehicle</option>
                      <option value="bmw-x5">2022 BMW X5</option>
                      <option value="honda-civic">2020 Honda Civic</option>
                      <option value="toyota-camry">2021 Toyota Camry</option>
                      <option value="ford-f150">2023 Ford F-150</option>
                      <option value="mercedes-c300">2021 Mercedes C300</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle No Input */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Vehicle No
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    placeholder="Enter your vehicle number"
                    required
                  />
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`p-3 border-2 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap ${
                          selectedTime === time
                            ? "border-blue-500 bg-blue-500 text-white shadow-md"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                        onClick={() => setSelectedTime(time)}
                        required
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 !rounded-button text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl"
                  onClick={handleBooking}
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookServices;
