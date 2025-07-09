import React from 'react';

const Landing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Trip Log</h1>
      <p style={styles.subheading}>Capture your travel memories beautifully.</p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #aec6f7, #d6a8f7)', // pastel blue to pastel purple
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#f8f8f8',
  }
};

export default Landing;
