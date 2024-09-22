import React, { useState } from "react";
import line from "../../public/line.png";
import GalleryCard from "../components/GalleryCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";

const Gallery = () => {
  const events = [
    {
      title: "Event 1",
      data: [
        {
          image: "../../public/Dummy.jpg",
          title: "Title 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      title: "Event 2",
      data: [
        {
          image: "../../public/Dummy.jpg",
          title: "Title 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          image: "../../public/Dummy.jpg",
          title: "Title 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi quis enim id risus tincidunt ultrices.Risus tincidunt ultrices.Tincidunt ultrices.Lipsum dolor sit amet, consectetur adipiscing elit.Ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
                <GalleryCard title={event.title} index={index} data={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ))}
    </div>
  );
};

export default Gallery;