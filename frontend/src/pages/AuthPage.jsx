import { useState } from "react";
import API from "../components/api";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const endpoint = isLogin ? "/auth/login" : "/auth/register";
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
      ...(isLogin ? {} : { name: e.target.fullName.value }),
    };

    try {
      const response = await API.post(endpoint, payload);
      localStorage.setItem("token", response.data.token);
      console.log("Authentication successful:", response.data);
      window.location.href = "/book-services";
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login to Servano" : "Register for Servano"}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 ml-1 underline hover:text-blue-800"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
