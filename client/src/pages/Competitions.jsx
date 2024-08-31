import React, { useState } from 'react';
import CompetitionCard from '../components/CompetitionCard';

function Competitions() {
  const [activeSection, setActiveSection] = useState('upcoming');

  const handleRegister = () => {
    alert('You have registered!');
  };

  const competitionData = [
    {
      imageSrc: '../../public/Dummy.jpg',
      name: 'Beginner Competition',
      details: 'This competition is perfect for beginners looking to get started.',
      isFinished: false,
    },
    {
      imageSrc: '../../public/Dummy.jpg',
      name: 'Advanced Competition',
      details: 'For experienced participants ready for a challenge.',
      isFinished: false,
    },
    {
      imageSrc: '../../public/Dummy.jpg',
      name: 'Beginner Competition',
      details: 'This competition is perfect for beginners looking to get started.',
      isFinished: true,
    },
    {
      imageSrc: '../../public/Dummy.jpg',
      name: 'Beginner Competition',
      details: 'This competition is perfect for beginners looking to get started.',
      isFinished: true,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 min-h-screen">
      <div className="flex justify-center items-start gap-8 font-serif">
        <button
          className={`${activeSection === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-md`}
          onClick={() => setActiveSection('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`${activeSection === 'finished' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded-md`}
          onClick={() => setActiveSection('finished')}
        >
          Finished
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 font-serif">
        {competitionData
          .filter((competition) =>
            activeSection === 'upcoming' ? !competition.isFinished : competition.isFinished
          )
          .map((competition, index) => (
            <CompetitionCard
              key={index}
              imageSrc={competition.imageSrc}
              name={competition.name}
              details={competition.details}
              isFinished={competition.isFinished}
              showRegister={!competition.isFinished}
              onRegister={handleRegister}
            />
          ))}
      </div>
    </div>
  );
}

export default Competitions;