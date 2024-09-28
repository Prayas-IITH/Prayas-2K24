import React from "react";

const About = () => {
  return (
    <div className="text-center py-10 ">
      <h1 className="text-4xl font-bold mb-4">ABOUT</h1>
      <div className="flex justify-center items-center mb-8">
        <hr className="w-1/4 border-t-2 border-black" />
        <span className="mx-4 text-2xl">✦</span>
        <hr className="w-1/4 border-t-2 border-black" />
      </div>
    </div>
  );
};

const PrayasInfo = () => {
  return (
    <>
      <div className="flex justify-center items-center p-4 pb-8 ">
        <div className="flex max-w-4xl w-full rounded-lg overflow-hidden">
          <div className="w-1/2 bg-[#556B2F] rounded-l-2xl">
            <img
              src="../../public/Frame 27.png"
              alt="Prayas RDC Illustration"
              className="w-full"
            />
          </div>
          <div className="w-1/2 bg-[#556B2F] p-6 text-white">
            <p className="text-xl font-bold py-10">
              Prayas, a student-led initiative at IIT Hyderabad, is dedicated to
              empowering rural children from government schools and orphanages
              through education and mentorship. The club bridges educational
              gaps by providing academic support, essential resources, and
              personal guidance to help children achieve their dreams.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <div className="flex max-w-4xl w-full rounded-lg overflow-hidden">
          <div className="w-1/2 bg-[#556B2F] p-6  text-white">
            <p className="text-xl font-bold py-10">
              Prayas fosters holistic development through activities like yoga
              sessions for physical and emotional well-being, as well as campus
              tours to inspire academic aspirations. By offering targeted
              teaching and competitive exam guidance, Prayas equips
              underprivileged children with the tools they need to pursue a
              brighter future and reach their full potential.
            </p>
          </div>
          <div className="w-1/2 bg-[#556B2F] rounded-r-2xl">
            <img
              src="../../public/Frame 27.png"
              alt="Prayas RDC Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <About />
      <PrayasInfo />
    </div>
  );
};

export default Home;
