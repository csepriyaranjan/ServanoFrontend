import { useEffect, useState } from "react";
import API from "./api";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings/my");

      // Convert booking text to uppercase
      const upperCaseBookings = (res.data || []).map(b => ({
        ...b,
        service: b.service?.toUpperCase(),
        vehicleName: b.vehicleName?.toUpperCase(),
        vehicleNumber: b.vehicleNumber?.toUpperCase(),
        status: b.status?.toUpperCase(),
        bookingTime: b.bookingTime?.toUpperCase()
      }));

      setBookings(upperCaseBookings);
    } catch (error) {
      console.error("Error fetching bookings", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await API.get("/auth/profile");
      const userData = res.data || {};
      setUser({
        ...userData,
        name: userData.name?.toUpperCase()
      });
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    fetchBookings();
    fetchUser();
  }, []);

  return (
    <div className="max-w-4xl mb-10 mx-auto mt-10 p-4 sm:p-6 bg-white rounded-lg shadow">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full sm:w-auto px-4 py-2 mb-4 sm:mb-0 bg-red-500 text-white rounded hover:bg-red-600 float-none sm:float-right"
      >
        LOGOUT
      </button>

      {/* Welcome Header */}
      <h1 className="text-center mt-6 sm:mt-16 text-lg sm:text-xl font-bold">
        WELCOME {user.name || "USER"}!
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        BOOKINGS
      </h2>

      {loading ? (
        <p className="text-center">LOADING...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center">NO BOOKINGS FOUND.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="border p-4 rounded-lg shadow-sm bg-gray-50"
            >
              {/* Booking Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 flex-wrap">
                <h3 className="text-base sm:text-lg font-semibold">
                  {booking.service}
                </h3>
                <h3 className="text-base sm:text-lg font-semibold">
                  {booking.vehicleName}
                </h3>
                <h3 className="text-base sm:text-lg font-semibold">
                  {booking.vehicleNumber}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm text-center ${
                    booking.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "ACCEPTED"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              {/* Booking Date */}
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                DATE: {new Date(booking.bookingDate).toLocaleDateString()} AT{" "}
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
