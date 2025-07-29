// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import API from '../components/api';

// Replace with your logo path
import logo from '../assets/logo.jpg';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get('/bookings');
      setBookings(res.data);
    } catch (err) {
      if (err.response && err.response.status === 403) {
        navigate('/profile');
      } else {
        console.error('Error fetching bookings', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      // Use PUT to update booking status
      await API.put(`/bookings/${id}/status`, { status: newStatus });
      fetchBookings();
    } catch (err) {
      if (err.response && err.response.status === 403) {
        navigate('/profile');
      } else {
        console.error('Error updating booking status', err);
      }
    }
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gray-950 shadow">
        <div className="max-w-7xl mx-auto justify-between px-4 py-6 flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
          <h1 className="text-2xl font-bold text-white">Admin Booking Panel</h1>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-white">Admin Booking Panel</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-300">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking._id} className="p-4 border rounded shadow-md bg-gray-800 border-gray-700">
                <p className="text-gray-200"><strong>User:</strong> {booking.user?.name || 'N/A'}</p>
                <p className="text-gray-200"><strong>Vehicle:</strong> {booking.vehicleName} - {booking.vehicleNumber}</p>
                <p className="text-gray-200"><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                <p className="text-gray-200"><strong>Status:</strong></p>
                <select
                  value={booking.status}
                  onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                  className="mt-1 border rounded px-2 py-1 bg-gray-900 text-white border-gray-600"
                >
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
