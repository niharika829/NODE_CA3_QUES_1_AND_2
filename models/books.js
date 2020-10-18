const fs = require('fs');
const path = require('path');
/*path to the json file 'books.json' inside data folder*/
const filePath = path.join(__dirname, '../data', 'books.json');

/*read the JSON file , if there is an error then display it on the console, otherwise return the parsed data*/
const getBooksFromJsonFile = (cb) => {
	fs.readFile(filePath, (err, data) => {
		if (err) return cb([]);
		else return cb(JSON.parse(data));
	});
};

class Book {
	constructor(obj) {
		/*all the details of the new book given by the user has been given to the constructor in the form of an object*/
		this.title = obj.title;
		this.price = obj.price;
		this.description = obj.desc;
	}
	add() {
		fs.readFile(filePath, (err, data) => {
			/*throw an error if file is not present*/
			let books = [];
			if (!err) {
				books = JSON.parse(data);
			}
			this.bookId = Math.random().toString(); /*a random unique number as ID for each book to be stored*/
			this.createdAt = new Date().toLocaleDateString(); /*date at which book was created*/
			/*this refers to the current object*/
			books.push(
				this
			); /*push all the details like bookId,title,price,description,createdAt into the books array*/
			/*write the details of the book into the file (in object form)*/
			fs.writeFile(filePath, JSON.stringify(books), (err) => {
				/*display on console/terminal if error occurs*/
				if (err) console.log(err);
			});
		});
	}
	/*if a function is static then we dont need an object to call this function outside the class,
	we can simply call it with name of the class like:- className.staticFunctionName*/
	static fetchAll(cb) {
		/*passed the callback to the function*/
		getBooksFromJsonFile(cb);
	}
	static findById(id, cb) {
		/*below mentioned function will return all the books details from the JSON file*/
		getBooksFromJsonFile((books) => {
			/*we will filter out from the data,to get the details of the specific book with the help of the unique id*/
			const uniqueBook = books.filter((Details) => {
				return Details.bookId === id;
			});
			/*return the details of the specific book*/
			cb(uniqueBook);
		});
	}
}
module.exports = Book;
