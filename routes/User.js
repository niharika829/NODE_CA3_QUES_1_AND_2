const express = require('express');
const router = express.Router();
const bookController = require('../controllers/Books');

/*when ever user will hit the url having '/add-book' we will go to the addBooks part of the controller*/
router.get('/add-book', bookController.addBooks);

/*when ever user will hit the url having '/books' we will go to the booksIntoFile part of the controller*/
router.post('/books', bookController.booksIntoFile);

module.exports = router;
