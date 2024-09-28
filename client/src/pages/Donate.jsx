import DividerImage from "/team/divider.png";

function Donate() {
  const handleDonateClick = () => {
    // Open the form in a new tab
    window.open("https://forms.gle/6UDi23hLfhh4a3z78", "_blank");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-4/5 w-full my-5 z-10 tracking-widest text-2xl sm:text-3xl lg:text-3xl">
        D O N A T E
      </div>

      {/* Divider Image */}
      <div className="flex items-center justify-center mb-10">
        <img src={DividerImage} alt="Divider" className="w-auto h-8 md:h-8" />
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen px-8 py-16 bg-gray-50 font-montserrat">
        {/* Outer yellow box */}
        <div
          className="relative w-full max-w-lg h-1/2 bg-[#ffdf6d] rounded-[20px]
                        sm:max-w-sm sm:h-[300px]
                        md:max-w-md md:h-[450px]
                        lg:max-w-lg lg:h-[800px]"
        >
          {/* Inner gray box */}
          <div
            className="absolute inset-3 bg-[#f2f2f2] rounded-[20px] flex items-center justify-center text-xl font-bold
                          sm:inset-4
                          md:inset-5
                          lg:inset-6"
          >
            QR Code
          </div>
        </div>
        {/* 'OR' section */}
        <div
          className="relative flex items-center justify-center w-full max-w-xs my-6 bg-[#bdd04fb8] rounded-[37px]
                        sm:max-w-[80px] sm:h-[40px]
                        md:max-w-[84px] md:h-[41px]
                        lg:max-w-[84px] lg:h-[41px]"
        >
          <span
            className="[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-black text-xl tracking-[4.20px]
                           sm:text-sm
                           md:text-base
                           lg:text-xl"
          >
            OR
          </span>
        </div>
        {/* Donate button */}
        <div
          className="relative flex items-center justify-center w-full max-w-lg h-20 hover:bg-opacity-50 bg-[#273f17] hover:text-black hover:font-bold text-white rounded-full
                        sm:max-w-sm sm:h-16
                        md:max-w-md md:h-18
                        lg:max-w-lg lg:h-20"
        >
          <span
            className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-2xl tracking-[4.32px]
                           sm:text-lg
                           md:text-xl
                           lg:text-2xl"
          >
            <button
              onClick={handleDonateClick}
              className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-2xl tracking-[4.32px]
                           sm:text-lg
                           md:text-xl
                           lg:text-2xl"
            >
              DONATE ITEMS
            </button>
          </span>
        </div>
        {/* Description */}
        <p
          className="relative mt-4 text-center text-black text-sm tracking-[1.26px]
                   sm:text-xs
                   md:text-sm
                   lg:text-base"
        >
          YOU CAN DONATE US ITEMS LIKE BOOKS, CLOTHES, ETC
        </p>
      </div>
    </div>
  );
}

export default Donate;
