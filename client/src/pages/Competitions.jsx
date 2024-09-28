import React, { useState } from "react";
import backgroundImage from "../../public/Kids.jpeg"; // Adjust the path as needed

const upcomingEventsData = [
  {
    id: 1,
    title: "PAINTING",
    description:
      "Unleash your inner artist! Join our painting competition and showcase your creativity. Use your imagination to bring your vision to life on canvas. Prizes will be awarded for the most captivating and original artwork.",
  },
  {
    id: 2,
    title: "SPORTS",
    description:
      "Get ready to compete! Join us for an exciting sports tournament and test your athletic skills. Compete against fellow participants in your favorite sport and have a chance to win trophies and medals. Let's foster a spirit of sportsmanship and camaraderie.",
  },
  {
    id: 3,
    title: "ESSAY WRITING",
    description:
      "Express your thoughts! Participate in our essay writing competition and share your unique perspective on a given topic. Impress the judges with your eloquence, creativity, and knowledge.",
  },
  {
    id: 4,
    title: "MUSIC COMPETITION",
    description:
      "A music competition where participants showcase their talent in singing, instrumental performance, and more. A stage for budding musicians!",
  },
  {
    id: 5,
    title: "PHOTOGRAPHY",
    description:
      "Photography competition for aspiring photographers to capture the best moments. Themes will be given, and the best click wins!",
  },
];

const finishedEventsData = [
  {
    id: 1,
    title: "PAINTING",
    description:
      "Unleash your inner artist! Join our painting competition and showcase your creativity. Use your imagination to bring your vision to life on canvas. Prizes will be awarded for the most captivating and original artwork.",
  },
  {
    id: 2,
    title: "SPORTS",
    description:
      "Get ready to compete! Join us for an exciting sports tournament and test your athletic skills. Compete against fellow participants in your favorite sport and have a chance to win trophies and medals. Let's foster a spirit of sportsmanship and camaraderie.",
  },
  {
    id: 3,
    title: "ESSAY WRITING",
    description:
      "Express your thoughts! Participate in our essay writing competition and share your unique perspective on a given topic. Impress the judges with your eloquence, creativity, and knowledge.",
  },
  {
    id: 4,
    title: "MUSIC COMPETITION",
    description:
      "A music competition where participants showcase their talent in singing, instrumental performance, and more. A stage for budding musicians!",
  },
  {
    id: 5,
    title: "PHOTOGRAPHY",
    description:
      "Photography competition for aspiring photographers to capture the best moments. Themes will be given, and the best click wins!",
  },
];

const Competitions = () => {
  const [currentUpcomingEvent, setCurrentUpcomingEvent] = useState(0);
  const [currentFinishedEvent, setCurrentFinishedEvent] = useState(0);

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">COMPETITIONS</h1>
      <div className="flex justify-center items-center mb-8">
        <hr className="w-1/4 border-t-2 border-black" />
        <span className="mx-4 text-2xl">✦</span>
        <hr className="w-1/4 border-t-2 border-black" />
      </div>

      {/* Upcoming Events Section */}
      <div className="flex justify-center items-center mb-8">
        <span className="text-2xl">✦</span>
        <h2 className="text-2xl font-semibold mx-4">UPCOMING EVENTS</h2>
        <span className="text-2xl">✦</span>
      </div>
      <div className="flex justify-center items-stretch mb-16">
        <div
          className="bg-black p-6 rounded-lg shadow-lg w-3/5 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2 text-left text-white">
              {upcomingEventsData[currentUpcomingEvent].title}
            </h3>
            <p className="text-sm mb-4 text-white text-left font-bold">
              {upcomingEventsData[currentUpcomingEvent].description}
            </p>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full self-end">
            REGISTER
          </button>
        </div>
        <div className="ml-4 flex items-center">
          <ul className="list-none bg-[#9D7800]/[0.42] p-1 rounded-full flex flex-col justify-between h-full">
            {upcomingEventsData.map((event, index) => (
              <li key={event.id} className="my-1">
                <button
                  onClick={() => setCurrentUpcomingEvent(index)} // Change event on click
                  className={`bg-green-200 text-center py-2 px-4 rounded-full w-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    currentUpcomingEvent === index ? "bg-green-400" : ""
                  }`}
                >
                  {event.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="flex justify-center items-center mb-8">
        <span className="text-2xl">✦</span>
        <h2 className="text-2xl font-semibold mx-4">PREVIOUS EVENTS</h2>
        <span className="text-2xl">✦</span>
      </div>
      <div className="flex justify-center items-stretch">
        <div className="mr-4 flex items-center">
          <ul className="list-none bg-[#9D7800]/[0.42] p-1 rounded-full flex flex-col justify-between h-full">
            {finishedEventsData.map((event) => (
              <li key={event.id} className="my-1">
                <button
                  onClick={() => setCurrentFinishedEvent(event.id - 1)} // Change event on click
                  className={`bg-green-200 text-center py-2 px-4 rounded-full w-full hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    currentFinishedEvent === event.id - 1 ? "bg-green-400" : ""
                  }`}
                >
                  {event.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="p-6 rounded-lg shadow-lg w-3/5 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        >
          <div>
            <h3 className="text-xl text-left font-bold mb-2 text-white">
              {finishedEventsData[currentFinishedEvent].title}
            </h3>
            <p className="text-md mb-4 text-left text-white font-bold">
              {finishedEventsData[currentFinishedEvent].description}
            </p>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full self-end">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
