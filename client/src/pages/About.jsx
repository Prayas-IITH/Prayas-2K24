import React from "react";

const About = () => {
  return (
    <div className="font-montserrat">
      <div className="text-center py-10 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          A B O U T
        </h1>
        <div className="flex justify-center items-center mb-8">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-4 pb-8 ">
        <div className="flex flex-col lg:flex-row lg:bg-[#556B2F] items-center justify-center w-3/4 rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 rounded-l-2xl flex items-center m-2">
            <img
              src="/src/assets/Frame 27.png"
              alt="Prayas RDC Illustration"
              className="w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-[#556B2F] p-6 rounded-lg text-white m-2">
            <p className="text-md lg:text-2xl py-10">
              Prayas, a student-led initiative at IIT Hyderabad, is dedicated to
              empowering rural children from government schools and orphanages
              through education and mentorship. The club bridges educational
              gaps by providing academic support, essential resources, and
              personal guidance to help children achieve their dreams.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center p-4">
        <div className="flex flex-col lg:flex-row lg:bg-[#556B2F] items-center justify-center w-3/4 rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 bg-[#556B2F] p-6 rounded-lg text-white m-2 order-2 lg:order-1">
            <p className="text-lg lg:text-2xl py-10">
              Prayas fosters holistic development through activities like yoga
              sessions for physical and emotional well-being, as well as campus
              tours to inspire academic aspirations. By offering targeted
              teaching and competitive exam guidance, Prayas equips
              underprivileged children with the tools they need to pursue a
              brighter future and reach their full potential.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-[#556B2F] rounded-l-2xl flex items-center m-2 order-1 lg:order-2">
            <img
              src="../Events/1.jpg"
              alt="Prayas RDC Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
