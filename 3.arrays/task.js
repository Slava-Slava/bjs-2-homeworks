function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((n, index) => n === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, age, index, arr) => {
		acc += age;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0)
	return result;
}