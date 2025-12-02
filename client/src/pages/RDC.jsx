import React from 'react';

function RDC() {
  const goToRdc = () => {
    window.open("https://rdc.iith.ac.in/home", "_blank");
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        textAlign: 'center',
        fontSize: '3rem'
      }}
    >
      <h2>Will be updated....</h2>

      <button
        onClick={goToRdc}
        style={{
          padding: '14px 28px',
          fontSize: '1.3rem',
          cursor: 'pointer',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#628B42',
          color: 'white',
          boxShadow: '0 6px 0 #628B10',   // 3D effect
          transition: 'all 0.1s ease'
        }}
        onMouseDown={(e) => {
          e.target.style.boxShadow = '0 3px 0 #1f7a34';
          e.target.style.transform = 'translateY(3px)';
        }}
        onMouseUp={(e) => {
          e.target.style.boxShadow = '0 6px 0 #1f7a34';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        Go to RDC Website
      </button>
    </div>
  );
}

export default RDC;
