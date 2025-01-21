import React from "react";
import axios from "axios";

const Events = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="text-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest font-extralight">
          EVENTS
        </h1>
        <div className="flex justify-center items-center mb-8">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full min-h-screen items-center text-white">
        <div className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center mt-10">
          <h1 className="text-lg lg:text-3xl flex justify-center mt-5 mx-5">
            PRERNA
          </h1>
          <div className="flex flex-col items-center justify-center p-4 my-2 lg:w-3/4 text-md lg:text-xl">
            <p>
              We invite school students to join us for an exciting and
              educational event at the Indian Institute of Technology Hyderabad
              (IITH) campus on December 17, 2024. Prerna is an event aimed at
              motivating school students and introducing them to the world of
              higher education and innovation. The day includes inspiring
              speeches by esteemed guests, an engaging campus tour, a fun quiz,
              cultural performances, and interactive sessions with IPS and IRS
              officers. The event concludes with prize distribution. Join us for
              a day of discovery and excitement at IITH!
            </p>
            <div className="flex">
              <a
                href="https://drive.google.com/drive/folders/1ZEDJGGUR1ra2FJHFAyyHJHZsGuXI5Sdr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 m-4 px-8 py-2 bg-white text-[#556B2F] rounded-lg tracking-wider font-medium
                  transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
              >
                Gallery
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1-us-6_EekcWspf-V-leOp0rO7rSYH5-der_a880Rfa0/edit?gid=351336035#gid=351336035"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mb-4 px-8 py-2 bg-white text-[#556B2F] rounded-lg tracking-wider font-medium
                  transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
              >
                Schedule
              </a>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center mt-10">
          <h1 className="text-lg lg:text-3xl flex justify-center mt-5 mx-5">
            ORPHANAGE VISIT
          </h1>
          <div className="flex flex-col items-center justify-center p-4 my-2 lg:w-3/4 text-md lg:text-xl">
            <p>
              Join us for a meaningful event as we visit the Mahima Ministries
              orphanage on Sunday. This initiative aims to support the children
              living there by providing essential supplies, clothing, and
              educational resources. Our goal is to foster a sense of community
              and compassion, ensuring that these children feel loved and
              supported. Together, we can make a positive impact in their lives
              and contribute to their well-being and development.
            </p>
          </div>
        </div>
        <div className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center mt-10">
          <h1 className="text-lg lg:text-3xl flex justify-center mt-5 mx-5">
            SCHOOL VISIT
          </h1>
          <div className="flex flex-col items-center justify-center p-4 my-2 lg:w-3/4 text-md lg:text-xl">
            <p>
              We are excited to announce a visit to a school in Kandi on
              Saturday. This event aims to engage with students and promote
              educational enrichment through interactive activities and
              workshops. Our goal is to inspire a love for learning and provide
              valuable resources that enhance their academic experience. By
              fostering connections between our organization and the school
              community, we hope to empower students and encourage their
              personal and educational growth. Join us in making a positive
              impact on the lives of young learners!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
