import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementsCard from "../components/AnnouncementCard";
import line from "../assets/line.png";
// import eventData from "../../public/Events/gallery.json";

function Announcements() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Events/events.json");
        const data = await response.json();
        setEvents(data.upcomingEvents);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Set the events from the imported JSON file
  //   setEvents(eventData.events);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen p-4 font-montserrat">
      <div className="text-xl sm:text-3xl md:text-3xl lg:text-5xl tracking-widest w-full text-center mb-4">
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
