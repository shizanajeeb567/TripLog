import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData);
      localStorage.setItem('token', res.data.token);
      navigate('/journal'); // updated
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #aec6f7, #d6a8f7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#fff',
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(5px)',
  },
  input: {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    background: '#9b82d1',
    color: '#fff',
    cursor: 'pointer',
  },
  error: {
    color: '#ffdddd',
    background: '#ff4d4d',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '0.9rem',
  },
};

export default Register;
