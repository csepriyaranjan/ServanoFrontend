// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../components/api";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import logo from "../assets/smlogo-blue.svg";

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await API.get("/bookings");

      // Convert all string values to uppercase before setting state
      const upperCaseBookings = res.data.map((b) => ({
        ...b,
        user: b.user ? { ...b.user, name: b.user.name?.toUpperCase() } : null,
        vehicleName: b.vehicleName?.toUpperCase(),
        vehicleNumber: b.vehicleNumber?.toUpperCase(),
        status: b.status?.toUpperCase(),
      }));

      setBookings(upperCaseBookings);
    } catch (err) {
      if (err.response?.status === 403) {
        navigate("/profile");
      } else {
        console.error("Error fetching bookings", err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setLoading(true);
    try {
      await API.put(`/bookings/${id}/status`, { status: newStatus });
      fetchBookings();
    } catch (err) {
      if (err.response?.status === 403) {
        navigate("/profile");
      } else {
        console.error("Error updating booking status", err);
      }
      setLoading(false);
    }
  };

  const handleDeleteBooking = async (id) => {
    setLoading(true);
    try {
      await API.delete(`/bookings/${id}/delete`);
      fetchBookings();
    } catch (err) {
      if (err.response?.status === 403) {
        navigate("/profile");
      } else {
        console.error("Error deleting booking", err);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="bg-gray-900 min-h-screen">
        <header className="bg-gray-950 shadow">
          <div className="max-w-7xl mx-auto justify-between px-4 py-6 flex items-center">
            <Link to="/" className="cursor-pointer flex items-center">
              {" "}
              <img className="h-7 mt-1" src={logo} alt="logo" />
              <span className="text-2xl ml-2 text-white font-bold">
                SERVANO
              </span>
            </Link>

            <h1 className="text-2xl font-bold text-white">ADMIN PANEL</h1>
          </div>
        </header>

        <div className="p-6 max-w-4xl mx-auto">
          {bookings.length === 0 ? (
            <p className="text-gray-300">NO BOOKINGS FOUND.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="p-4 border rounded shadow-md bg-gray-800 border-gray-700"
                >
                  <p className="text-gray-200">
                    <strong>USER:</strong> {booking.user?.name || "N/A"}
                  </p>
                  <p className="text-gray-200">
                    <strong>VEHICLE:</strong> {booking.vehicleName} -{" "}
                    {booking.vehicleNumber}
                  </p>
                  <p className="text-gray-200">
                    <strong>DATE:</strong>{" "}
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>

                  <label className="text-gray-200">
                    <strong>STATUS:</strong>
                  </label>
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking._id, e.target.value)
                    }
                    className="mt-1 border rounded px-2 py-1 bg-gray-900 text-white border-gray-600"
                  >
                    <option value="Pending">PENDING</option>
                    <option value="Accepted">ACCEPTED</option>
                    <option value="Completed">COMPLETED</option>
                    <option value="Canceled">CANCELED</option>
                  </select>

                  <button
                    onClick={() => handleDeleteBooking(booking._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
