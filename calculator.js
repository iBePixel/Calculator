const screen = document.querySelector("#screen");
const pad = document.querySelectorAll("#numPad")

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

let firstNum = '1'
let secondNum
let operator

function updateScreen(number) {
    screen.textContent = number;
}

function addListeners(){
    for (let i = 0; i < pad.length; i++){
        let key = pad[i].textContent
        key = parseInt(key)
        if (key != NaN) {
            pad[i].addEventListener("click", () => {
                firstNum = firstNum.concat(key)
                updateScreen(firstNum);
            })
        }
    }
}