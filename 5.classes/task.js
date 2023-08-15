class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(newCondition) {
		if (newCondition < 0) {
			this._state = 0;
		} else if (newCondition > 100) {
			this._state = 100;
		} else {
			this._state = newCondition
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, ) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';

	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, ) {
		super(author, name, releaseDate, pagesCount, );
		this.type = 'novel';
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, ) {
		super(author, name, releaseDate, pagesCount, );
		this.type = 'fantastic';
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, ) {
		super(author, name, releaseDate, pagesCount, );
		this.type = 'detective';
	}
}
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		for (const book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			const book = this.books[i];
			if (book.name === bookName){
				this.books.splice(i, 1);
			return book;
		}
	}
	return null;
 }
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}
	addMarks(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}
		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}
		return this.marks[subject].reduce((acc, mark) => acc + mark / this.marks[subject].length, 0); //формула нахождения средних элементов
	}
	getAverage() {
		const subjects = Object.keys(this.marks);
		return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject)/subjects.length, 0);
	}
}