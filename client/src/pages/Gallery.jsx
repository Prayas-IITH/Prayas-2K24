import React, { useEffect, useState } from "react";
import line from "../assets/line.png";
import GalleryCard from "../components/GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import axios from "axios";
// import Orphanage from "../assets/Events/10.jpg";
import eventData from "../../public/Events/gallery.json";

const Gallery = () => {
  // const [events, setEvents] = useState([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-full mt-4 lg:min-h-screen font-montserrat">
      <div className="text-center py-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          G A L L E R Y
        </h1>
        <div className="flex justify-center items-center mb-8">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>
      {eventData.events.map((event, eventIndex) => (
        <div key={eventIndex} className="w-full lg:w-3/4 mx-auto relative mb-8">
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
              arrows: true,
            }}
            onMoved={(newIndex) => setActiveEventIndex(newIndex)}
          >
            {event.images.map((image, index) => (
              <SplideSlide key={index}>
                <GalleryCard
                  title={event.title}
                  description={event.descriptions[index]}
                  index={eventIndex}
                  image={image}
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
