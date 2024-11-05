const screen = document.querySelector("#screen");
const digits = document.querySelectorAll("#number");
const operators = document.querySelectorAll('#operator');
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
let operator = ''

function updateScreen(number) {
    screen.textContent = number;
}

function addNumListeners(){
    for (let i = 0; i < digits.length; i++){
        let key = digits[i].textContent;
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

function addOperatorListeners(){
    for (let i = 0; i < operators.length; i++){
        let symbol = operators[i].textContent;

        
            switch(operators[i].textContent) {
                case '+': 
                    operators[i].addEventListener("click", () => {
                        if(firstNum == ''){
                            
                        }
                        else if(secondNum != ''){

                        }
                        else {
                            operator = 'plus'
                            selectedOperator = true; 
                        }

                })
                case '-':
                    operators[i].addEventListener("click", () => {
                        if(firstNum == ''){
                            
                        }
                        else if(secondNum != ''){
                            
                        }
                        else {
                            operator = 'minus'
                            selectedOperator = true; 
                        }
                    })
                case 'X':
                    operators[i].addEventListener("click", () => {
                        if(firstNum == ''){
                            
                        }
                        else if(secondNum != ''){
                            
                        }
                        else {
                            operator = 'multiply'
                            selectedOperator = true; 
                        }
                    })
                case '/':
                    operators[i].addEventListener("click", () => {
                        if(firstNum == ''){
                            
                        }
                        else if(secondNum != ''){
                            
                        }
                        else {
                            operator = 'divide'
                            selectedOperator = true; 
                        }
                    })
                case '=':
                    operators[i].addEventListener("click", () => {
                        if(firstNum == ''){
                            
                        }
                        else if(secondNum != ''){
                            
                        }
                        else {
                            
                        }
                    })
        }
    }
}

addOperatorListeners()