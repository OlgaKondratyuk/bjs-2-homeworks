function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-((4*a)*c);
  if (D > 0){
    let x1 = (-b + Math.sqrt(D) )/(2 * a);
    let x2 = (-b - Math.sqrt(D) )/(2 * a);
    arr[0] = x1;
    arr[1] = x2;
} else if (D === 0) {
  let x = -b / (2 * a);
  arr[0] = x;
}
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //let mortgageBody = amount - contribution



  // код для задачи №2 писать здесь

  return totalAmount;
}

//calculateTotalMorgage(10, 0, 50000, 12);
