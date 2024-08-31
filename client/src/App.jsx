import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/Home";
import Announcements from "./pages/Announcements";
import Competitions from "./pages/Competitions";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/header";
import "./index.css";

function App() {
  const location = useLocation();

  return (
    <div className="select-none flex flex-col bg-[#120c09]">
      <Navbar />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<About />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
