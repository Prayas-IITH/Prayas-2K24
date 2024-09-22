import image from "../../public/ribbon.png";

function AnnouncementsCard({ title, photo, date, time, venue }) {
  return (
    <div className="flex flex-col items-center scale-90">
      <div className="relative w-[25vw] h-[12vh]">
        <div className="absolute inset-0 bg-[#395B21] rounded-lg flex items-center justify-center">
          <span className="text-white text-2xl truncate font-bold">
            {title}
          </span>
        </div>
      </div>

      <div className="relative w-[20vw] h-40 p-4 bg-[#FFDF6D] flex items-center justify-center">
        <img src={photo} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="relative w-[25vw] p-4 bg-[#395B21] flex flex-col items-center justify-center rounded-2xl">
        <span className="text-white font-light">
          Date: <strong>{date}</strong>
        </span>
        <span className="text-white font-light">
          Time: <strong>{time}</strong>
        </span>
        <span className="text-white font-light">
          Venue: <strong>{venue}</strong>
        </span>
      </div>
    </div>
  );
}

export default AnnouncementsCard;
