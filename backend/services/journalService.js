const Journal = require('../models/Journal');

exports.createJournal = async (userId, data) => {
  const journal = new Journal({
    userId,
    country: data.country,
    city: data.city,
    hotels: data.hotels,
    budget: data.budget,
    description: data.description,
    rating: data.rating,
    Images: data.images
  });
  return await journal.save();
};

exports.getJournalsByUser = async (userId) => {
  return await Journal.find({ userId });
};

exports.searchJournal = async (country, city) => {
  const query = {};
  if (country) query.country = { $regex: country, $options: 'i' };
  if (city) query.city = { $regex: city, $options: 'i' };
  return await Journal.find(query);
};
