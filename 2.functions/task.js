// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = 99;
  max = -99;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2
function worker(arr) {
  let sum = 0;
  let arrSum = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    arrSum[i] = sum;

  }
  return arrSum;
}

function mincer(inArr, func) {
  arr = func(inArr);

  let max = -99999;
  let min = 100000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min: min, max: max };
}
// Задание 3

function worker2(obj) {
  let calcDifference = (obj.max - obj.min);
  //console.log(obj.min);
  //console.log(obj.max);

  return calcDifference;
}


let arrOfArr = ([[1, 2, 3], [4, 5, 6]]);
let retVal = mincer(arrOfArr, worker);
let szam = worker2(retVal);
console.log(szam);

