const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data', 'books.json');

const getBooksFromJsonFile = (cb) => {
	fs.readFile(filePath, (err, data) => {
		if (err) return cb([]);
		else return cb(JSON.parse(data));
	});
};

class Book {
	constructor(obj) {
		this.title = obj.title;
		this.price = obj.price;
		this.description = obj.desc;
	}
	add() {
		fs.readFile(filePath, (err, data) => {
			let books = [];
			if (!err) {
				books = JSON.parse(data);
			}
			this.bookId = Math.random().toString();
			this.createdAt = new Date().toLocaleDateString();
			books.push(this);
			fs.writeFile(filePath, JSON.stringify(books), (err) => {
				if (err) console.log(err);
			});
		});
	}
	static fetchAll(cb) {
		getBooksFromJsonFile(cb);
	}
	static findById(id, cb) {
		getBooksFromJsonFile((books) => {
			const uniqueBook = books.filter((Details) => {
				return Details.bookId === id;
			});
			cb(uniqueBook);
		});
	}
}
module.exports = Book;
