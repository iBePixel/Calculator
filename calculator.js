const screen = document.querySelector("#screen");

function add(num1, num2) {
    let result = num1 + num2;
    return result
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result
}

let firstNum
let secondNum
let operator

function updateScreen(number) {
    screen.textContent = number;
}