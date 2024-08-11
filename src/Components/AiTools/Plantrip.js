// src/components/Plantrip.js

import React, { useState } from 'react';
import './Plantrip.css';
import Places from './Places';
import { location } from './data2';

export default function Plantrip() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = () => {
    const foundLocation = location.find(loc => loc.name.toLowerCase() === searchTerm.toLowerCase());
    setSelectedLocation(foundLocation);
  };

  return (
    <div className='plan'>
      {/* <h>Plan With AI</h> */}
      <h4>Hi, I'm your AI Support</h4> 
      {/* <h5>Just tell me where you want to go?</h5> */}
      <div className="searchbar">
        <input
          id='search'
          type="text"
          placeholder="Just tell me where you want to go..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id='searchbtn2' onClick={handleSearch}>Search</button>
      </div>
      {selectedLocation && (
        <Places
          img={selectedLocation.img}
          description={selectedLocation.description}
          hotels={selectedLocation.hotels}
        />
      )}
    </div>
  );
}
