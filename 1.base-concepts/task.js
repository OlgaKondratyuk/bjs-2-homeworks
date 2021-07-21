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

  if (isNaN(percent)) {
    return "Параметр 'Процентная ставка' содержит неправильное значение '${percent}'"
  };
  if (isNaN(deposit)){
    return "Параметр 'Начальный взнос' содержит неправильное значение '${deposit}'"
  };
  if (isNaN(creditAmount)){
    return "Параметр 'Общая стоимость' содержит неправильное значение '${creditAmount}'"
  };

  const date1 = new Date(date);
  const currentDate = new Date();
  let dateOneYear = date1.getFullYear();
  let currentYear = currentDate.getFullYear();
  let dateOneMonth = date1.getMonth();
  let currentMonth = currentDate.getMonth();
  const amountMonth = ((dateOneYear - currentYear) * 12) - currentMonth + dateOneMonth;
  let mortgageBody = (creditAmount - deposit);
  let S = mortgageBody;
  let P = ((percent / 100) / 12);
  let n = amountMonth;
  monthlyPayment = S * (P + P / (((1 + P) ** n) - 1));
  totalAmount = (monthlyPayment * n).toFixed(2);
  totalAmount = Number();
  return totalAmount;
}
calculateTotalMortgage(10, 1000, 20000, 24)


