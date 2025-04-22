import React from 'react';
import '../App.css';

function AwarenessVideos() {
  const videos = [
    {
      id: 'inWWhr5tnEA',
      title: 'Cyber Security In 7 Minutes'
    },
    {
      id: 'sdpxddDzXfE',
      title: 'Phishing Explained'
    },
    {
      id: '-KL9APUjj3E',
      title: 'Ransomware Attack Simulation'
    }
  ];

  return (
    <div className="videos-container">
      <h2>Cyber Security Awareness Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwarenessVideos;

