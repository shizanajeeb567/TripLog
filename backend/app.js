const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authroutes');
const journalRoutes = require('./routes/journalRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/journal', journalRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Router not found' });
});

module.exports = app;
