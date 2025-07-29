import { useEffect, useState } from "react";
import API from "./api";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings/my");
      setBookings(res.data || []);
    } catch (error) {
      console.error("Error fetching bookings", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    try { 
      const res = await API.get("/auth/profile");
      setUser(res.data || {});
    } catch (error) {
      console.error("Error fetching user data", error);
      return {};
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    fetchBookings();
    fetchUser();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <button
        onClick={handleLogout}
        className="px-4 py-2  bg-red-500 text-white rounded hover:bg-red-600 float-right"
      >
        Logout
      </button>

      <h1 className="text-center mt-16">Welcome {user.name}!</h1>
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
                <h3 className="text-lg font-semibold">{booking.service}</h3>
                <h3 className="text-lg font-semibold">{booking.vehicleName}</h3>
                <h3 className="text-lg font-semibold">{booking.vehicleNumber}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Date: {new Date(booking.bookingDate).toLocaleDateString()} at{" "}
                {booking.bookingTime}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;
