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
		arr.push(root2, root3);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = parseInt(percent / 100 / 12);
	let S = parseInt(amount - contribution);
	let n = parseInt(countMonths);
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalSum = (payment * n).toFixed(2);
	return parseInt(totalSum);
}