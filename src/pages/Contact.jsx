import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-yellow-500 text-black py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact <span className="text-white text-4xl">Us</span></h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions or need help? We’re here to assist you with bookings,
          inquiries, or support. Reach out today!
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Booking inquiry, Support, Feedback..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We’re always ready to help you with your travel needs. Contact us via
            phone, email, or visit our office.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-600">123 Main Street, Delhi, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p className="text-gray-600">support@carrental.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🕒 Office Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.2205104666!2d77.06889935!3d28.52728035!2m3!1f0!2f0!3f0!3m2!
          1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d5b82d7b5%3A0x50a8a941a6e4f9c0!2sDelhi!5e0!3m2!1sen!2sin!4v1693472038489!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Support and Assistance */}
      <div className="bg-yellow-500 text-black py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
        <p className="max-w-xl mx-auto mb-6">
          Our support team is available 24/7 to answer your queries and help with
          bookings.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Call Now
        </button>
      </div>
    </section>
  );
}

export default Contact;
