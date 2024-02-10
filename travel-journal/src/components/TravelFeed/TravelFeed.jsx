import React from 'react';
import TravelEntry from './TravelEntry'; // Ensure this path is correct based on your project structure
import './TravelFeed.css'; // Optional: If you have specific styles for the feed

function TravelFeed({ entries }) {
  return (
    <div className="travel-feed">
      {entries.map((entry) => (
        <TravelEntry
          key={entry.id}
          title={entry.title}
          date={entry.date}
          description={entry.description}
          imageUrl={entry.imageUrl}
          mapUrl={entry.mapUrl}
        />
      ))}
    </div>
  );
}

export default TravelFeed;
