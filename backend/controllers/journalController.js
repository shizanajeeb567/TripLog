const journalService = require('../services/journalService');

exports.createJournal = async (req, res) => {
  try {
    const result = await journalService.createJournal(req.user.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Create journal error:", error);
    res.status(400).json({ message: 'Cannot create journal' });
  }
};

exports.getUserJournals = async (req, res) => {
  try {
    const result = await journalService.getJournalsByUser(req.user.id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Get user journals error:", error);
    res.status(400).json({ message: 'Cannot get journal' });
  }
};

exports.searchByCountryOrCity = async (req, res) => {
  try {
    const { country, city } = req.query;
    const results = await journalService.searchJournal(country, city);
    res.status(200).json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Search failed' });
  }
};


