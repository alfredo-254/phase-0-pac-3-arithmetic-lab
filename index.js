// Addition
function add(a, b) {
    return a + b;
  }
  
  // Subtract
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplication
  function multiply(a, b) {
    return a * b;
  }
  
  // Division
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
}
// makeInt
function makeInt(n) {
    let base=10
    return parseInt(n, 10);
}
// increment (n)
function increment(n) {
    return n + 1;
  }

//   decrement(n)
function decrement(n) {
    return n - 1;
  }
//preserveDcimal
function preserveDecimal(n) {
    return parseFloat(n);
}