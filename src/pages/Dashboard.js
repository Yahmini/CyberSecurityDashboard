import React from 'react';
import PieChart from '../components/PieChart';
import BarGraph from '../components/BarGraph';
import AwarenessVideos from '../components/AwarenessVideos';
import '../App.css';

function Dashboard() {
  return (
    <div className="dashboard">
      
      <div className="charts-container">
        <div className="chart">
          <h2>Cyber Attack Types</h2>
          <PieChart />
        </div>
        <div className="chart">
          <h2>Monthly Cyber Crimes</h2>
          <BarGraph />
        </div>
      </div>
      <div className="videos-section">
        <AwarenessVideos />
      </div>
    </div>
  );
}

export default Dashboard;