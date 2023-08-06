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
		} else if (newConditionr > 0) {
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
	constructor() {
		super();
		this.type = magazine;
	}
}
class Book extends PrintEditionItem {
	constructor() {
		this.author = author
		this.type = book;

	}
}
class NovelBook {
	constructor() {
		this.type = novel;
	}
}
class FantasticBook {
	constructor() {
		this.type = fantastis;;
	}
}
class DetectiveBook {
	constructor() {
		this.type = detective;
	}
}