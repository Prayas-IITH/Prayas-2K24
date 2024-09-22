import React from "react";
import TeamCutout from "/public/team/round.png";
import RibbonImage from "/public/team/ribbon.png";

const TeamMember = ({ name, personImage, size }) => {

  // Define sizes based on the size prop
  const imageSize = size === "large" ? "w-60 h-60" : "w-48 h-48"; // Increase size for large
  const cutoutSize = size === "large" ? "w-80 h-80" : "w-64 h-64"; // Keep cutout size

  return (
    <div className="relative flex flex-col items-center justify-center p-0 rounded-full shadow-none w-auto h-auto">
      {/* Container with relative positioning */}
      <div className={`relative ${cutoutSize}`}>
        {/* Background Cutout */}
        <img
          src={TeamCutout}
          alt="Cutout"
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-full"
        />

        {/* Person Image centered inside the Cutout */}
        <img
          src={personImage}
          alt={name}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${imageSize} rounded-full object-cover border-none`}
        />

        {/* Ribbon Overlapping with Name */}
        <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-center z-20">
          {/* Ribbon Image */}
          <img
            src={RibbonImage}
            alt="Ribbon"
            className="w-full h-full object-cover"
          />
          {/* Name on Ribbon */}
          <h3 className="absolute text-white text-xl font-semibold z-30">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
