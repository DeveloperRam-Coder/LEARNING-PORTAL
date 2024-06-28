import React from 'react';
import './LoadingScreen.css'; // Import the CSS file





const LoadingScreen = () => {
  return (
    <div style={containerStyle}>
      <div className="bubbles-container">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
};

export default LoadingScreen;
