import React from 'react';
import EventCard from '../components/EventCard';

function Announcements() {
  return (
    <div className="flex justify-center space-x-6">
      <EventCard 
        date="September 3, 2024" 
        time="10:00 AM" 
        place="Tokyo, Japan" 
        link="/gallery"  // Link to the gallery page
      />
      <EventCard 
        date="September 4, 2024" 
        time="11:00 AM" 
        place="Kyoto, Japan" 
        link="/gallery"  // Link to the gallery page
      />
    </div>
  );
}

export default Announcements;
