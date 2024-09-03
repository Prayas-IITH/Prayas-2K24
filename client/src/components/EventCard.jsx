import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ date, time, place, link }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
      <div className="text-center">
        <div className="text-2xl font-semibold mb-4">Event Details</div>
        <div className="text-xl font-medium text-gray-700 mb-2">
          Date: {date}
        </div>
        <div className="text-xl font-medium text-gray-700 mb-2">
          Time: {time}
        </div>
        <div className="text-xl font-medium text-gray-700 mb-4">
          Place: {place}
        </div>
        {/* Link element inside the card */}
        <Link 
          to={link} 
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600"
        >
          View Images
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

