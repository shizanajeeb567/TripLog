import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for custom styling

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Trip Log</div>
      <div>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#282c34',
    padding: '10px 20px',
    color: '#fff',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
    fontSize: '1rem',
  },
};

export default Navbar;
