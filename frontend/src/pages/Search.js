import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState({ country: '', city: '' });
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/journal/search`, {
        params: search,
      });
      setResults(res.data);
      setError('');
    } catch (err) {
      console.error('Search failed:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Search Journals</h2>

        <input
          type="text"
          name="country"
          placeholder="Search by Country"
          value={search.country}
          onChange={(e) => setSearch({ ...search, country: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          value={search.city}
          onChange={(e) => setSearch({ ...search, city: e.target.value })}
          style={styles.input}
        />

        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {results.length > 0 && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4 style={{ color: '#fff' }}>Results:</h4>
            {results.map((item) => (
              <div key={item._id} style={styles.resultCard}>
                <p><strong>{item.city}, {item.country}</strong></p>
                <p>{item.description}</p>
                <p>Budget: {item.budget}</p>
                <p>Hotel: {item.hotels}</p>
                <p>Rating: {'⭐'.repeat(item.rating)}</p>
              </div>
            ))}
          </div>
        )}
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
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
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
  error: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '12px',
    color: '#fff',
  },
};

export default Search;
