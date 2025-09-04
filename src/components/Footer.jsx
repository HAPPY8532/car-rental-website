import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Car } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="flex flex-wrap justify-between gap-8">

        {/* Brand Section */}
        <div className="w-full md:w-1/3">
          <div class="flex items-center space-x-2">
                  
                  <Car className="w-14 h-14 text-yellow-400" />
          
                  
                  <span class="text-2xl font-bold text-blue-800">
                    Car<span class="text-yellow-400">Rental</span>
                  </span>
                </div>
            <p className="text-gray-400">
              Your trusted partner for affordable and reliable car rentals.
              Comfort, convenience, and safety on every ride.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-500 transition">Home</a>
              </li>
              <li>
                <a href="/vehicles" className="hover:text-yellow-500 transition">Cars</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400">📍 Meerut, India</p>
            <p className="text-gray-400">📞 +91 8744843056</p>
            <p className="text-gray-400">✉️ happytyagi5278@gmail.com</p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © 2025 || CarRental. All Rights Reserved.|| By Happy Kumar
        </div>
    </footer>
  );
}

export default Footer;
