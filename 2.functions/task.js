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
function getSumsOfArray(arrOfArr) {
  let sum = 0;
  let arrSum = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = 0;
    for (let j = 0; j < arrOfArr[i].length; j++) {
      sum += arrOfArr[i][j];
    }
    arrSum[i] = sum;

  }
  return arrSum;
}

function calcMax(arr) {
  let max = -99999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let x = ([[1, 2, 3, 4], [5, 6, 7, 8], [10, 20]]);
//let pista = ([[20,30], [5, 6]]);

let calcSum = getSumsOfArray(x);
console.log('sumArr: ' + calcSum);

let max = calcMax(calcSum);
console.log('max: ' + max);

// Задание 3
function getSumsOfArray(arrOfArr) {
  let sum = 0;
  let arrSum = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = 0;
    for (let j = 0; j < arrOfArr[i].length; j++) {
      sum += arrOfArr[i][j];
    }
    arrSum[i] = sum;

  }
  return arrSum;
}

function calcMax(arr) {
  let max = -99999;
  let min = 10000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return  { min:min, max: max };
}

function worker2(obj){
  let calcDifference = (obj.max - obj.min);
  //console.log(obj.min);
  //console.log(obj.max);

  return calcDifference;
}

let x = ([[1, 2, 3, 4], [5, 6, 7, 8], [10, 20]]);
let calcSum = getSumsOfArray(x);
//console.log('sumArr: ' + calcSum);

let minMaxObj = calcMax(calcSum);

worker2(minMaxObj);
//console.log('max: ' + max);
