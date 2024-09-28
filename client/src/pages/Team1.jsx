import React, { useEffect, useState } from "react";
import TeamMember1 from "../components/TeamMember1";
import DividerImage from "/team/divider.png";
import DiamondImage from "/team/diamond.png";

const Team1 = () => {
  const [teams, setTeams] = useState([]);
  const [overallHeads, setOverallHeads] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/team/Team.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.overallHeads) {
          setOverallHeads(data.overallHeads);
        }
        if (data.mentors) {
          setMentors(data.mentors);
        }
        setTeams(data.teams);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center h-4/5 w-full my-6">
        <p className="z-10 text-black font-Montserrat text-center text-xl sm:text-3xl lg:text-3xl">
          TEAM
        </p>
      </div>

      {/* Divider Image */}
      <div className="flex items-center justify-center">
        <img src={DividerImage} alt="Divider" className="w-auto h-8 md:h-8" />
      </div>

      <div className="flex items-center justify-center text-md lg:text-xl my-3">
        OVERALL COORDINATORS
      </div>
      <div className="flex items-center justify-center my-6 md:my-10">
        <div
          className={`w-full grid gap-8 ${
            overallHeads.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-2"
          }`}
        >
          {overallHeads.map((member, index) => (
            <TeamMember1
              key={member.name}
              name={member.name}
              personImage={member.image}
            />
          ))}
        </div>
      </div>
      {teams.map((team) => (
        <div
          key={team.name}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center h-4/5 w-full my-6">
            <p className="relative z-10 text-black font-Montserrat text-center text-xl sm:text-3xl lg:text-3xl">
              {team.name}
            </p>
          </div>

          {/* Divider Image */}
          <div className="flex items-center justify-center">
            <img
              src={DividerImage}
              alt="Divider"
              className="w-auto h-8 md:h-8"
            />
          </div>

          <div className="flex items-center justify-center text-md lg:text-xl my-3">
            HEAD
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
                <TeamMember1
                  key={member.name}
                  name={member.name}
                  personImage={member.image}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center text-md lg:text-xl my-3">
            COORDINATORS
          </div>

          <div className="flex items-center justify-center my-6 md:my-10">
            <div
              className={`w-4/5 lg:w-3/4 grid gap-8 ${
                team.coords.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              }`}
            >
              {team.coords.map((member) => (
                <TeamMember1
                  key={member.name}
                  name={member.name}
                  personImage={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-center h-4/5 w-full my-6">
        <p className="z-10 text-black font-Montserrat text-center text-xl sm:text-3xl lg:text-3xl">
          MENTORS
        </p>
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
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
          }`}
        >
          {mentors.map((member, index) => (
            <TeamMember1
              key={member.name}
              name={member.name}
              personImage={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team1;
