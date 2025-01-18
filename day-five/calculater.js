function addNum(a, b) {
  return a + b;
}

function substractNum(a, b) {
  return a - b;
}

function multiplyNum(a, b) {
  return a * b;
}

function divideNum(a, b) {
  if (a === 0) {
    return "Error";
  }
  return a / b;
}

function operate(operator, a, b) {
  // return operator(a, b);
  switch (operator) {
    case "+":
      return addNum(a, b);

    case "-":
      return substractNum(a, b);

    case "*":
      return multiplyNum(a, b);

    case "/":
      return divideNum(a, b);

    default:
      break;
  }
}

let operator = "";
let a = 0;
let b = 0;
let decimal = false;

function setNumbers(num) {
  if (!operator) {
    return true;
  }
  return false;
}

function setOperators(operation) {
  if (a && !operation) {
    operator = operation;
  }
}

function checkOprator() {
  if (!operator) {
    return true;
  }

  return false;
}

function check() {
  if (operator && a && b) {
    return true;
  }

  return false;
}

function checkDecimal() {
  if (!decimal && !operator) {
    a += ".";
    display.textContent += ".";
    decimal = true;
  } else if (!decimal) {
    b += ".";
    display.textContent += ".";
    decimal = true;
  }
}

function backSpace() {
  if (!operator && a) {
    display.textContent = display.textContent.toString().slice(0, -1);
  } else if (op && !b) {
    display.textContent = display.textContent.toString().slice(0, -1);
  } else if (op && b) {
    display.textContent = display.textContent.toString().slice(0, -1);
  }
}

console.log(operate(addNum, 10, 5));
console.log(operate(substractNum, 10, 5));
console.log(operate(multiplyNum, 10, 5));
console.log(operate(divideNum, 10, 5));

// ------------------------* Calculator Project ------------------------* //
const container = document.querySelector(".container");
const addNumber = document.querySelector(".add-number");
const substractNumber = document.querySelector(".sub-number");
const multiplyNumber = document.querySelector(".multiply-number");
const divideNumber = document.querySelector(".devide-number");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");
