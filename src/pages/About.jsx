import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-500 text-black py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About <span className="text-white">Car Rental</span></h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are committed to making your journeys smoother, safer, and more affordable.
          With a wide range of vehicles and exceptional customer service, your travel 
          experience is in safe hands.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide reliable, affordable, and comfortable car rental services 
            tailored to meet the unique needs of every customer. We believe 
            in hassle-free bookings, transparent pricing, and delivering cars 
            that you can trust for every journey.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the most trusted and innovative car rental brand, redefining 
            travel convenience by continuously upgrading our fleet, adopting 
            the latest technologies, and keeping customer satisfaction 
            at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Wide Fleet Selection</h3>
            <p className="text-gray-600">
              From compact cars to luxury SUVs, we have a vehicle for every 
              journey and budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
            <p className="text-gray-600">
              Transparent and competitive rates with no hidden costs. 
              What you see is what you pay.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is always ready to assist you 
              wherever and whenever you need.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-xl shadow w-[260px] text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="team"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Rahul Sharma</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-xl shadow w-[260px] text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="team"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Neha Verma</h3>
            <p className="text-sm text-gray-500">Marketing Head</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-xl shadow w-[260px] text-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="team"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Amit Singh</h3>
            <p className="text-sm text-gray-500">Operations Manager</p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-yellow-500 text-black py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Ride?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Book your dream car today and experience comfort, convenience, 
          and affordability like never before.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default About;
