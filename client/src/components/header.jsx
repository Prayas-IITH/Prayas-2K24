import { NavLink } from "react-router-dom";
import Header from "../assets/Header.png";
import activeBg from "../assets/ActivePage.png";

function Navbar() {
  const navItems = [
    { to: "/gallery", label: "GALLERY" },
    { to: "/competitions", label: "COMPETITIONS" },
    { to: "/team", label: "TEAM" },
    { to: "/announcements", label: "ANNOUNCEMENTS" },
    { to: "/donate", label: "DONATE" },
    { to: "/", label: "ABOUT" },
  ];

  return (
    <div className="flex flex-row justify-between px-4 mx-5 mb-5 rounded-lg text-gray-500 h-full">
      <div className="flex flex-row gap-4 lg:gap-8 items-center justify-start font-montserrat">
        {navItems.slice(0, 3).map((item) => (
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
                    width: "clamp(5rem, 8vw, 6.5rem)",
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
        className="flex flex-col items-center bg-cover bg-no-repeat justify-center text-center"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          height: "130px",
          width: "450px",
        }}
      >
        <p className="text-2xl lg:text-5xl font-semibold text-[#000000] font-sans">
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
                    width: "clamp(5rem, 8vw, 6.5rem)",
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
  );
}

export default Navbar;
