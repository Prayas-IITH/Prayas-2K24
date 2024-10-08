import React, { useState } from "react";
import backgroundImage from "../../public/Kids.jpeg"; // Adjust the path as needed
import Drawing from "../../public/Events/20.jpg";
import Sport from "../../public/Events/4.jpg";
import Essay from "../../public/Events/7.jpg";
import Dance from "../../public/Events/3.jpg";
import ClayArt from "../../public/Events/8.jpg";

const upcomingEventsData = [
  {
    id: 1,
    title: "PAINTING",
    image: Drawing,
    description:
      "Unleash your inner artist! Join our painting competition and showcase your creativity. Use your imagination to bring your vision to life on canvas. Prizes will be awarded for the most captivating and original artwork.",
  },
  {
    id: 2,
    title: "SPORTS",
    image: Sport,
    description:
      "Get ready to compete! Join us for an exciting sports tournament and test your athletic skills. Compete against fellow participants in your favorite sport and have a chance to win trophies and medals. Let's foster a spirit of sportsmanship and camaraderie.",
  },
  {
    id: 3,
    title: "ESSAY WRITING",
    image: Essay,
    description:
      "Express your thoughts! Participate in our essay writing competition and share your unique perspective on a given topic. Impress the judges with your eloquence, creativity, and knowledge.",
  },
  {
    id: 4,
    title: "CULTURALS",
    image: Dance,
    description:
      "A cultural competition where participants showcase their talent in singing, instrumental performance, and more. A stage for budding enthusiasts!",
  },
  {
    id: 5,
    title: "CREATIVE ACTIVITIES",
    image: ClayArt,
    description:
      "Participate in our exciting creative activities competition and showcase your unique talents. Express your ideas through captivating stories, imaginative artwork, or innovative projects. Impress the judges with your originality, skill, and passion. Let your creativity soar!",
  },
];

const finishedEventsData = [
  {
    id: 1,
    title: "PAINTING",
    image: Drawing,
    description:
      "Unleash your inner artist! Join our painting competition and showcase your creativity. Use your imagination to bring your vision to life on canvas. Prizes will be awarded for the most captivating and original artwork.",
  },
  {
    id: 2,
    title: "SPORTS",
    image: Sport,
    description:
      "Get ready to compete! Join us for an exciting sports tournament and test your athletic skills. Compete against fellow participants in your favorite sport and have a chance to win trophies and medals. Let's foster a spirit of sportsmanship and camaraderie.",
  },
  {
    id: 3,
    title: "ESSAY WRITING",
    image: Essay,
    description:
      "Express your thoughts! Participate in our essay writing competition and share your unique perspective on a given topic. Impress the judges with your eloquence, creativity, and knowledge.",
  },
  {
    id: 4,
    title: "CULTURALS",
    image: Dance,
    description:
      "A cultural competition where participants showcase their talent in singing, instrumental performance, and more. A stage for budding enthusiasts!",
  },
  {
    id: 5,
    title: "CREATIVE ACTIVITIES",
    image: ClayArt,
    description:
      "Participate in our exciting creative activities competition and showcase your unique talents. Express your ideas through captivating stories, imaginative artwork, or innovative projects. Impress the judges with your originality, skill, and passion. Let your creativity soar!",
  },
];

const Competitions = () => {
  const [currentUpcomingEvent, setCurrentUpcomingEvent] = useState(0);
  const [currentFinishedEvent, setCurrentFinishedEvent] = useState(0);
  const handleRegisterClick = () => {
    // Open the form in a new tab
    window.open("https://forms.gle/FSywjD4ErG7bvyEp7", "_blank");
  };

  const [showDialog, setShowDialog] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="text-center py-10 font-montserrat">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-widest">
        C O M P E T I T I O N S
      </h1>
      <div className="flex justify-center items-center mb-8">
        <hr className="w-1/4 border-t-2 border-black" />
        <span className="mx-4 text-2xl">✦</span>
        <hr className="w-1/4 border-t-2 border-black" />
      </div>

      {/* Upcoming Events Section */}
      <div className="flex justify-center items-center mb-8">
        <span className="text-2xl">✦</span>
        <h2 className="text-2xl mx-4 tracking-widest">UPCOMING EVENTS</h2>
        <span className="text-2xl">✦</span>
      </div>
      <div className="flex justify-center items-stretch mb-16">
        <div
          className="p-6 rounded-lg shadow-lg w-3/5 lg:w-1/3 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${upcomingEventsData[currentUpcomingEvent].image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#787474",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-2 text-left text-white">
              {upcomingEventsData[currentUpcomingEvent].title}
            </h3>
            <p className="text-sm mb-4 text-white text-left font-bold">
              {upcomingEventsData[currentUpcomingEvent].description}
            </p>
          </div>
          <button
            onClick={handleRegisterClick}
            className="bg-green-500 text-white py-2 px-4 rounded-full self-end"
          >
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
        <h2 className="text-2xl mx-4 tracking-widest">PREVIOUS EVENTS</h2>
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
          className="p-6 rounded-lg shadow-lg w-3/5 lg:w-1/3 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${finishedEventsData[currentFinishedEvent].image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "#787474",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h3 className="text-3xl text-left font-bold mb-2 text-white">
              {finishedEventsData[currentFinishedEvent].title}
            </h3>
            <p className="text-md mb-4 text-left text-white font-bold">
              {finishedEventsData[currentFinishedEvent].description}
            </p>
          </div>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-full self-end"
            onClick={handleLearnMoreClick}
          >
            LEARN MORE
          </button>
          {showDialog && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  More About The Competition
                </h3>
                <p>{finishedEventsData[currentFinishedEvent].additionalInfo}</p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full"
                  onClick={handleDialogClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Competitions;
