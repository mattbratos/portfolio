import React from 'react';
import './TravelFeed.css'; // Make sure this path is correct
import travelEntries from '../../data/travelEntries'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function TravelFeed() {
  return (
    <div className="travel-feed">
      {travelEntries.map((entry) => (
        <div className="travel-entry" key={entry.id}>
          <div className="entry-con">
              <div className="location-con">
                  <FontAwesomeIcon className='locationDotIcon' icon={faLocationDot} />
                  <h3 className='country' >{entry.location}</h3>
                  <a className='viewOnGoogleMaps' href={entry.mapUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </div>
              <h2 className='title' >{entry.title}</h2>
              <p className="date">Date: {entry.date}</p>
              <p className="description" >Description: {entry.description}</p>
          </div>
          <img src={entry.imageUrl} alt={entry.title} />
        </div>
      ))}
    </div>
  );
}

export default TravelFeed;