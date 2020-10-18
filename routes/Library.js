const express = require('express');
const booksController = require('../controllers/Books');
const router = express.Router();

/*this will display the main page having details about all the books*/
router.get('/', booksController.fetchAllBooks);
/*this will display details about the particular book (according the the bookid)*/
router.get('/books/:bookId', booksController.fetchBookDetail);
module.exports = router;
