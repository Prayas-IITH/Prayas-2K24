import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";
import DividerImage from "/team/divider.png";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [overallHeads, setOverallHeads] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [rdc, setRdc] = useState([]);
  const [activeTab, setActiveTab] = useState("prayas");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("/team/Team1.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.overallHeads) {
          setOverallHeads(data.overallHeads);
        }
        if (data.mentors) {
          setMentors(data.mentors);
        }
        if (data.rdc) {
          setRdc(data.rdc);
        }
        setTeams(data.teams);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Render the toggle buttons
  const renderToggleButtons = () => (
    <div className="flex items-center justify-center gap-10 mb-6">
      <button
        onClick={() => setActiveTab("prayas")}
        className={`px-8 py-2 text-lg tracking-widest transition-all duration-300 border-2 rounded-xl sm:w-1/4 lg:w-1/4 ${
          activeTab === "prayas"
            ? "bg-[#556B2F] text-white border-black"
            : "bg-transparent text-black border-[#556B2F] hover:bg-[#556B2F] hover:text-yellow-400"
        }`}
      >
        P R A Y A S
      </button>
      <button
        onClick={() => setActiveTab("rdc")}
        className={`px-8 py-2 text-lg tracking-widest transition-all duration-300 border-2 rounded-xl sm:w-1/4 lg:w-1/4 ${
          activeTab === "rdc"
            ? "bg-[#556B2F] text-white border-black"
            : "bg-transparent text-black border-[#556B2F] hover:bg-[#556B2F] hover:text-yellow-400"
        }`}
      >
        R D C
      </button>
    </div>
  );

  // Generate domain buttons dynamically
  const renderDomainButtons = () => (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      {teams.map((team) => (
        <button
          key={team.name}
          onClick={() =>
            document
              .getElementById(team.name.replace(/\s+/g, "-"))
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-2 text-lg tracking-widest transition-all duration-300 border-2 rounded-xl sm:w-1/4 lg:w-1/6
          bg-transparent text-black border-[#556B2F] hover:bg-[#556B2F] hover:text-white"
        >
          {team.name.toUpperCase()}
        </button>
      ))}
    </div>
  );

  // Render Prayas team content
  const renderPrayasContent = () => (
    <>
      <div className="flex items-center justify-center h-4/5 w-full my-5 lg:mb-5 z-10 tracking-widest text-2xl sm:text-4xl lg:text-6xl">
        T E A M
      </div>

      <div className="flex items-center justify-center">
        <img
          src={DividerImage}
          alt="Divider"
          className="w-2/3 lg:w-auto h-3 md:h-8"
        />
      </div>
      {/* <div className="flex justify-center items-center mb-8">
        <hr className="w-1/4 border-t-2 border-black" />
        <span className="mx-4 text-2xl">✦</span>
        <hr className="w-1/4 border-t-2 border-black" />
      </div> */}

      {renderDomainButtons()}

      <div className="flex items-center justify-center text-md lg:text-xl lg:mt-10 my-3 tracking-widest">
        OVERALL COORDINATOR
      </div>
      <div className="flex items-center justify-center my-6 md:my-10">
        <div
          className={`w-full lg:w-1/2 grid gap-8 ${
            overallHeads.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          }`}
        >
          {overallHeads.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              personImage={member.image}
              designation={member.designation}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center h-4/5 w-full my-6 tracking-widest z-10 text-xl sm:text-3xl lg:text-3xl">
        M E N T O R S
      </div>

      <div className="flex items-center justify-center">
        <img
          src={DividerImage}
          alt="Divider"
          className="w-2/3 lg:w-auto h-3 md:h-8"
        />
      </div>

      <div className="flex items-center justify-center my-6 md:my-10">
        <div
          className={`w-full grid gap-8 ${
            mentors.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-3 lg:grid-cols-3"
          }`}
        >
          {mentors.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              personImage={member.image}
              designation={member.designation}
            />
          ))}
        </div>
      </div>

      {teams.map((team) => (
        <div
          key={team.name}
          id={team.name.replace(/\s+/g, "-")}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center h-4/5 w-full my-6 z-10 tracking-widest text-xl sm:text-3xl lg:text-4xl">
            {team.name}
          </div>

          <div className="flex items-center justify-center">
            <img
              src={DividerImage}
              alt="Divider"
              className="w-2/3 lg:w-auto h-3 md:h-8"
            />
          </div>

          <div className="flex items-center justify-center text-md lg:text-xl my-3 tracking-widest">
            H E A D
          </div>

          <div className="flex items-center justify-center my-6 md:my-10">
            <div
              className={`w-full grid gap-8 ${
                team.heads.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              }`}
            >
              {team.heads.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  personImage={member.image}
                  designation={member.designation}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center text-md lg:text-xl my-3 tracking-widest">
            C O O R D I N A T O R S
          </div>

          <div className="flex items-center justify-center my-6 md:my-10">
            <div
              className={`w-4/5 lg:w-full grid gap-8 ${
                team.coords.length === 1
                  ? "grid-cols-1"
                  : team.coords.length === 2
                  ? "grid-cols-1 lg:grid-cols-2 lg:w-3/5 lg:scale-[0.8]"
                  : "grid-cols-1 sm:grid-cols-3 lg:grid-cols-3"
              }`}
            >
              {team.coords.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  personImage={member.image}
                  designation={member.designation}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );

  // Render RDC team content
  const renderRdcContent = () => (
    <>
      <div className="flex items-center justify-center text-2xl lg:text-6xl my-10 tracking-widest">
        R D C
      </div>

      <div className="flex items-center justify-center">
        <img
          src={DividerImage}
          alt="Divider"
          className="w-2/3 lg:w-auto h-3 md:h-8"
        />
      </div>

      <div className="flex items-center justify-center my-6 md:my-10">
        <div
          className={`w-full grid gap-10 ${
            rdc.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          }`}
        >
          {rdc.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              personImage={member.image}
              designation={member.designation}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center font-normal text-2xl hover:text-[#556B2F]">
        <div className="px-8 py-2 text-lg tracking-widest transition-all duration-300 border-2 rounded-xl bg-[#EDCB5D] hover:bg-[#FFFDF5] hover:border-black sm:w-1/4 lg:w-1/4">
          <a
            href="https://rdc.iith.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for more on RDC
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full min-h-screen font-montserrat">
      {renderToggleButtons()}

      {activeTab === "prayas" ? renderPrayasContent() : renderRdcContent()}

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

export default Team;
