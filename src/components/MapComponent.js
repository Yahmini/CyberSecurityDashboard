import React, { useState,useCallback } from 'react';
import indiaMap from '../assets/india_map.jpg';
import '../App.css';

const crimeData = {
  "Telangana": {
    total_cases: 15297,
    common_types: {
      "online_banking_fraud": 3223,
      "otp_fraud": 2179,
      "cheating_fraud": 4467,
      "atm_fraud": 624,
      "cyberstalking": 280,
      "cyber_blackmailing": 234
    },
    primary_motive: "Fraud"
  },
  "Karnataka": {
    total_cases: 12556,
    common_types: {
      "online_fraud": 11000,
      "sexual_exploitation": 556
    },
    primary_motive: "Fraud"
  },
  "Uttar Pradesh": {
    total_cases: 10117,
    common_types: {
      "extortion": 5515,
      "sexual_exploitation": 542,
      "causing_disrepute": 883
    },
    primary_motive: "Extortion"
  },
  "Maharashtra": {
    total_cases: 8249,
    common_types: {
      "sexual_exploitation": 2000,
      "online_fraud": 4000
    },
    primary_motive: "Fraud"
  },
  "Assam": {
    total_cases: 1733,
    common_types: {
      "personal_revenge": 900,
      "extortion": 500
    },
    primary_motive: "Personal Revenge"
  },
  "Andhra Pradesh": {
    total_cases: 2341,
    common_types: {
      "fraud": 1800,
      "sexual_exploitation": 300,
      "personal_revenge": 241
    },
    primary_motive: "Fraud"
  },
  "Tamil Nadu": {
    total_cases: 2082,
    common_types: {
      "call_center_fraud": 500,
      "SIM_box_fraud": 600
    },
    primary_motive: "Fraud"
  },
  "Gujarat": {
    total_cases: 1417,
    common_types: {
      "causing_disrepute": 900,
      "data_theft": 500
    },
    primary_motive: "Causing Disrepute"
  },
  "Rajasthan": {
    total_cases: 1833,
    common_types: {
      "online_sextortion": 700,
      "online_booking_fraud": 400
    },
    primary_motive: "Fraud"
  },
  "West Bengal": {
    total_cases: 401,
    common_types: {
      "fake_refund_fraud": 150,
      "fake_customer_care_fraud": 100
    },
    primary_motive: "Fraud"
  },
  "Bihar": {
    total_cases: 1621,
    common_types: {
      "false_customer_care_numbers": 700,
      "fake_refunds": 500
    },
    primary_motive: "Fraud"
  },
  "Madhya Pradesh": {
    total_cases: 826,
    common_types: {
      "causing_disrepute": 300,
      "online_fraud": 400
    },
    primary_motive: "Fraud"
  },
  "Kerala": {
    total_cases: 773,
    common_types: {
      "data_theft": 200,
      "cyberstalking": 300
    },
    primary_motive: "Fraud"
  },
  "Haryana": {
    total_cases: 681,
    common_types: {
      "online_sextortion": 300,
      "online_booking_fraud": 200
    },
    primary_motive: "Fraud"
  },
  "Punjab": {
    total_cases: 697,
    common_types: {
      "data_theft": 250,
      "cyberstalking": 150
    },
    primary_motive: "Fraud"
  },
  "Odisha": {
    total_cases: 1983,
    common_types: {
      "online_fraud": 1500,
      "extortion": 300
    },
    primary_motive: "Fraud"
  },
  "Chhattisgarh": {
    total_cases: 439,
    common_types: {
      "online_fraud": 200,
      "extortion": 150
    },
    primary_motive: "Fraud"
  },
  "Jharkhand": {
    total_cases: 967,
    common_types: {
      "false_customer_care_numbers": 400,
      "fake_refunds": 300
    },
    primary_motive: "Fraud"
  },
  "Himachal Pradesh": {
    total_cases: 77,
    common_types: {
      "online_fraud": 50,
      "fraudulent_bank_transactions": 27
    },
    primary_motive: "Fraud"
  },
  "Uttarakhand": {
    total_cases: 559,
    common_types: {
      "online_fraud": 400,
      "extortion": 100
    },
    primary_motive: "Fraud"
  },
  "Jammu & Kashmir": {
    total_cases: 173,
    common_types: {
      "online_fraud": 120,
      "data_theft": 53
    },
    primary_motive: "Fraud"
  },
  "Goa": {
    total_cases: 90,
    common_types: {
      "online_fraud": 60,
      "fraudulent_transactions": 30
    },
    primary_motive: "Fraud"
  },
  "Tripura": {
    total_cases: 30,
    common_types: {
      "online_fraud": 20,
      "data_theft": 10
    },
    primary_motive: "Fraud"
  },
  "Manipur": {
    total_cases: 18,
    common_types: {
      "online_fraud": 10,
      "cyberstalking": 8
    },
    primary_motive: "Fraud"
  },
  "Meghalaya": {
    total_cases: 75,
    common_types: {
      "online_fraud": 40,
      "data_theft": 35
    },
    primary_motive: "Fraud"
  },
  "Nagaland": {
    total_cases: 4,
    common_types: {
      "online_fraud": 4
    },
    primary_motive: "Fraud"
  },
  "Mizoram": {
    total_cases: 1,
    common_types: {
      "online_fraud": 1
    },
    primary_motive: "Fraud"
  },
  "Sikkim": {
    total_cases: 26,
    common_types: {
      "online_fraud": 20,
      "cyberstalking": 6
    },
    primary_motive: "Fraud"
  },
  "Arunachal Pradesh": {
    total_cases: 14,
    common_types: {
      "online_fraud": 14
    },
    primary_motive: "Fraud"
  }
};

