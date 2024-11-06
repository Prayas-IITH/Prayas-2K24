import React, { useEffect, useState } from "react";
import line from "../assets/line.png";
import GalleryCard from "../components/GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";
import axios from "axios";
// import Orphanage from "../assets/Events/10.jpg";
import eventData from "../../public/Events/eventData.json";

const Gallery = () => {
  // const [events, setEvents] = useState([]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-full mt-4 lg:min-h-screen">
      <div className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-light tracking-widest w-full text-center font-montserrat mx-auto">
        G A L L E R Y
      </div>
      <img
        src={line}
        alt="line"
        className="mx-auto w-fit lg:scale-x-[0.6] my-8"
      />
      {eventData.events.map((event, eventIndex) => (
        <div key={eventIndex} className="w-full mx-auto relative mb-8">
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
            {event.images.map((image, index) => (
              <SplideSlide key={index}>
                <GalleryCard
                  title={event.title}
                  description={event.description}
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
