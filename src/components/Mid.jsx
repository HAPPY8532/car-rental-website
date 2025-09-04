import React from "react";

function Mid() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Top Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-yellow-500">Availability</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Cars ready whenever you are. 24/7 booking at your fingertips.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-yellow-500">Comfort</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Choose from premium and budget cars with top comfort features.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-yellow-500">Saving</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Get the best deals and discounts, saving you more on every ride.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/736x/b7/48/5d/b7485d852784751cd0786ab1105627d4.jpg"
            alt="Car rental"
            className="w-[60%] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Points */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-yellow-500">Us?</span>
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-yellow-500 text-xl font-bold mr-3">✔</span>
              Wide range of cars from economy to luxury.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-xl font-bold mr-3">✔</span>
              Easy online booking & instant confirmation.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-xl font-bold mr-3">✔</span>
              Affordable daily, weekly & monthly rental plans.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 text-xl font-bold mr-3">✔</span>
              24/7 customer support & roadside assistance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Mid;
