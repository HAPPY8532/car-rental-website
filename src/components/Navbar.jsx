import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { Car } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative group transition ${isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
    }`;

  return (
    <header className="w-full h-[10vh] flex justify-between items-center px-8 bg-gray-900 text-white shadow-[0_8px_10px_-5px_white] relative">
      <div class="flex items-center space-x-2">  
        <Car className="w-14 h-14 text-yellow-400" />
        <span class="text-2xl font-bold text-blue-800">
          Car<span class="text-yellow-400">Rental</span>
        </span>
      </div>


      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 text-lg font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/vehicles", label: "Vehicles" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact Us" },
            { path: "/profile", label: "Profile" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClasses} end>
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-[-4px] h-[2px] bg-yellow-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right - Help Section */}
      <div className="hidden md:flex items-center gap-3 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition">
        <div className="w-10 h-10 rounded-full bg-black text-yellow-400 flex items-center justify-center text-xl">
          ☎
        </div>
        <div>
          <h3 className="text-xs font-semibold">Need Help?</h3>
          <p className="text-sm font-bold">8744843056</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute top-[10vh] z-40 left-0 w-full bg-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
          {[
            { path: "/", label: "Home" },
            { path: "/vehicles", label: "Vehicles" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact Us" },
            { path: "/profile", label: "Profile" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
              end
            >
              {link.label}
            </NavLink>
          ))}

          {/* Help Section Mobile */}
          <div className="flex items-center gap-3 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg">
            <div className="w-10 h-10 rounded-full bg-black text-yellow-400 flex items-center justify-center text-xl">
              ☎
            </div>
            <div>
              <h3 className="text-xs font-semibold">Need Help?</h3>
              <p className="text-sm font-bold">8744843056</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
