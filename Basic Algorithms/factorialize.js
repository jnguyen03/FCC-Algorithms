//Return the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  var total = 1;
  for (var i = 2; i <= num; i++) {
     total = i * total;
  }
  return total;
}

factorialize(5);
