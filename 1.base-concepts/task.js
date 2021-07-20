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

function calculateTotalMortgage(percent, deposit, creditAmount, date) {
  let totalAmount;

  //if (isNaN("${percent}")){
  /// return `Параметр "Процентная ставка" содержит неправильное значение "${percent}" `
  //};
  //if (isNaN("${deposit}")){
  //return `Параметр "Сума депозита" содержит неправильное значение "${deposit}"`
  //};
  //if (isNaN("${creditAmount}")){
  //return `Параметр "сума кредита" содержит неправильное значение "${creditAmount}"`
  //};
  //if ()

  const date1 = new Date(date);
  const date2 = new Date();
  let dateOneYear = date1.getFullYear();
  let dateTwoYear = date2.getFullYear();
  let dateOneMonth = date1.getMonth();
  let dateTwoMonth = date2.getMonth();
  const amountMonth = ((dateTwoYear - dateOneYear) * 12) - (dateTwoMonth + dateOneMonth);
  let mortgageBody = (creditAmount - deposit);
  let S = mortgageBody;
  let P = ((percent / 100) / 12);
  let n = amountMonth;
  monthlyPayment = S * (P + P / (((1 + P) ** n) - 1));
  totalAmount = ((monthlyPayment * n) + deposit).toFixed(2);

  return totalAmount;
}
calculateTotalMortgage(10, 1000, 20000, 24)


