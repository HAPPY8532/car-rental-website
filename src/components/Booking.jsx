import React, { useState, useContext } from "react";
import { cars } from "../data/data";
import { useParams } from "react-router-dom";
import { BookingContext } from "./Bookings";
import { v4 as uuidv4 } from "uuid";
import { toast, Toaster } from "react-hot-toast";

function Booking() {
  const { id } = useParams();
  const { bookings, setBookings } = useContext(BookingContext);

  const initialCar = id ? cars.find((c) => c.id === parseInt(id)) : null;
  const [selectedCar, setSelectedCar] = useState(initialCar);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    pickupLocation: "",
    dropoffLocation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCarChange = (e) => {
    const carId = parseInt(e.target.value);
    const car = cars.find((c) => c.id === carId);
    setSelectedCar(car);
  };

  const handleSubmit = () => {
    if (!selectedCar) {
      toast.error("🚘 Please select a car first!");
      return;
    }

    const {
      name,
      email,
      phone,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      pickupLocation,
      dropoffLocation,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !pickupDate ||
      !pickupTime ||
      !returnDate ||
      !returnTime ||
      !pickupLocation ||
      !dropoffLocation
    ) {
      toast.error("⚠ Please fill all required fields");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("⚠ Please enter a valid email address");
      return;
    }

    // phone validation
    if (!/^\d{10}$/.test(phone)) {
      toast.error("⚠ Phone number must be 10 digits");
      return;
    }

    //  pickup date should not be in past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(pickupDate) < today) {
      toast.error("⚠ Pickup date cannot be in the past");
      return;
    }

    // return date must be after pickup
    if (new Date(returnDate) < new Date(pickupDate)) {
      toast.error("⚠ Return date must be after pickup date");
      return;
    }

    // if same day, check time
    if (pickupDate === returnDate) {
      const [pHour, pMin] = pickupTime.split(":").map(Number);
      const [rHour, rMin] = returnTime.split(":").map(Number);

      const pickupTotal = pHour * 60 + pMin;
      const returnTotal = rHour * 60 + rMin;

      if (returnTotal <= pickupTotal) {
        toast.error("⚠ Return time must be after pickup time");
        return;
      }
    }

    // create booking
    const newBooking = {
      id: uuidv4(),
      car: selectedCar,
      ...formData,
    };

    setBookings([...bookings, newBooking]);
    toast.success("✅ Booking Confirmed!");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
      pickupLocation: "",
      dropoffLocation: "",
    });
    setSelectedCar(null);
  };

  return (
    <section className="bg-gray-100 flex justify-center items-center p-6">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Left: Car Details */}
        {selectedCar && (
          <div className="bg-gray-50 p-4 rounded-xl border shadow-md w-full md:w-1/2 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">
              Selected Car
            </h3>

            <div className="max-w-80 max-h-80 mb-3">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="rounded-lg shadow-md object-cover max-h-80 w-full h-44"
              />
            </div>

            <div className="space-y-1 text-sm">
              <h2 className="text-md font-bold text-gray-900">
                {selectedCar.name}
              </h2>
              <p className="text-gray-600">
                🚘 {selectedCar.type} | 🪑 {selectedCar.seats} seats
              </p>
              <p className="text-gray-600">
                ⛽ {selectedCar.fuel} | ⚙ {selectedCar.transmission}
              </p>
              <p className="text-gray-600">📅 {selectedCar.year}</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-yellow-600">
                  ${selectedCar.price}
                </span>
                <span className="text-gray-600"> / day</span>
              </div>
            </div>
          </div>
        )}

        {/* Right: Booking Form */}
        <div className="flex-1 overflow-y-auto max-h-[500px] pr-2">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
            Car Booking Form
          </h2>
          <p className="text-center text-gray-500 mb-5 text-sm">
            Please fill in your details below to reserve your vehicle.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Car Select Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select Car
              </label>
              <select
                value={selectedCar ? selectedCar.id : ""}
                onChange={handleCarChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="">-- Choose a car --</option>
                {cars.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} (${c.price}/day)
                  </option>
                ))}
              </select>
            </div>

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]} // ✅ disable past dates
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Row 3 (Pickup Time + Return Date) */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={formData.pickupDate || new Date().toISOString().split("T")[0]}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Row 4 (Return Time + Pickup Location) */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Return Time
                </label>
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Enter pickup location"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Drop-off Location
              </label>
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Enter drop-off location"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold text-base hover:bg-yellow-600 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
