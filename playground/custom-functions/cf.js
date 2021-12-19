let bill = 100;
const taxRate = 0.42;

// Function definition
function calculateBill() {
  // This is the function body
  console.log('Running Calculate Bill!');

  const total = bill * 1 * taxRate;

  return total;
}

//  Function call or *run*
const myTotal = calculateBill();
bill = 200;
const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);
