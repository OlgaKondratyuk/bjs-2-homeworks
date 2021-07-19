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

  if (Number.isNaN(percent,deposit,creditAmount)){
    //const date1 = new Date(date);
    //const date2 = new Date();
    //totalMonth = ();
    //console.log (date1);
    let mortgageBody = (creditAmount - deposit);
    let S = mortgageBody;  let P = ((percent / 100)/12);
    let n = date;
    monthlyPayment = S * (P + P / (((1 + P)**n) - 1));
    totalAmount = (monthlyPayment * date) + deposit;
  } else {
    return "'Процентная ставка' содержит неправильное значение '${percent}'"
  };

  return totalAmount;
}

calculateTotalMortgage(10, 0, 50000, 12);