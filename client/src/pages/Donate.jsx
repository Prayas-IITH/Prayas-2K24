function Donate() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-8 py-16 bg-gray-50">
      {/* Outer yellow box */}
      <div className="relative w-full max-w-lg h-1/2 bg-[#ffdf6d] rounded-[20px] 
                      sm:max-w-sm sm:h-[300px] 
                      md:max-w-md md:h-[450px] 
                      lg:max-w-lg lg:h-[800px]">
        {/* Inner gray box */}
        <div className="absolute inset-3 bg-[#f2f2f2] rounded-[20px] 
                        sm:inset-4 
                        md:inset-5 
                        lg:inset-6" />
          
                        
      </div>

      {/* 'OR' section */}
      <div className="relative flex items-center justify-center w-full max-w-xs my-6 bg-[#bdd04fb8] rounded-[37px] 
                      sm:max-w-[80px] sm:h-[40px] 
                      md:max-w-[84px] md:h-[41px] 
                      lg:max-w-[84px] lg:h-[41px]">
        <span className="[font-family:'Montserrat-ExtraBold',Helvetica] font-extrabold text-black text-xl tracking-[4.20px] 
                         sm:text-sm 
                         md:text-base 
                         lg:text-xl">OR</span>
      </div>

      {/* Donate button */}
      <div className="relative flex items-center justify-center w-full max-w-lg h-20 bg-[#273f17] rounded-full 
                      sm:max-w-sm sm:h-16 
                      md:max-w-md md:h-18 
                      lg:max-w-lg lg:h-20">
        <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-2xl tracking-[4.32px] 
                         sm:text-lg 
                         md:text-xl 
                         lg:text-2xl">
          DONATE ITEMS
        </span>
      </div>

      {/* Description */}
      <p className="relative mt-4 text-center text-black text-sm tracking-[1.26px] 
                 sm:text-xs 
                 md:text-sm 
                 lg:text-base">
        YOU CAN DONATE US ITEMS LIKE BOOKS, CLOTHES, ETC
      </p>
    </div>
  );
}

export default Donate;

