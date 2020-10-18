const Book = require('../models/books');

exports.addBooks = (req, res, next) => {
	res.render('add-book', {
		title: 'AddBook',
		path: '/user/add-book',
	});
};

exports.booksIntoFile = (req, res, next) => {
	const books = new Book(req.body);
	books.add();
	res.redirect('/');
};
exports.fetchAllBooks = (req, res, next) => {
	Book.fetchAll((books) => {
		console.log('all books:-', books);
		res.render('library', {
			book: books,
			title: 'HomePage',
			path: '/',
		});
	});
};
exports.fetchBookDetail = (req, res, next) => {
	const id = req.params.bookId;

	Book.findById(id, (books) => {
		console.log('unique book by id:-', books);
		res.render('BookDetails', {
			book: books,
			title: 'bookDisplay',
			path: '/',
		});
	});
};
