import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../data/data";

function Details() {
  const { id } = useParams(); // URL se id le rahe hai
  const car = cars.find((c) => c.id === parseInt(id)); // cars data me search

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Car not found 🚗
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {car.name} <span className="text-yellow-500">Details</span>
        </h1>
      </div>

      {/* Main Details */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Image */}
        <div className="flex-1 h-[70vh]">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Info */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
          <p className="text-gray-600 mb-2">Type: {car.type}</p>
          <p className="text-gray-600 mb-2">Seats: {car.seats}</p>
          <p className="text-gray-600 mb-2">Fuel: {car.fuel}</p>
          <p className="text-gray-600 mb-2">Transmission: {car.transmission}</p>
          <p className="text-gray-600 mb-2">Year: {car.year}</p>
          <p className="text-gray-600 mb-2">Rating: {car.rating}</p>
          <p className="text-gray-600 mb-2">Availability: {car.availability}</p>
          <p className="text-gray-600 mb-2">Mileage: {car.mileage}</p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold text-yellow-600">${car.price}</span> / day
          </p>
          <Link to={`/booking/${car.id}`}>
          <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Book Now
          </button>
          </Link>
        </div>
      </div>

      {/* Related Cars */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">You may also like</h3>
        <div className="flex flex-wrap gap-6">
          {cars
            .filter((c) => c.id !== car.id) // current car ko remove
            .slice(0, 4) // sirf 3 cars dikhani
            .map((related) => (
              <div
                key={related.id}
                className="w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">{related.name}</h4>
                  <p className="text-sm text-gray-500">{related.type}</p>
                  <Link
                    to={`/details/${related.id}`}
                    className="block mt-2 text-center bg-yellow-500 text-black py-1.5 rounded-lg font-semibold hover:bg-yellow-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
