import React from 'react';

const Coordinators = {
  FinanceCoordinators: ["Amit Vikram", "Aryan Bubna","Abhinav"],
  LogisticsCoordinators: ["Omkar Nilkanth", "Mohit Borse","Pratyushree Ghose"],
  EventsCoordinators:["Deddepya","Sahasra","Pritesh"],
  MultimediaCoordinators:["C.Rachana","Annant Pathak","Aishwarya Nambiar"],
  WebCoordinators:["Sathwik Kodamarthi","Naishadha","Praneeth Chamarthy","Sai Chandan"],
  VolunteerCoordinators:["Sai Rishi Kasuri","Achal Singh","Prince Verma"],
  PrOutreachVolunteers:["Sneha Das","Sukesh Kumar","Sri Nithya S"]
};

const TeamMember = ({ coordinators }) => {
  return (
    <div className="absolute mt-auto flex flex-flexbox justify-end text-left font-serif text-6xl">
      {coordinators && (
        <div className="coordinators ml-0">
          <h4 className="font-semibold text-lg text-white">Coordinators:</h4>
          <ul className="list-disc list-inside text-sm text-white pl-4">
            {coordinators.map((coordinator, index) => (
              <li key={index}>{coordinator}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Card = ({ image, name, role, head }) => {
  return (
    <div className="relative w-[473px] h-[400px] mx-auto">
      <div className="relative w-[500px] h-[329px] mx-auto">
        <div className="absolute bottom-0 left-80 w-[234px] h-[65px] bg-[#d9d9d9] rounded-[40px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-black text-xl font-semibold">{name}</div>
            <div className="text-black text-lg">{role}</div>
          </div>
        </div>
        <div className="absolute top-[38px] left-80 w-60 h-[233px] rounded-full bg-[#c4c4c4] overflow-hidden flex items-center justify-center">
          {/* Image inside the circle */}
          <img src={image} alt={`${name}`} className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-0 left-0 transform rotate-[0.25deg] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[50px]">
          {head}
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="team-page">
      <div className="team-grid">
        <div className='flex flex-row'>
          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Gayatri Priya"
              head="Overall head"
              role="Overall head"
              image="src/components/images/oc.jpg"
            />
          </div>
          <div className="h-[329px] w-[2px] bg-gray-400 mx-4 ml-10"></div>

          <div className='flex mx-auto flex-row flex-row items-center'>
            <Card
              name="Harshitha Chanchal"
              head="VCU"
              role="Head of VCU"
              image="src/components/images/Harshita Chanchal.jpg"
            />
            <TeamMember
              coordinators={Coordinators.VolunteerCoordinators}
            />
          </div>
        </div>

        <div className="h-[2px] w-[1300px] bg-gray-400 mx-4 mb-12 ml-20"></div>
        
        <div className='flex flex-row'>
          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Avantika Patil"
              head="Finance"
              role="Head of Finance"
              image="src/components/images/avantika.jpg"
            
            />
            <TeamMember
              coordinators={Coordinators.FinanceCoordinators}
            />
          </div>

          <div className="h-[329px] w-[2px] bg-gray-400 mx-4 ml-10"></div>

          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Shaik P Pervez"
              head="Logistics"
              role="Head of Logistics"
              image="src/components/images/Shaik P Parvez.jpeg"
            />
            <TeamMember
              coordinators={Coordinators.LogisticsCoordinators}
            />
          </div>
        </div>

        <div className="h-[2px] w-[1300px] bg-gray-400 mx-4 mb-12 ml-20"></div>

        <div className='flex flex-row'>
          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Archana"
              head="Events"
              role="Head of Events"
              image="path/to/archana_image.jpg"
            />
            <TeamMember
              coordinators={Coordinators.EventsCoordinators}
            />
          </div>

          <div className="h-[329px] w-[2px] bg-gray-400 mx-4 ml-10"></div>

          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Abhishek"
              head="Multimedia"
              role="Head of Multimedia Design"
              image="src/components/images/abhishek.jpg"
            />
            <TeamMember
              coordinators={Coordinators.MultimediaCoordinators}
            />
          </div>
        </div>

        <div className="h-[2px] w-[1300px] bg-gray-400 mx-4 mb-12 ml-20"></div>

        <div className='flex flex-row'>
          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Tejasri"
              head="Web Dev"
              role="Head of Web"
              image="src/components/images/tejasri.jpg"
            />
            <TeamMember
              coordinators={Coordinators.WebCoordinators}
            />
          </div>

          <div className="h-[329px] w-[2px] bg-gray-400 mx-4 ml-10"></div>

          <div className='flex mx-auto flex-row items-center'>
            <Card
              name="Vinay"
              head="PR Outreach"
              role="Head of PR Outreach"
              image="src/components/images/vinay.jpg"
            />
            <TeamMember
              coordinators={Coordinators.PrOutreachVolunteers}
            />
          </div>
        </div>

        <div className="absolute w-[365px] h-[529px] top-[1761px] left-[541px]">
          <div className="absolute w-[303px] top-10 left-[170px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[50px] tracking-[0] leading-[normal]">
            Mentors
          </div>
          <div className="absolute w-[342px] h-[364px] top-[165px] left-0 bg-[#d9d9d9]" />
        </div>

        <div className="absolute w-[342px] h-[364px] top-[1926px] left-[98px] bg-[#d9d9d9]" />
        <div className="absolute w-[342px] h-[364px] top-[1926px] left-[983px] bg-[#d9d9d9]" />
        <div className="absolute w-[295px] top-[2332px] left-[195px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[50px] tracking-[0] leading-[normal]">
          name
        </div>
        <div className="left-[632px] absolute w-[295px] top-[2332px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[50px] tracking-[0] leading-[normal]">
          name
        </div>
        <div className="left-[1097px] absolute w-[295px] top-[2332px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[50px] tracking-[0] leading-[normal]">
          name
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
