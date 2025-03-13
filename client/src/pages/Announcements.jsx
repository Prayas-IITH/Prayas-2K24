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
      <div className="text-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          A N N O U N C E M E N T S
        </h1>
        <div className="flex justify-center items-center mb-8 w-full">
          <hr className="w-3/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-3/4 border-t-2 border-black" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {events.map((item, index) => (
          <AnnouncementsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
