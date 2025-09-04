import React from "react";

const feedbacks = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    comment:
      "Amazing service! Booking a car was super easy and the vehicle was in perfect condition. Highly recommend.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Marketing Manager",
    comment:
      "Affordable prices and excellent customer support. My road trip became more enjoyable because of their service.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Entrepreneur",
    comment:
      "Wide range of cars available. The booking process was smooth and hassle-free.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Feedback() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our <span className="text-yellow-500">Customers Say</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from our happy customers 🚗
        </p>
      </div>

      {/* Feedback Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className="w-[320px] bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={f.img}
              alt={f.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-yellow-400"
            />
            <p className="text-gray-700 italic mb-4">“{f.comment}”</p>
            <h3 className="text-lg font-semibold text-gray-900">{f.name}</h3>
            <span className="text-sm text-gray-500">{f.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
