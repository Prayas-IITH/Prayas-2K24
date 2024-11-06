import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementsCard from "../components/AnnouncementCard";
import line from "../assets/line.png";
import eventData from "../../public/Events/eventData.json";

function Announcements() {
  const [events, setEvents] = useState([
    {
      title: "School visit",
      date: "9/21/2024",
      time: "10:00:00 AM",
      venue: "Kandi",
      description: "Cleanliness, competitions",
      image: ["/Events/10.jpg"],
    },
    {
      title: "Visit to Orphanage",
      date: "9/15/2024",
      time: "10:00:00 AM",
      venue: "Mahima Ministries",
      image: ["/Events/7.jpg"],
    },
    {
      title: "Prerna",
      date: "12/17/2024",
      time: "10:00:00 AM",
      venue: "IITH",
      image: ["/Events/7.jpg"],
    },
  ]);

  // useEffect(() => {
  //   // Set the events from the imported JSON file
  //   setEvents(eventData.events);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-xl sm:text-3xl md:text-3xl lg:text-5xl font-light tracking-widest w-full text-center mb-4 font-montserrat">
        A N N O U N C E M E N T S
      </div>
      <img src={line} alt="line" className="mx-auto w-fit mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {events.map((item, index) => (
          <AnnouncementsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
