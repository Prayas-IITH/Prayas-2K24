import React, { useEffect, useState } from "react";
import TeamMember from "../components/TeamMember";
import DividerImage from "/team/divider.png";
import DiamondImage from "/team/diamond.png"; // Path to diamond image

function Team() {
  const [teams, setTeams] = useState([]);
  const [overallHeads, setOverallHeads] = useState([]); // State for overall heads

  useEffect(() => {
    fetch("/team/Team.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.overallHeads) {
          setOverallHeads(data.overallHeads);
        }
        setTeams(data.teams);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="w-screen min-h-screen">
      {/* Overall Heads Section */}
      {overallHeads.length > 0 && (
        <div className="relative flex flex-col items-center justify-center my-12 md:my-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">OVERALL HEADS</h2>
          
          <div className="relative flex items-center justify-center gap-40">
            {/* First overall head */}
            <TeamMember
              name={overallHeads[0].name}
              personImage={overallHeads[0].image || "/team/Heads/Missing.png"}
              designation={overallHeads[0].designation}
              size="xlarge"
            />

            {/* Second overall head */}
            <TeamMember
              name={overallHeads[1].name}
              personImage={overallHeads[1].image || "/team/Heads/Missing.png"}
              designation={overallHeads[1].designation}
              size="xlarge"
            />

            {/* Diamond Image positioned slightly above the bottom */}
            <div className="absolute bottom-[-0px] left-1/2 transform -translate-x-1/2">
              <img src={DiamondImage} alt="Diamond" className="h-16 w-16" /> {/* Adjust the size */}
            </div>
          </div>
        </div>
      )}

      {/* Team Sections */}
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
              className="w-auto h-8 md:h-8"
            />
          </div>

          {/* Team Heads Section */}
          <div className="flex items-center justify-center my-6 md:my-10">
            <div className={`w-full grid gap-12 ${team.heads.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
              <div className="flex items-center justify-center my-4">
                <p className="text-2xl font-semibold text-gray-700">HEADS</p>
              </div>
              {team.heads.map((head) => (
                <TeamMember
                  key={head.name}
                  name={head.name}
                  personImage={head.image || "/team/Heads/Missing.png"}
                  designation={head.designation}
                  size="large"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center my-4">
            <p className="text-2xl font-semibold text-gray-700">Coordinators</p>
          </div>

{/* Coordinators Section */}
<div className="flex items-center justify-center my-10 md:my-16">
  <div className={`w-full grid gap-12 mt-10 ${team.coords.length < 3 ? "grid-cols-2" : "grid-cols-3"}`}>
    {team.coords.map((coord, index) => (
      <React.Fragment key={coord.name}>
        <TeamMember
          name={coord.name}
          personImage={coord.image || "/team/Coords/Missing.png"}
          designation={coord.designation}
          size="small"
          className="my-4" // Very small vertical margin
        />
      </React.Fragment>
    ))}
    
    {/* Diamond Image positioned at the bottom */}
    {team.coords.length > 1 && (
      <div className="flex items-center justify-center mt-2"> {/* Margin for separation */}
        <img src={DiamondImage} alt="Diamond" className="h-8 w-8 mx-1" /> {/* Very small horizontal margin */}
      </div>
    )}
  </div>
</div>


        </div>
      ))}
    </div>
  );
}

export default Team;
