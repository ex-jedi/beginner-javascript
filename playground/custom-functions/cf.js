// Function definition
function calculateBill(billAmount, taxRate) {
  // This is the function body
  // console.log('Running Calculate Bill!');

  const total = billAmount * (1 + taxRate);

  return total;
}

const myBill = 384;
const myTax = 0.26;

//  Function call or *run*
const myTotal = calculateBill(myBill, myTax);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Karl');
const kate = 220;

myTotal3 = calculateBill(kate + 55, 0.19);

// console.log(myTotal3);

function doctorize(name) {
  return `Dr ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize('Mark')));
