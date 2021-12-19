// Function definition
function calculateBill(billAmount, taxRate) {
  // This is the function body
  console.log('Running Calculate Bill!');

  const total = billAmount * (1 + taxRate);

  return total;
}

//  Function call or *run*
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(500, 0.13);
console.log(myTotal, myTotal2);
