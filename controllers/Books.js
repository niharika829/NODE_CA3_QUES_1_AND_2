const Book = require('../models/books');

/*to render the form page where user can give details about the new book to be added*/
exports.addBooks = (req, res, next) => {
	/*rendered to add-book.ejs from views folder along with values passed under the names of 'path' and 'title'*/
	res.render('add-book', {
		title: 'AddBook',
		path: '/user/add-book',
	});
};

/*after user has given the details of the new book and click on the submit button ,the form will perform its action
and will hit the url to '/books' which will call fir this part in controllers, now we are goin to add the details of book
given by the user in to a json file.*/
exports.booksIntoFile = (req, res, next) => {
	/*we have given all the data provided by the user to the model contructor */
	const books = new Book(req.body);
	/*add function inside the model , will add the details into the JSON file*/
	books.add();
	/*after adding the data we will move back to the main page*/
	res.redirect('/');
};

/*to display all the books on the home page*/
exports.fetchAllBooks = (req, res, next) => {
	/*called the static function 'fetchAll' from the model*/
	Book.fetchAll((books) => {
		/*it will return the details of all the books*/
		console.log('all books:-', books);
		/*render to the view 'library.ejs' ,all the details of books are send to the page under the name of 'book',
		along with values passed under the names of 'path' and 'title'*/
		res.render('library', {
			book: books,
			title: 'HomePage',
			path: '/',
		});
	});
};

/* whenever a user will click on a particular name of book this function will be invoked , here we will take the id of the 
book clicked through 'req.params.bookId' and save it under constant 'id'*/
exports.fetchBookDetail = (req, res, next) => {
	const id = req.params.bookId;
	/*called the static function 'findById' from the model by passing the if fetched and a callback*/
	Book.findById(id, (books) => {
		/*it will return the detail of the particular book*/
		console.log('unique book by id:-', books);
		/*render to 'BookDetails.ejs' under views folder and passed the detail of the particular book under the name of 
		'book' , along with values passed under the names of 'path' and 'title'*/
		res.render('BookDetails', {
			book: books,
			title: 'bookDisplay',
			path: '/',
		});
	});
};
