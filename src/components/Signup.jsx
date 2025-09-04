import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
    address: "",
    joined: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Validation before signup
  const validateForm = () => {
    const { name, email, password, phone, address, joined } = formData;

    if (!name || !email || !password || !phone || !address || !joined) {
      toast.error("⚠ Please fill all required fields");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("⚠ Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      toast.error("⚠ Password must be at least 6 characters");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("⚠ Phone number must be 10 digits");
      return false;
    }

    if (new Date(joined) > new Date()) {
      toast.error("⚠ Joined date cannot be in the future");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    const { success, message } = signup(formData);
    if (success) {
      toast.success(message || "✅ Signup successful!");
      setTimeout(() => navigate("/"), 1500);
    } else {
      toast.error(message || "❌ Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-[350px] space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 chars)"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Your Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="date"
          name="joined"
          placeholder="Current Date"
          value={formData.joined}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <input
          type="text"
          name="profileImage"
          placeholder="Profile Image URL (optional)"
          value={formData.profileImage}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
