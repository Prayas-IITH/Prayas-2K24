import AnnouncementsCard from "../components/AnnouncementCard";
import dummy from "../../public/Dummy.jpg";
import line from "../../public/line.png";

function Announcements() {
  const data = [
    {
      title: "School visit",
      photo: "../../public/School_Visit_21_09.jpg",
      date: "9/21/2024",
      time: "10:00:00 AM",
      venue: "Kandi",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="text-3xl font-light tracking-widest w-full text-center mb-4 font-montserrat">
        A N N O U N C E M E N T S
      </div>
      <img src={line} alt="line" className="mx-auto w-fit scale-x-[0.6] mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {data.map((item, index) => (
          <AnnouncementsCard
            key={index}
            title={item.title}
            photo={item.photo}
            date={item.date}
            time={item.time}
            venue={item.venue}
          />
        ))}
      </div>
    </div>
  );
}

export default Announcements;