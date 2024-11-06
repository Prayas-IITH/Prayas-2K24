function Contact() {
  return (
    <div className="w-full min-h-screen font-montserrat">
      <div className="text-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          INVOLVE IN PRAYAS
        </h1>
        <div className="flex justify-center items-center mb-8">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full min-h-screen items-center text-white">
        <div className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center">
          <h1 className="text-lg lg:text-3xl flex justify-center mt-5 mx-5">
            GET INVOLVED, VOLUNTEER WITH PRAYAS
          </h1>
          <div className="flex flex-col items-center justify-center p-4 my-2 lg:w-3/4 text-md lg:text-xl">
            <p className="m-2">
              Welcome to the Prayas club at IITH! We are excited to have you
              join our community and contribute to our mission. There are
              several ways you can get involved, and we would love to have your
              support.
            </p>
            <p className="m-2">
              Volunteering is a fantastic way to make a difference and engage
              with our community. At Prayas, we offer various volunteering
              opportunities that cater to different interests and skills. Here's
              how you can get started:
            </p>

            <p className="mt-10">
              You can connect to our community through mail{" "}
            </p>
            <a
              href="mailto:prayas@rdc.iith.ac.in"
              className="hover:underline hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              prayas@rdc.iith.ac.in
            </a>
          </div>
        </div>

        <div className="w-3/4 h-1/2 bg-[#556B2F] rounded-xl flex flex-col items-center my-10">
          <div className="flex flex-col items-center justify-center p-4 my-2 lg:w-3/4">
            <p className="m-2 text-2xl">Types of Volunteer Roles:</p>
            <p className="m-2 text-md lg:text-xl">
              Event Coordination: Assist in the planning and execution of events
              that promote our initiatives. This role involves organizing
              logistics, managing schedules, and ensuring that events run
              smoothly.
            </p>
            <p className="m-2 text-md lg:text-xl">
              Teaching: Share your knowledge and expertise by teaching students
              at nearby schools. This opportunity allows you to inspire young
              minds and contribute to their educational development.
            </p>
            <p className="m-2 text-md lg:text-xl">
              Visitation Programs: Participate in visits to nearby orphanages,
              where you can spend quality time with children. Your presence can
              bring joy and support to those in need, fostering a sense of
              community and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
