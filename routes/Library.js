const express = require('express');

const booksController = require('../controllers/Books');
const router = express.Router();

router.get('/', booksController.fetchAllBooks);
router.get('/books/:bookId', booksController.fetchBookDetail);
module.exports = router;
