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
function worker (arr) {
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let arrOfArr = ([[1, 2, 3], [4, 5, 6]]);
  mincer(arrOfArr, worker);
    arrOfArr = ([[10, 10, 11], [20, 10]]);
  mincer(arrOfArr, worker);
    arrOfArr = ([[0, 0, 0], [-1, -100]]);
  mincer(arrOfArr, worker);
// Задание 3

function worker2(obj){
  let calcDifference = (obj.max - obj.min);
  //console.log(obj.min);
  //console.log(obj.max);

  return calcDifference;
}
let minMaxObj = calcMax(calcSum);

worker2(minMaxObj);

arrOfArr = ([[-10, -20, -40], [10, 20,30]]);
mincer(arrOfArr, worker2);
arrOfArr = ([[0, 0, 0], [-1, -99]]);
mincer(arrOfArr, worker2);
//console.log('max: ' + max);
