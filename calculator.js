const screen = document.querySelector("#screen");
const digits = document.querySelectorAll("#number");
let selectedOperator = false;

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

let firstNum = ''
let secondNum = ''
let operator

function updateScreen(number) {
    screen.textContent = number;
}

function addNumListeners(){
    for (let i = 0; i < digits.length; i++){
        let key = digits[i].textContent
        key = parseInt(key)
        digits[i].addEventListener("click", () => {
            if (selectedOperator == false){
                firstNum = firstNum.concat(key)
                updateScreen(firstNum);
            }
            else {
                secondNum = secondNum.concat(key)
                updateScreen(secondNum);
            }
        })
    }
}

addNumListeners()