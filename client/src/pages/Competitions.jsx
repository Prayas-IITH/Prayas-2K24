import React from 'react';
import backgroundImage from '../../public/Dummy.jpg'; // Adjust the path as needed

const Competitions = () => {
  return (
    <div
      className="text-center py-10 bg-[#FFF45D]"
    >
      <h1 className="text-4xl font-bold mb-4">COMPETITIONS</h1>
      <div className="flex justify-center items-center mb-8">
        <hr className="w-1/4 border-t-2 border-black" />
        <span className="mx-4 text-2xl">✦</span>
        <hr className="w-1/4 border-t-2 border-black" />
      </div>
      
      {/* Upcoming Events Section */}
      <div className="flex justify-center items-center mb-8">
        <span className="text-2xl">✦</span>
        <h2 className="text-2xl font-semibold mx-4">UPCOMING EVENTS</h2>
        <span className="text-2xl">✦</span>
      </div>
      <div className="flex justify-center items-stretch mb-16">
        <div className="bg-black  p-6 rounded-lg shadow-lg w-3/5 flex flex-col justify-between"
         style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div>
            <h3 className="text-xl font-bold mb-2 text-left text-white">EVENT 1</h3>
            <p className="text-sm mb-4 text-white text-left font-bold">
              Prayas, a student-led initiative at IIT Hyderabad, is dedicated to empowering rural children from government schools and orphanages through education and mentorship. The club bridges educational gaps by providing academic support, essential resources, and personal guidance to help children achieve their dreams.
            </p>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full self-end">REGISTER</button>
        </div>
        <div className="ml-4 flex items-center">
          <ul className="list-none bg-[#9D7800]/[0.42] p-1 rounded-full flex flex-col justify-between h-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
              <li key={number} className="bg-green-200 text-center py-2 px-4 my-1 rounded-full">
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Previous Events Section */}
      <div className="flex justify-center items-center mb-8">
        <span className="text-2xl">✦</span>
        <h2 className="text-2xl font-semibold mx-4">PREVIOUS EVENTS</h2>
        <span className="text-2xl">✦</span>
      </div>
      <div className="flex justify-center items-stretch">
        <div className="mr-4 flex items-center">
          <ul className="list-none bg-[#9D7800]/[0.42] p-1 rounded-full flex flex-col justify-between h-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
              <li key={number} className="bg-green-200 text-center py-2 px-4 my-1 rounded-full">
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg w-3/5 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div>
            <h3 className="text-xl text-left font-bold mb-2 text-white">EVENT 1</h3>
            <p className="text-md mb-4 text-left text-white font-bold">
              Prayas, a student-led initiative at IIT Hyderabad, is dedicated to empowering rural children from government schools and orphanages through education and mentorship. The club bridges educational gaps by providing academic support, essential resources, and personal guidance to help children achieve their dreams.
            </p>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full self-end">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Competitions;