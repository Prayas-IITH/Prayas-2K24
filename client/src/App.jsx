import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/Home";
import Announcements from "./pages/Announcements";
import Competitions from "./pages/Competitions";
import Gallery from "./pages/Gallery";
import Team1 from "./pages/Team1";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/header";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="select-none app flex flex-col bg-[#FFF5D4] min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center flex-grow">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team1 />} />
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
