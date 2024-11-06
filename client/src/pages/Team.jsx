import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";
import DividerImage from "/team/divider.png";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [overallHeads, setOverallHeads] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [rdc, setRdc] = useState([]); // New state for RDC

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
          setRdc(data.rdc); // Set the RDC data
        }
        setTeams(data.teams);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-full min-h-screen font-montserrat">
      <div className="flex items-center justify-center h-4/5 w-full my-6 z-10 tracking-widest text-2xl sm:text-4xl lg:text-6xl">
        T E A M
      </div>

      {/* Divider Image */}
      <div className="flex items-center justify-center">
        <img src={DividerImage} alt="Divider" className="w-auto h-8 md:h-8" />
      </div>

      <div className="flex items-center justify-center text-md lg:text-xl my-3 tracking-widest">
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

      {/* Mentors Section */}
      <div className="flex items-center justify-center h-4/5 w-full my-6 tracking-widest z-10 text-xl sm:text-3xl lg:text-3xl">
        M E N T O R S
      </div>

      {/* Divider Image */}
      <div className="flex items-center justify-center">
        <img src={DividerImage} alt="Divider" className="w-auto h-8 md:h-8" />
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
          className="flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center h-4/5 w-full my-6 z-10 tracking-widest text-xl sm:text-3xl lg:text-4xl">
            {team.name}
          </div>

          {/* Divider Image */}
          <div className="flex items-center justify-center">
            <img
              src={DividerImage}
              alt="Divider"
              className="w-auto h-8 md:h-8"
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

      {/* RDC Section */}
      <div className="flex items-center justify-center text-md lg:text-4xl my-3 tracking-widest">
        R D C
      </div>

      {/* Divider Image */}
      <div className="flex items-center justify-center">
        <img src={DividerImage} alt="Divider" className="w-auto h-8 md:h-8" />
      </div>

      <div className="flex items-center justify-center my-6 md:my-10">
        <div
          className={`w-full lg:w-1/2 grid gap-8 ${
            rdc.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
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
    </div>
  );
};

export default Team;
