import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
// import Competitions from "./pages/Competitions";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/header";
import "./index.css";
import Footer from "./components/Footer1";

function App() {
  const location = useLocation();

  return (
    <div className="select-none flex flex-col bg-[#FFFDF5] min-h-screen">
      <Navbar />
      <div
        className="flex flex-col items-center flex-grow bg-[#FFFDF5] bg-repeat bg-top"
        style={{
          backgroundImage: `url('/public/Bg2.png')`,
          // backgroundSize: "cover",
          // backgroundRepeat: "repeat",
          // backgroundBlendMode: "overlay",
        }}
      >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div className="scale-75 md:scale-90 lg:scale-100">
        <Footer />
      </div>
    </div>
  );
}

export default App;
