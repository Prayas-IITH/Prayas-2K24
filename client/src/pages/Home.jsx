import React from 'react';

const About = () => {
    return (
        <div className="text-center py-10 bg-[#FFF45D]">
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
        <div className="bg-[#f0ead6] py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <img src="../../public/Frame 27.png" alt="Prayas RDC 2024-25" className="w-full max-w-md mx-auto" />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold mb-4">PRAYAS RDC</h2>
                        <p className="mb-4">
                            Prayas, a student-led initiative at IIT Hyderabad, is dedicated to empowering rural children from government schools and orphanages through education and mentorship. The club bridges educational gaps by providing academic support, essential resources, and personal guidance to help children achieve their dreams.
                        </p>
                        <p>
                            Prayas fosters holistic development through activities like yoga sessions for physical and emotional well-being, as well as campus tours to inspire academic aspirations. By offering targeted teaching and competitive exam guidance, Prayas equips underprivileged children with the tools they need to pursue a brighter future and reach their full potential.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <About />
            <PrayasInfo />
            {/* Other sections of your Home component */}
        </div>
    );
};

export default Home;