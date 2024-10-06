import React, { useEffect, useState } from "react";
import axios from "axios";
import AnnouncementsCard from "../components/AnnouncementCard";
import line from "../../public/line.png";

function Announcements() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const sheetId = import.meta.env.VITE_SHEETS_ID;
    const apiKey = import.meta.env.VITE_API_KEY;
    const range = import.meta.env.VITE_RANGE;

    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
      );
      const rows = response.data.values;

      if (rows.length) {
        const formattedEvents = rows.slice(1).map((row) => ({
          title: row[0],
          date: row[1],
          time: row[2],
          venue: row[3],
          photo: row[5],
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error fetching data from Google Sheets", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-xl sm:text-3xl lg:text-4xl font-light tracking-widest w-full text-center mb-4 font-montserrat">
        A N N O U N C E M E N T S
      </div>
      <img
        src={line}
        alt="line"
        className="mx-auto w-fit lg:scale-x-[0.6] mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {events.map((item, index) => (
          <AnnouncementsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
