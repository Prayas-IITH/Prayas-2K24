import React, { useEffect, useState } from "react";
import line from "../../public/line.png";
import GalleryCard from "../components/GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import axios from "axios";

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
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
            description: row[4],
            data: row[5]
              ? row[5].split(" ").map((imageLink) => {
                  const fileId = imageLink.match(/\/d\/(.+?)\//)?.[1];
                  return {
                    image: fileId
                      ? `https://drive.google.com/uc?export=view&id=${fileId}`
                      : "",
                    title: row[0],
                  };
                })
              : [],
          }));

          setEvents(formattedEvents);
        }
      } catch (error) {
        console.error("Error fetching data from Google Sheets", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen mt-4 min-h-screen">
      <div className="text-4xl font-light tracking-widest w-full text-center font-montserrat mx-auto">
        G A L L E R Y
      </div>
      <img src={line} alt="line" className="mx-auto w-fit scale-x-[0.6] my-8" />
      {events.map((event, eventIndex) => (
        <div key={eventIndex} className="w-screen mx-auto relative mb-8">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              gap: 16,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1,
              },
              align: "center",
              arrows: false,
            }}
            onMoved={(newIndex) => setActiveEventIndex(newIndex)}
          >
            {event.data.map((item, index) => (
              <SplideSlide key={index}>
                <GalleryCard
                  title={event.title}
                  description={event.description}
                  index={eventIndex}
                  data={item}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
