import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";
import DividerImage from "/public/team/divider.png"; // Import the divider image

function Team() {
  const [teams, setTeams] = useState([]); 

  useEffect(() => {
    fetch("/team/Team.json")
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-screen min-h-screen">
      {teams.map((team) => (
        <div key={team.name} className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center h-4/5 w-screen my-10 md:my-16">
            <p className="relative z-10 text-black font-Montserrat text-center text-xl sm:text-3xl lg:text-3xl">
              {team.name}
            </p>
          </div>
          
          {/* Divider Image */}
          <div className="flex items-center justify-center my-4 md:my-6">
            <img
              src={DividerImage}
              alt="Divider"
              className="w-auto h-8 md:h-8" // Adjust size as needed
            />
          </div>

          {/* Team Heads Section */}
          <div className="flex items-center justify-center my-6 md:my-10">
            <div
              className={`w-full grid gap-12 ${
                team.heads.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              }`}
            >
              <div className="flex items-center justify-center my-4">
                <p className="text-2xl font-semibold text-gray-700">Heads</p>
              </div>
              {team.heads.map((head) => (
                <TeamMember
                  key={head.name}
                  name={head.name}
                  personImage={head.image || "/team/Heads/Missing.png"}
                  size="large" // Pass size as "large" for heads
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center my-4">
            <p className="text-2xl font-semibold text-gray-700">Coordinators</p>
          </div>

          {/* Coordinators Section */}
          <div className="flex items-center justify-center my-10 md:my-16">
            <div
              className={`w-full grid gap-12 mt-10 ${
                team.coords.length < 3
                  ? "grid-cols-2"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
              }`}
            >
              {team.coords.map((coord) => (
                <TeamMember
                  key={coord.name}
                  name={coord.name}
                  personImage={coord.image || "/TEAM/Coords/Missing.png"}
                  size="small" // Pass size as "small" for coordinators
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
