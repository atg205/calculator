let firstNumber = "";
let secondNumber = "";
let operator = add; 

function add(a = 0, b = 0){
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a , b){
    return a / b
}

function numberInput(number) {
    firstNumber += number;
}
