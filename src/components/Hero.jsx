import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import toast, { Toaster } from "react-hot-toast";

function Hero() {
  const { login, user, logout } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);

    if (result.success) {
      toast.success(result.message || "✅ Login successful!");
      setEmail("");
      setPassword("");
    } else {
      toast.error(result.message || "❌ Invalid email or password");
    }
  };

  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Main Container */}
      <div className="w-full max-w-6xl min-h-[70vh] bg-gray-700 rounded-2xl flex flex-col lg:flex-row items-center justify-between shadow-[0_0_15px_3px_white] p-6 gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug fade-in-up">
            Drive Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              Dream Car
            </span>{" "}
            Today
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed fade-in-up delay-1">
            Affordable, reliable, and hassle-free car rentals 🚗.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-2">
            <Link to="/vehicles">
              <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 btn-animate w-full sm:w-auto">
                Explore Cars
              </button>
            </Link>
            <Link to="/booking">
              <button className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 btn-animate w-full sm:w-auto">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Login / User Info */}
        <div className="flex-1 w-full max-w-md bg-white rounded-xl p-6 shadow-lg slide-in-right">
          {user ? (
            <div className="flex flex-col items-center w-full space-y-5 bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-xl shadow-inner">
              {/* User Avatar */}
              <div className="relative">
                <img
                  src={user?.profileImage || "https://i.pravatar.cc/150"}
                  alt="User"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
                />
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>

              {/* User Info */}
              <div className="text-center space-y-1">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                    {user.name}
                  </span>
                </h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <Link to="/profile">
                  <button className="w-full py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition btn-animate">
                    View Profile
                  </button>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toast.success("✅ Logged out successfully!");
                  }}
                  className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition btn-animate"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleLogin}
              className="flex flex-col w-full space-y-4 text-sm"
            >
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
                Login
              </h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black rounded px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-300 btn-animate"
              >
                Login
              </button>
              <p className="text-xs text-center text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
