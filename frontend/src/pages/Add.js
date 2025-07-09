import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    country: '',
    city: '',
    hotels: '',
    budget: '',
    description: '',
    rating: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/api/journal', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Journal added!');
      navigate('/Journal');
    } catch (err) {
      console.error('Add journal failed:', err);
      alert('Failed to add journal.');
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={styles.heading}>Add Journal</h2>

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="hotels"
          placeholder="Hotels"
          value={form.hotels}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="text"
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          style={{ ...styles.input, resize: 'vertical' }}
        />

        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Rating</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
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
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#a78bfa',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
};

export default Add;
