const screen = document.querySelector("#screen");
const digits = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
let selectedOperator = false;

function add(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (num1 == 0 || num2 == 0) {
    return 'Cannot divide by 0'
  } else {
    let result = num1 / num2;
    return result;
  }
}

let firstNum = "";
let secondNum = "";
let operator = "";

function updateScreen(number) {
  screen.textContent = number;
}

clear.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  selectedOperator = false;
  updateScreen("");
});

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

addNumListeners();

addEventListener("keydown", (g) => {
  if(isFinite(g.key)){
    if (selectedOperator == false) {
      firstNum = firstNum.concat(g.key);
      updateScreen(firstNum);
    } else {
      secondNum = secondNum.concat(g.key);
      updateScreen(secondNum);
    }
  }
})

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

addOperatorListeners();

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
