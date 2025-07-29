// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import API from '../components/api';

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
      await API.put(`/bookings/${id}`, { status: newStatus });
      fetchBookings();
    } catch (err) {
      if (err.response && err.response.status === 403) {
        navigate('/profile');
      } else {
        console.error('Error updating booking status', err);
      }
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Booking Panel</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="p-4 border rounded shadow-md">
              <p><strong>User:</strong> {booking.user?.name || 'N/A'}</p>
              <p><strong>Vehicle:</strong> {booking.vehicleName} - {booking.vehicleNumber}</p>
              <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong></p>
              <select
                value={booking.status}
                onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                className="mt-1 border rounded px-2 py-1"
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
  );
};

export default AdminPanel;
