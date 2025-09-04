import React, { useContext, useState } from "react";
import {
  User,
  Car,
  Calendar,
  MapPin,
  Phone,
  Edit,
  X,
  Clock,
  Image as ImageIcon,
} from "lucide-react";
import { UserContext } from "../components/UserContext";
import { BookingContext } from "../components/Bookings";

const Profile = () => {
  const { user, updateProfile } = useContext(UserContext);
  const { bookings, cancelBooking } = useContext(BookingContext);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState(user || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditOpen(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Please login to view profile.
      </div>
    );
  }

  // --- Date helpers ---
  const parseDate = (value) => {
    if (!value) return null;
    if (value instanceof Date) return value;

    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return new Date(value + "T00:00:00");
    }

    const m = value.match?.(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) return new Date(+m[3], +m[2] - 1, +m[1]);

    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const diffDays = (start, end) => {
    const s = parseDate(start);
    const e = parseDate(end);
    if (!s || !e) return null;

    const msPerDay = 1000 * 60 * 60 * 24;
    const raw = (e.getTime() - s.getTime()) / msPerDay;
    const days = Math.ceil(raw);
    return days > 0 ? days : 0;
  };

  const formatTime = (time) => {
    if (!time) return "";
    try {
      return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return time;
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Profile & Bookings
        </h1>

        {/* User Profile Info */}
        <div className="bg-white rounded-2xl border border-yellow-500 shadow-lg p-6 mb-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={user?.profileImage || "https://i.pravatar.cc/150"}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover shadow-md border-8 border-yellow-500"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 uppercase">
              <User className="w-6 h-6 text-yellow-500 " /> {user.name}
            </h2>
            <p className="text-gray-600 flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-500" /> {user.phone}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" /> {user.address}
            </p>
            <p className="text-gray-600 mt-2">Joined: {user.joined}</p>
          </div>

          <button
            onClick={() => {
              setFormData(user);
              setIsEditOpen(true);
            }}
            className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-200 transition"
          >
            <Edit className="w-5 h-5" /> Edit Profile
          </button>
        </div>

        {/* Bookings List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          My Bookings
        </h2>
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 border border-yellow-500"
            >
              {/* Car Image */}
              <div className="w-full md:w-1/3 rounded-xl">
                <img
                  src={booking.car.image}
                  alt={booking.car.name}
                  className="rounded-xl shadow-md border-8 border-yellow-500 object-center w-full h-52"
                />
              </div>

              {/* Booking Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="w-6 h-6 text-yellow-500" />
                    {booking.car.name}
                  </h2>
                  <p className="text-gray-600">Type: {booking.car.type}</p>
                  <p className="text-gray-600">Seats: {booking.car.seats}</p>
                  <p className="text-gray-600">Fuel: {booking.car.fuel}</p>
                  <p className="text-gray-600 font-semibold mt-2">
                    Price:{" "}
                    <span className="text-yellow-600 font-bold">
                      ${booking.car.price} / day
                    </span>
                  </p>
                  <p className="text-gray-600 font-semibold mt-2">
                    Total Price :{" "}
                    <span className="text-yellow-600 font-bold mt-2">
                      ${(() => {
                        const days = diffDays(
                          booking.pickupDate,
                          booking.returnDate
                        );
                        const price = Number(booking.car.price);
                        if (days === null || Number.isNaN(price))
                          return "Invalid Data";
                        return days * price;
                      })()}
                    </span>
                  </p>
                </div>

                {/* Booking Info */}
                <div className="mt-4 border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <p className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-500" />{" "}
                    {booking.pickupDate} → {booking.returnDate}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-5 h-5 text-gray-500" />{" "}
                    {formatTime(booking.pickupTime)} →{" "}
                    {formatTime(booking.returnTime)}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500" /> Pickup:{" "}
                    {booking.pickupLocation}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500" /> Drop-off:{" "}
                    {booking.dropoffLocation}
                  </p>
                </div>
              </div>

              {/* Cancel Button */}
              <div className="flex items-start">
                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="bg-red-100 text-red-600 p-3 rounded-md border-2 font-bold border-yellow-500 hover:bg-red-200 transition"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- Edit Modal -------------------- */}
      {isEditOpen && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Edit Profile
            </h2>

            {/* Edit Form */}
            <div className="space-y-4">
              {/* Profile Image Preview */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src={formData.profileImage || "https://i.pravatar.cc/150"}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 shadow"
                />
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage || ""}
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                placeholder="Address"
                className="w-full border p-2 rounded-lg"
              />

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
