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
// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function worker2(arr) {
  let result = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];

    if (arr[i] < min) min = arr[i];

  }
  result = max - min;
  return result;
}


// Задание 3
function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let num = func(arrOfArr[i]);
    if (num > max) max = num;
  }
  return max;
}


let myArr = ([[10, 10, 11], [20, 10]]);
console.log(makeWork(x, worker));
console.log(makeWork(x, worker2));


//console.log(result);

//arrOfArr = ([[0, 0, 0], [-1, -100]]);
//console.log(mincer(arrOfArr, worker));

//arrOfArr = ([[-10, -20, -40], [10, 20, 30]]);
//mincer(arrOfArr,316 worker2);
//arrOfArr = ([[0, 0, 0], [-1, -99]]);
//mincer(arrOfArr, worker2);
//console.log('max: ' + max);