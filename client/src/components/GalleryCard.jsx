import Orphanage from "../assets/Events/10.jpg";

function GalleryCard({ title, description, image, index }) {
  // console.log(data.image);
  // console.log(image);
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4">
      <div className="text-2xl font-light tracking-widest w-full text-center m-4 font-montserrat mx-auto">
        {title.toUpperCase()}
      </div>

      <div
        className={`flex flex-col md:flex-row w-full mx-auto rounded-2xl h-auto md:h-[50vh] ${
          index % 2 === 0 ? "bg-[#EDCB5D]" : "bg-[#E5DD57]"
        }`}
      >
        <div className="w-full md:w-3/5 h-auto flex scale-75 md:scale-90 lg:scale-100 justify-center p-2 items-center">
          <img
            src={image}
            // alt={title}
            className="max-h-80 w-auto md:m-4 rounded-2xl object-contain"
          />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/5 justify-start p-4 overflow-hidden">
          <div className="text-xl md:text-2xl lg:text-2xl font-light font-montserrat mb-2">
            {title}
          </div>

          <div className="text-lg text-gray-700 font-light overflow-auto">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
