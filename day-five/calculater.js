function addNum(num1, num2) {
  return num1 + num2;
}

function substractNum(num1, num2) {
  return num1 - num2;
}

function multiplyNum(num1, num2) {
  return num1 * num2;
}

function divideNum(num1, num2) {
  if (num1 === 0) {
    return "Error";
  }
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return addNum(num1, num2);

    case "-":
      return substractNum(num1, num2);

    case "*":
      return multiplyNum(num1, num2);

    case "/":
      return divideNum(num1, num2);

    default:
      break;
  }
}

let operator = "";
let num1 = 0;
let num2 = 0;
let decimal = false;

function setNumbers(num) {
  if (operator === "") {
    num1 += num;
  } else {
    num2 += num;
  }
}

function setOperator(operation) {
  if (num1 && !operator) {
    operator = operation;
  }
  decimal = false;
}

function checkOprator() {
  if (!operator) {
    return true;
  }
  return false;
}

function check() {
  if (operator && num1 && num2) {
    return true;
  }
  return false;
}

function checkDecimal() {
  if (!decimal && !operator) {
    num1 += ".";
    display.textContent += ".";
    decimal = true;
  } else if (!decimal) {
    num2 += ".";
    display.textContent += ".";
    decimal = true;
  }
}

function backSpace() {
  if (!operator && num1) {
    display.textContent = display.textContent.toString().slice(0, -1);
  } else if (op && !num2) {
    display.textContent = display.textContent.toString().slice(0, -1);
  } else if (op && num2) {
    display.textContent = display.textContent.toString().slice(0, -1);
  }
}

console.log(operate(addNum, 10, 5));
console.log(operate(substractNum, 10, 5));
console.log(operate(multiplyNum, 10, 5));
console.log(operate(divideNum, 10, 5));

console.log(addNum(1, 3));

// -----------------* Calculator Project ----------------* //
const container = document.querySelector(".container");
const display = document.querySelector(".display");

// Symbols
const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("devide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");
const backspace = document.getElementById("backspace");

// Numbers
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

zero.addEventListener("click", () => {
  display.textContent += "0";
  setOperator(0);
});
