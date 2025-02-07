import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Events/events.json");
        const data = await response.json();
        setEvents(data.finishedEvents);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen font-montserrat">
      <div className="text-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          EVENTS
        </h1>
        <div className="flex justify-center items-center mb-8">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full min-h-screen items-center text-white">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center mt-10 p-6"
          >
            <h1 className="text-lg lg:text-3xl flex justify-center mt-5 mx-5 text-[#EDCB5D]">
              {event.title} - {event.date}
            </h1>
            <p className="text-sm lg:text-xl text-center mt-4">
              {event.description}
            </p>
            {/* <div className="flex">
              {event.gallery && (
                <a
                  href={event.gallery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 m-4 px-8 py-2 bg-white text-[#556B2F] rounded-lg tracking-wider font-medium
                  transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
                >
                  Gallery
                </a>
              )}
              {event.schedule && (
                <a
                  href={event.schedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 m-4 px-8 py-2 bg-white text-[#556B2F] rounded-lg tracking-wider font-medium
                  transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
                >
                  Schedule
                </a>
              )}
              {event.more && (
                <a
                  href={event.more}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 m-4 px-8 py-2 bg-white text-[#556B2F] rounded-lg tracking-wider font-medium
                  transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
                >
                  More...
                </a>
              )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
