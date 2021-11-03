compareArrays([8, 9], [6]) // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]) // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]) // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]) // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((value, index) => value === arr2[index]);
  // Ваш код

  return result; // boolean
}



function advancedFilter(arr) {
  let result;
  result = arr.filter(item => item >= 0 && item % 3 === 0);
  result = result.map((item, idx) => {
    const newItem = item * 10;
    return newItem
  });

  return result;
}
advancedFilter([-1,6,-9,3]); // [60,30]
advancedFilter([-10,-21,12,123]); // [120, 1230]
advancedFilter([-1,-2]); // []



