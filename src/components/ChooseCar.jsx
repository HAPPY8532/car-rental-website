import React from "react";
import { cars } from "../data/data"; 
import { Link } from "react-router-dom";

function ChooseCar() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
      {/* Heading + Button */}
      <div className="flex items-center justify-between mb-12 fade-in-up">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose <span className="text-yellow-500">Your Car</span>
          </h2>
          <p className="text-gray-600 mt-1">
            Select the perfect car for your trip
          </p>
        </div>
        <Link to="/vehicles">
          <button className="px-5 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition btn-animate">
            View All Cars
          </button>
        </Link>
      </div>

      {/* Cars List */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cars.slice(0, 6).map((car, index) => (
          <div
            key={car.id}
            className={`w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col fade-in-up delay-${index}`}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />

            {/* Car Info */}
            <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.type}</p>

            <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-600">
              <p>
                🚗 Seats: <span className="font-semibold">{car.seats}</span>
              </p>
              <p>
                ⛽ Fuel: <span className="font-semibold">{car.fuel}</span>
              </p>
              <p>
                ⚙️ Transmission:{" "}
                <span className="font-semibold">{car.transmission || "Manual"}</span>
              </p>
              <p>
                ⭐ Rating: <span className="font-semibold">{car.rating || "4.5"}</span>
              </p>
            </div>

            <p className="text-yellow-600 font-bold text-lg mt-3">
              ${car.price}/day
            </p>

            <Link to={`/booking/${car.id}`}>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-2 rounded-lg transition btn-animate">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChooseCar;