function MapComponent() {
  const [hoveredState, setHoveredState] = useState(null);

  // Optimized mouse enter handler using useCallback to reduce unnecessary renders
  const handleMouseEnter = useCallback((state) => {
    if (crimeData[state]) {
      setHoveredState(state);
    }
  }, []);

  return (
    <div className="map-container" style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Map Section */}
      <div className="map-wrapper" style={{ position: 'relative', flex: 1 }}>
        <img src={indiaMap} useMap="#india-map" alt="India Map" />
        <map name="india-map">
          {Object.entries({
            'Jammu & Kashmir': '111,41,237,118',
            'Himachal Pradesh': '163,115,205,144',
            'Uttarakhand': '198,147,238,173',
            'Punjab': '140,132,166,165',
            'Haryana': '169,186,17',
            'Uttar Pradesh': '194,176,197,215,230,248,271,251,295,238,274,210',
            'Bihar': '301,217,362,238,339,263,300,262,306,246',
            'Sikkim': '361,193,378,215',
            'West Bengal': '336,289,346,304,378,309,371,273,361,271,368,257,379,248,360,243,351,277',
            'Assam': '383,235,399,224,485,211,431,273,434,238',
            'Meghalaya': '393,241,435,254',
            'Tripura': '418,267,430,288',
            'Mizoram': '436,273,449,300',
            'Manipur': '452,252,470,271',
            'Nagaland': '482,224,462,244',
            'Arunachal Pradesh': '426,210,495,180,498,208,478,228,520,202,461,212',
            'Jharkhand': '286,262,335,294',
            'Chhattisgarh': '270,276,287,301,265,362,247,373,239,328,256,298',
            'Madhya Pradesh': '151,257,250,302',
            'Rajasthan': '76,189,165,252',
            'Gujarat': '42,271,122,324',
            'Maharashtra': '102,363,235,317',
            'Karnataka': '140,401,181,469',
            'Odisha': '289,310,336,346',
            'Tamil Nadu': '187,473,218,522',
            'Kerala': '153,482,175,529',
            'Andhra Pradesh': '192,371,232,453'
          }).map(([state, coords]) => {
            const shape = coords.split(',').length === 3 ? 'circle' : coords.split(',').length === 4 ? 'rect' : 'poly';
            return (
              <area
                key={state}
                shape={shape}
                coords={coords}
                alt={state}
                title={state}
                onMouseEnter={() => handleMouseEnter(state)}
                onMouseLeave={() => setHoveredState(null)}
              />
            );
          })}
        </map>
      </div>

      {/* Info Block Section */}
      <div
        className="info-block"
        style={{
          width: '300px',
          marginLeft: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9',
          flexShrink: 0,  // Ensure this doesn't shrink when the window resizes
          display: hoveredState ? 'block' : 'none',  // Only display the block if there is data
        }}
      >
        {hoveredState && crimeData[hoveredState] && (
          <>
            <h3>{hoveredState}</h3>
            <p><strong>Total Cases:</strong> {crimeData[hoveredState].total_cases}</p>
            <p><strong>Primary Motive:</strong> {crimeData[hoveredState].primary_motive}</p>
            <strong>Common Types of Cybercrimes:</strong>
            <ul>
              {Object.entries(crimeData[hoveredState].common_types).map(([crime, count]) => (
                <li key={crime}>{crime.replace(/_/g, ' ').toUpperCase()}: {count}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default MapComponent;