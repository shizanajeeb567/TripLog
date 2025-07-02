const express= require('express');
const router= express.Router();
const {createJournal, getUserJournals, searchByCountryOrCity
}= require('../controllers/journalController');
const authMiddleware = require('../middlewares/authMiddleware');
router.post('/',authMiddleware, createJournal);
router.get('/my-journals', authMiddleware, getUserJournals);
router.get('/search', searchByCountryOrCity);
module.exports=router;