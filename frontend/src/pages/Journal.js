import React from 'react';
import { useNavigate } from 'react-router-dom';

const Journal = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Trip Journal</h1>
        <button style={styles.button} onClick={() => navigate('/Add')}>
          Add Journal
        </button>
        <button style={styles.button} onClick={() => navigate('/Search')}>
          Search Journal
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #c2e9fb, #dcb0ff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#a78bfa',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '8px 0',
    width: '100%',
    transition: 'background 0.3s ease',
  },
};

export default Journal;
