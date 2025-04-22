import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import '../App.css';

function MapPage() {
  const [stateData, setStateData] = useState(null);

  const handleStateHover = (state) => {
    // Mock data - replace with real data
    const crimeData = {
      'Maharashtra': { phishing: 1200, malware: 850, ransomware: 420 },
      'Delhi': { phishing: 950, malware: 620, ransomware: 380 },
      'Karnataka': { phishing: 870, malware: 540, ransomware: 290 },
      // Add more states as needed
    };
    
    setStateData({
      name: state,
      ...crimeData[state] || { phishing: 0, malware: 0, ransomware: 0 }
    });
  };

  return (
    <div className="map-page">
      <h1>India Cyber Crime Data</h1>
      <div className="map-container">
        <MapComponent onStateHover={handleStateHover} />
        <aside>
        {stateData && (
          <div className="crime-data">
            <h2>{stateData.name}</h2>
            <p>Phishing Attacks: {stateData.phishing}</p>
            <p>Malware Incidents: {stateData.malware}</p>
            <p>Ransomware Cases: {stateData.ransomware}</p>
          </div>
        )}
        </aside>
      </div>
    </div>
  );
}

export default MapPage;