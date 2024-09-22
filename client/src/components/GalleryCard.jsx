function GalleryCard({ title, data, index }) {
  return (
    <div className="flex flex-col w-screen">
      <div className="text-2xl font-light tracking-widest w-full text-center m-4 font-montserrat mx-auto">
        {title.toUpperCase()}
      </div>

      <div
        className={`w-[60vw] flex mx-auto rounded-2xl h-[50vh] ${
          index % 2 === 0 ? "bg-[#EDCB5D]" : "bg-[#E5DD57]"
        }`}
      >
        <div className="w-3/5 h-full flex justify-start items-center">
          <img
            src={data.image}
            alt={title}
            className="max-h-80 m-4 rounded-2xl object-contain"
          />
        </div>

          <div className="flex flex-col w-2/5 justify-start p-4 overflow-hidden">
          <div className="text-2xl font-light font-montserrat mb-2">
            {data.title}
          </div>

          <div className="text-md text-gray-700 font-light overflow-auto">
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;