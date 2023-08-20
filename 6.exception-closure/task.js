'use strict'

function parseCount(n) {
	const value = Number.parseFloat(n);
	if (Number.isNaN(value)) {
		throw new Error("Невалидное значение");
	}
	return value;
}

function validateCount(n) {
	try {
		return parseCount(n);
	} catch (error) {
		return error;
	}
}
class Triangle {
	constructor(x, y, z) {
		if (x + y < z || x + z < y || z + y < x) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.x = x;
		this.y = y;
		this.z = z;

	}
	get perimeter() {
		return this.x + this.y + this.z;
	}
	get area() {
		const p = this.perimeter / 2;
		const S = Number.parseFloat((Math.sqrt(p * (p - this.x) * (p - this.y) * (p - this.z))).toFixed(3));
		return S;
	}
}

function getTriangle(x, y, z) {
	try {
		return new Triangle(x, y, z);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}