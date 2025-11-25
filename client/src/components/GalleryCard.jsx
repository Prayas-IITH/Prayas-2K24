function GalleryCard({ title, description, image, index }) {
  return (
    <div className="flex flex-col w-full max-w-[1000px] mx-auto px-4 font-montserrat">
      <div className="text-2xl font-light tracking-widest w-full text-center m-4 mx-auto">
        {title.toUpperCase()}
      </div>

      <div
        className={`flex flex-col md:flex-row w-full mx-auto rounded-2xl h-auto md:h-[45vh] shadow-lg border border-8 border-[#556B2F] ${
          index % 2 === 0 ? "bg-[#EDCB5D]" : "bg-[#E5DD57]"
        }`}
      >
        {/* IMAGE */}
        <div className="w-full md:w-3/5 h-full flex justify-center items-center p-2">
          <img
            src={image}
            className="h-[220px] md:h-[300px] w-auto rounded-2xl object-contain"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col w-full md:w-2/5 p-4 overflow-hidden">
          <div className="text-xl md:text-2xl lg:text-2xl font-montserrat mb-2">
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
