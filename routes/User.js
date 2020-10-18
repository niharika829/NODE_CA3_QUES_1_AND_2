const express = require('express');
const router = express.Router();
const bookController = require('../controllers/Books');
router.get('/add-book', bookController.addBooks);
router.post('/books', bookController.booksIntoFile);
module.exports = router;
