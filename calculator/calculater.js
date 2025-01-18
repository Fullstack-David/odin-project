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

// Kollar på värdet av operator och skickar med num1 och num2
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
    num1 += num; // konkatering: det första stränget + det andra: "2" + "1" = "21"
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
    num1 = num1.slice(0, -1);
  } else if (operator && !num2) {
    display.textContent = display.textContent.toString().slice(0, -1);
    operator = "";
  } else if (operator && num2) {
    display.textContent = display.textContent.toString().slice(0, -1);
    num2 = num2.slice(0, -1);
  }
}

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

// Symbols-Event
add.addEventListener("click", () => {
  if (checkOprator()) {
    display.textContent += "+";
    setOperator("+");
  }
});

substract.addEventListener("click", () => {
  if (checkOprator()) {
    display.textContent += "-";
    setOperator("-");
  }
});

multiply.addEventListener("click", () => {
  if (checkOprator()) {
    display.textContent += "*";
    setOperator("*");
  }
});

divide.addEventListener("click", () => {
  if (checkOprator()) {
    display.textContent += "/";
    setOperator("/");
  }
});

equal.addEventListener("click", () => {
  if (check()) {
    let answer = operate(operator, num1, num2);
    display.textContent = answer;
    num1 = answer;
    num2 = "";
    operator = "";
  }
});

dot.addEventListener("click", checkDecimal);

backspace.addEventListener("click", backSpace);

clear.addEventListener("click", () => {
  display.textContent = "";
  num1 = "";
  num2 = "";
  operator = "";
  decimal = false;
});

// Numbers-Event
zero.addEventListener("click", () => {
  display.textContent += "0";
  setNumbers(0);
});

one.addEventListener("click", () => {
  display.textContent += "1";
  setNumbers(1);
});

two.addEventListener("click", () => {
  display.textContent += "2";
  setNumbers(2);
});

three.addEventListener("click", () => {
  display.textContent += "3";
  setNumbers(3);
});

four.addEventListener("click", () => {
  display.textContent += "4";
  setNumbers(4);
});

five.addEventListener("click", () => {
  display.textContent += "5";
  setNumbers(5);
});

six.addEventListener("click", () => {
  display.textContent += "6";
  setNumbers(6);
});

seven.addEventListener("click", () => {
  display.textContent += "7";
  setNumbers(7);
});

eight.addEventListener("click", () => {
  display.textContent += "8";
  setNumbers(8);
});

nine.addEventListener("click", () => {
  display.textContent += "9";
  setNumbers(9);
});
