function getArrayParams(...arr) {
  if (arr.length==0){
    return 0;
  }
	let max = -Infinity;
	let min = Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i];
	}
	avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
  if (arr.length==0){
    return 0;
  }
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length==0){
    return 0;
  }
  let max = -Infinity;
	let min = Infinity;
  let difference = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
		if (arr[i] < min) {
			min = arr[i]
		}
		difference = max-min;
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length==0){
    return 0;
  }
let sumEvenElement = 0;
let sumOddElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sumEvenElement = sumEvenElement + arr[i];
  }
  if (arr[i] % 2 != 0) {
    sumOddElement = sumOddElement + arr[i];
  }
  difference = sumEvenElement - sumOddElement;
}
return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length==0){
    return 0;
  }
let sumEvenElement = 0;
let countEvenElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sumEvenElement += arr[i];
    countEvenElement++;
  }
  avg = sumEvenElement / countEvenElement;
}
return avg;
}

function makeWork (arrOfArr, func) {

}
