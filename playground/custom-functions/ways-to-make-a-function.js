// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

// Anonymous function
// function (firstName) {
//   return `Dr ${firstName}`;
// }

// Wont work before it's declared
doctorize('Mark');

// Does work before it's declared and it's 'hoisted'
doctorize2('Mark');

// Function expression
// Stores function value as a variable. Technically an anonymous function.
const doctorise = function (firstName) {
  return `Dr ${firstName}`;
};

function doctorize2(firstName) {
  return `Dr ${firstName}`;
}
