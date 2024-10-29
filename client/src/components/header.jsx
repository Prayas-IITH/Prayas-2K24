import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../assets/Header.png";
import activeBg from "../assets/ActivePage.png";
import Logo from "../assets/Logo.png"; // Import your logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/about", label: "ABOUT" },
    { to: "/events", label: "EVENTS" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/announcements", label: "ANNOUNCEMENTS" },
    { to: "/team", label: "TEAM" },
    { to: "/contact", label: "HOW TO INVOLVE" },
    { to: "/donate", label: "DONATE" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between px-4 mx-5 mb-5 rounded-lg text-gray-500 h-full">
      {/* Hamburger Button for Mobile */}
      <div className="lg:hidden flex justify-between items-center w-full mt-5">
        <div className="flex items-center justify-center text-center">
          {/* Display logo and "PRAYAS" on mobile */}
          <img
            src={Logo}
            alt="Logo"
            className="w-8 h-8 mr-2" // Adjust the size of the logo
          />
          <p className="text-2xl font-semibold text-[#000000] font-sans tracking-widest">
            PRAYAS
          </p>
        </div>
        <button
          className="text-gray-500 focus:outline-none focus:text-yellow-400"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Fullscreen Dropdown Overlay */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 bg-[#f1ca57] z-50 flex-col items-center justify-center`}
      >
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={toggleMenu}
        >
          &times; {/* Close Icon */}
        </button>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `my-5 px-4 py-2 transition-all duration-300 ${
                isActive
                  ? "bg-no-repeat bg-center bg-contain text-white scale-110 text-xl font-semibold"
                  : "text-gray-700 hover:text-gray-300 text-2xl"
              }`
            }
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundImage: `url(${activeBg})`,
                    width: "clamp(13rem, 15vw, 16rem)",
                    height: "clamp(3rem, 5vw, 4rem)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {}
            }
            onClick={toggleMenu} // Close menu when an item is clicked
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Nav Items for Desktop */}
      <div className="hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-center lg:justify-between w-full font-montserrat">
        <div className="flex flex-row gap-4 lg:gap-8 items-center justify-start font-montserrat">
          {navItems.slice(0, 3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm px-1 transition-all duration-300 rounded ${
                  isActive
                    ? "bg-no-repeat bg-center bg-contain scale-x-125 text-white scale-105"
                    : "hover:text-yellow-400 scale-100"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage: `url(${activeBg})`,
                      width: "clamp(5rem, 15vw, 8rem)",
                      height: "clamp(2rem, 3vw, 2.5rem)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div
          className="hidden lg:flex flex-col items-center bg-cover bg-no-repeat justify-center text-center font-montserrat"
          style={{
            backgroundImage: `url(${Header})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            height: "130px",
            width: "450px",
          }}
        >
          <p className="text-2xl lg:text-5xl font-semibold text-[#000000] font-sans tracking-widest">
            PRAYAS
          </p>
          <p className="text-lg lg:text-2xl tracking-[.8em] mt-2 mb-5 text-[#000000] font-sans">
            IITH
          </p>
        </div>

        <div className="flex flex-row gap-4 lg:gap-8 items-center font-montserrat justify-end">
          {navItems.slice(3).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm px-1 transition-all duration-300 rounded ${
                  isActive
                    ? "bg-no-repeat bg-center bg-contain text-white scale-105"
                    : "hover:text-yellow-400 scale-100"
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      backgroundImage: `url(${activeBg})`,
                      width: "clamp(5rem, 15vw, 10rem)",
                      height: "clamp(2rem, 3vw, 2.5rem)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
