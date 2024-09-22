import React, { useState } from "react";
import line from "../../public/line.png";
import GalleryCard from "../components/GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";

const Gallery = () => {
  const events = [
    {
      title: "School visit",
      data: [
        {
          image: "../../public/School_Visit_21_09.jpg",
          title: "School Visit at ZPHS KANDI",
          description:
            "We will conduct cleanliness awareness programs and few competitions on some topic and give few prizes. We spent the whole day over there and spent the time with them which helped them develop their skills in few things. We played few games with them which rejoiced them.",
        },
        {
          image: "../../public/School_Visit_21_09_1.jpg",
          title: "School Visit at ZPHS KANDI",
          description:
            "We will conduct cleanliness awareness programs and few competitions on some topic and give few prizes. We spent the whole day over there and spent the time with them which helped them develop their skills in few things. We played few games with them which rejoiced them.",
        },
        {
          image: "../../public/School_Visit_21_09_2.jpg",
          title: "School Visit at ZPHS KANDI",
          description:
            "We will conduct cleanliness awareness programs and few competitions on some topic and give few prizes. We spent the whole day over there and spent the time with them which helped them develop their skills in few things. We played few games with them which rejoiced them.",
        },
        {
          image: "../../public/School_Visit_21_09_3.jpg",
          title: "School Visit at ZPHS KANDI",
          description:
            "We will conduct cleanliness awareness programs and few competitions on some topic and give few prizes. We spent the whole day over there and spent the time with them which helped them develop their skills in few things. We played few games with them which rejoiced them.",
        },
      ],
    },
  ];

  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-screen mt-4 min-h-screen">
      <div className="text-3xl font-light tracking-widest w-full text-center font-montserrat mx-auto">
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
                <GalleryCard title={event.title} index={0} data={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ))}
    </div>
  );
};

export default Gallery;