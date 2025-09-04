import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/data";

function Vehicles() {
  const [searchName, setSearchName] = useState("")
  const [fuelFilter, setFuelFilter] = useState("All")
  const [Transmition, setTransmition] = useState("All")
  const [seatsFilter, setSeatsFilter] = useState("All")

  const filterCars = cars.filter((car) => {
    const matchesName = car.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesFuel = fuelFilter === "All" || car.fuel === fuelFilter;
    const matchesTransmition = Transmition === "All" || car.transmission === Transmition;
    const matchesSeats = seatsFilter === "All" || car.seats.toString() === seatsFilter;

    return matchesName && matchesFuel && matchesTransmition && matchesSeats;
  })

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="flex flex-wrap justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Our <span className="text-yellow-500">Vehicles</span>
        </h1>
        <input type="text"
          placeholder="search here"
          className="px-4 py-2 border rounded-lg mb-4 md:mb-0"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        <select className="px-4 py-2 border rounded-lg" value={fuelFilter} onChange={(e) => setFuelFilter(e.target.value)}>
          <option value="All">All Fule</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
        <select className="px-4 py-2 border rounded-lg" value={Transmition} onChange={(e) => setTransmition(e.target.value)}>
          <option value="All">All Transmissions</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <select
          className="px-4 py-2 border rounded-lg"
          value={seatsFilter}
          onChange={(e) => setSeatsFilter(e.target.value)}
        >
          <option value="All">All Seats</option>
          <option value="4">4 Seats</option>
          <option value="5">5 Seats</option>
          <option value="7">7 Seats</option>
        </select>
      </div>

      {/* Car Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filterCars.length > 0 ? (
        filterCars.map((car) => (
          <div
            key={car.id}
            className="w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Car Image */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-44 object-cover"
            />

            {/* Car Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{car.name}</h2>
              <p className="text-sm text-gray-500">
                {car.type} • {car.seats} Seats
              </p>
              <p className="text-yellow-600 font-semibold mt-2">
                ${car.price} / day
              </p>

              {/* Book Button */}
              <Link
                to={`/details/${car.id}`}
                className="mt-3 block text-center bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))) : (
          <p> no cars found</p>
      )}
      </div>
    </section>
  );
}

export default Vehicles;
