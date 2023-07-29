"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let root1 = -b / (2 * a);
		arr.push(root1);
		return arr;
	} else if (discriminant > 0) {
		let root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root3 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root2,root3);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount) || Number.isNaN(countMonths)<0) {
		return false
	} else {
		let interestRate = percent / 100 / 12;
		let loanBody = amount - contribution;
		let months = countMonths;
		let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** months) - 1)))
		let totalAmount = (monthlyPayment * countMonths).toFixed(2);
		return parseInt(totalAmount);
	}
}