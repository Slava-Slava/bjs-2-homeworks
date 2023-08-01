function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) {
		return;
	} else {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function () {
	if (!this.marks) {
		return 0;
	} else {
		return this.marks.reduce((acc, marks, index, arr) => acc + marks / arr.length,0);
	}
}

Student.prototype.exclude = function (reason) {
  
}
