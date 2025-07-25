import { useEffect, useState } from 'react';
import API from './api';

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await API.get('/bookings/my-bookings');
      setBookings(res.data.bookings || []);
    } catch (error) {
      console.error('Error fetching bookings', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="border p-4 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">{booking.serviceId?.name || 'Service'}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">Vehicle: {booking.vehicle}</p>
              <p className="text-sm text-gray-600">
                Date: {new Date(booking.date).toLocaleDateString()} at {booking.time}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
