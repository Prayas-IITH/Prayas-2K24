import React, { useEffect, useState } from "react";
import DividerImage from "/team/divider.png";

// TeamMember: image centered inside its container
const TeamMember = ({ name, personImage, designation }) => (
  <div className="flex flex-col items-center text-center">
    <img
      src={personImage}
      alt={name}
      className="object-cover w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full"
    />
    <h3 className="mt-4 font-semibold text-lg sm:text-xl">{name}</h3>
    <p className="text-sm sm:text-base text-gray-600">{designation}</p>
  </div>
);

const Team = () => {
  const [coreTeam, setCoreTeam] = useState([]);
  const [domainHeads, setDomainHeads] = useState({});
  const [mentors, setMentors] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("/team/team2k25.json")
      .then((response) => response.json())
      .then((data) => {
        setCoreTeam(data.coreTeam || []);
        setMentors(data.mentors || []);

        const grouped = {};
        (data.domainHeads || []).forEach((member) => {
          if (!grouped[member.designation]) grouped[member.designation] = [];
          grouped[member.designation].push(member);
        });
        setDomainHeads(grouped);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-full min-h-screen font-montserrat">
      {/* Title */}
      <div className="text-center py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 tracking-widest">
          T E A M
        </h1>
        <div className="flex justify-center items-center">
          <hr className="w-1/4 border-t-2 border-black" />
          <span className="mx-4 text-2xl">✦</span>
          <hr className="w-1/4 border-t-2 border-black" />
        </div>
      </div>

      {/* Core Team */}
      <Section title="C O R E   T E A M">
        <div className="flex flex-wrap justify-center gap-8">
          {coreTeam.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              personImage={member.image}
              designation={member.designation}
            />
          ))}
        </div>
      </Section>

      {/* Mentors */}
      <Section title="M E N T O R S">
        <div className="flex flex-wrap justify-center gap-8">
          {mentors.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              personImage={member.image}
              designation={member.designation}
            />
          ))}
        </div>
      </Section>

      {/* Domain Heads */}
      {Object.entries(domainHeads).map(([designation, members]) => (
        <Section key={designation} title={designation.toUpperCase()}>
          <div className="flex flex-wrap justify-center gap-8">
            {members.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                personImage={member.image}
                designation={member.designation}
              />
            ))}
          </div>
        </Section>
      ))}

      {/* Scroll to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#556B2F] text-white px-4 py-2 rounded-full border-2 shadow-lg hover:bg-[#FFFDF5] hover:border-black hover:text-[#556B2F] transition duration-300"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

// Section wrapper
const Section = ({ title, children }) => (
  <div className="my-12">
    <div className="flex items-center justify-center text-xl sm:text-3xl lg:text-4xl tracking-widest my-6">
      {title}
    </div>
    <div className="flex items-center justify-center">
      <img
        src={DividerImage}
        alt="Divider"
        className="w-2/3 lg:w-auto h-3 md:h-8"
      />
    </div>
    <div className="flex justify-center my-6 md:my-10 px-4">{children}</div>
  </div>
);

export default Team;
