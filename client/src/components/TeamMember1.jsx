import React from "react";
import TeamRound from "/team/TeamRound.png";
import Ribbon from "/team/ribbon.png";

const TeamMember1 = ({ name, personImage }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 w-full">
      {/* TeamRound as background for the person image */}
      <div
        className="relative w-4/5 md:w-3/5 aspect-square rounded-full bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${TeamRound})` }}
      >
        <img
          src={personImage}
          alt={name}
          className="w-4/5 h-4/5 object-cover rounded-full"
        />
      </div>

      {/* Ribbon div overlayed at the bottom of the TeamRound */}
      <div className="flex">
        <div className="absolute bottom-0 left-1/4 w-1/2 flex items-center justify-center z-20">
          {/* Ribbon Image */}
          <img src={Ribbon} alt="Ribbon" className="w-full object-contain" />
          {/* Name and Designation on Ribbon */}
          <div className="absolute text-center z-30 flex flex-col">
            <h3 className="text-white text-lg lg:text-xl font-semibold">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember1;
