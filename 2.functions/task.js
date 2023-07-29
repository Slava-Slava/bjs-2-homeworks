function getArrayParams(...arr) {
//  let min = Infinity;
//  let max = -Infinity;
  let min = [0];
  let max = [0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
      else if (arr[i] < min) {
          min = arr[i]
      }
          sum += arr[i];
  }
  avg = parseInt(arr.length ? sum / arr.length:undefined.toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
