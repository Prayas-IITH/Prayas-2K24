import React from "react";
import TeamCutout from "/team/TeamRound.png";
import RibbonImage from "/team/ribbon.png";

const TeamMember = ({ name, personImage, designation, size }) => {
  // Define sizes based on the size prop
  const imageSize =
    size === "xlarge"
      ? "w-72 h-72"
      : size === "large"
      ? "w-60 h-60"
      : "w-48 h-48"; // Adjust size for xlarge
  const cutoutSize =
    size === "xlarge"
      ? "w-96 h-96"
      : size === "large"
      ? "w-80 h-80"
      : "w-64 h-64"; // Adjust cutout size for xlarge

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
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-20">
          {/* Ribbon Image */}
          <img
            src={RibbonImage}
            alt="Ribbon"
            className="w-full h-full object-contain"
          />
          {/* Name and Designation on Ribbon */}
          <div className="absolute text-center z-30 flex flex-col">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white text-sm mt-1">{designation}</p>{" "}
            {/* Designation appears below name */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
