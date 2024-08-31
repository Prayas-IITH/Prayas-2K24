import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a reusable Modal component

function CompetitionCard({ imageSrc, name, details, onRegister, isFinished, showRegister }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg w-80 h-[400px]">
      {/* Competition Photo */}
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4 overflow-hidden font">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover rounded-md hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Competition Name */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>

      {/* Competition Details (Short) */}
      <p className="text-gray-600 text-center mb-4 flex-grow">{details}</p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={toggleModal}
          className="bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 transition"
        >
          Info
        </button>
        {showRegister && (
          <button
            onClick={onRegister}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        )}
      </div>

      {/* Competition Status */}
      <div
        className={`px-4 py-2 rounded-md text-gray-600 mt-4 ${
          isFinished ? 'bg-gray-200' : 'bg-green-200'
        }`}
      >
        {isFinished ? 'Finished' : 'Upcoming'}
      </div>

      {/* Modal */}
      {showModal && (
        <Modal onClose={toggleModal}>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{name}</h3>
            <p className="text-gray-600 mb-6">{details}</p>
            {showRegister && (
              <button
                onClick={onRegister}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Register
              </button>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default CompetitionCard;