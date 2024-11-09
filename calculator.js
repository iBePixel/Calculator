const screen = document.querySelector("#screen");
const digits = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
let selectedOperator = false;
let firstNum = "";
let secondNum = "";
let operator = "";

function add(num1, num2) {
  if (num1.includes(".") || num2.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 + num2;
    return result;
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 + num2;
    return result;
  }
}

function subtract(num1, num2) {
  if (num1.includes(".") || num2.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 - num2;
    return result;
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 - num2;
    return result;
  }
}

function multiply(num1, num2) {
  if (num1.includes(".") || num2.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 * num2;
    return result;
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 * num2;
    return result;
  }
}

function divide(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "Cannot divide by 0";
  } else if (num1.includes(".") || num2.includes(".")) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 / num2;
    return result;
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 / num2;
    return result;
  }
}

function updateScreen(value) {
  screen.textContent = value;
}

function addNumListeners() {
  for (let i = 0; i < digits.length; i++) {
    let key = digits[i].textContent;
    key = parseInt(key);
    digits[i].addEventListener("click", () => {
      if (selectedOperator == false) {
        firstNum = firstNum.concat(key);
        updateScreen(firstNum);
      } else {
        secondNum = secondNum.concat(key);
        updateScreen(secondNum);
      }
    });
  }
}

function addOperatorListeners() {
  for (let i = 0; i < operators.length; i++) {
    let symbol = operators[i].textContent;

    if (operators[i].textContent === "+") {
      operators[i].addEventListener("click", () => {
        if (firstNum == "") {
        } else if (secondNum != "") {
          firstNum = operate(firstNum, secondNum, operator);
          operator = "plus";
          selectedOperator = true;
        } else {
          operator = "plus";
          selectedOperator = true;
        }
      });
    } else if (operators[i].textContent == "-") {
      operators[i].addEventListener("click", () => {
        if (firstNum == "") {
        } else if (secondNum != "") {
          firstNum = operate(firstNum, secondNum, operator);
          operator = "minus";
          selectedOperator = true;
        } else {
          operator = "minus";
          selectedOperator = true;
        }
      });
    } else if (operators[i].textContent === "X") {
      operators[i].addEventListener("click", () => {
        if (firstNum == "") {
        } else if (secondNum != "") {
          firstNum = operate(firstNum, secondNum, operator);
          operator = "multiply";
          selectedOperator = true;
        } else {
          operator = "multiply";
          selectedOperator = true;
        }
      });
    } else if (operators[i].textContent === "/") {
      operators[i].addEventListener("click", () => {
        if (firstNum == "") {
        } else if (secondNum != "") {
          firstNum = operate(firstNum, secondNum, operator);
          operator = "divide";
          selectedOperator = true;
        } else {
          operator = "divide";
          selectedOperator = true;
        }
      });
    } else if (operators[i].textContent == "=") {
      operators[i].addEventListener("click", () => {
        if (firstNum == "" || secondNum == "") {
        } else {
          operate(firstNum, secondNum, operator);
        }
      });
    }
  }
}

function operate(first, second, operator) {
  if (operator == "plus") {
    let g = add(first, second);
    updateScreen(g);
    firstNum = "";
    secondNum = "";
    selectedOperator = false;
    return g;
  } else if (operator == "minus") {
    let g = subtract(first, second);
    updateScreen(g);
    firstNum = "";
    secondNum = "";
    selectedOperator = false;
    return g;
  } else if (operator == "multiply") {
    let g = multiply(first, second);
    updateScreen(g);
    firstNum = "";
    secondNum = "";
    selectedOperator = false;
    return g;
  } else if (operator == "divide") {
    let g = divide(first, second);
    updateScreen(g);
    firstNum = "";
    secondNum = "";
    selectedOperator = false;
    return g;
  }
}

addEventListener("keydown", (g) => {
  if (isFinite(g.key)) {
    if (selectedOperator == false) {
      firstNum = firstNum.concat(g.key);
      updateScreen(firstNum);
    } else {
      secondNum = secondNum.concat(g.key);
      updateScreen(secondNum);
    }
  }
});

decimal.addEventListener("click", () => {
  if (selectedOperator == false) {
    if (firstNum.includes(".")) {
    } else {
      firstNum = firstNum.concat(".");
      updateScreen(firstNum);
    }
  } else {
    if (secondNum.includes(".")) {
    } else {
      secondNum = secondNum.concat(".");
      updateScreen(secondNum);
    }
  }
});

backspace.addEventListener("click", () => {
  if (selectedOperator == false) {
    if (firstNum != "") {
      firstNum = firstNum.slice(0, -1);
      updateScreen(firstNum);
    }
  } else {
    if (secondNum != "") {
      secondNum = secondNum.slice(0, -1);
      updateScreen(secondNum);
    }
  }
});

clear.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  selectedOperator = false;
  updateScreen("");
});

addNumListeners();
addOperatorListeners();
