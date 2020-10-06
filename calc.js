let firstNumber = "";
let secondNumber = "";
let values = [null, null, null];
let display = document.getElementById('display');
let operation;
let firstOperation = true;
let afterEnterPressed = false

function addEventListenerToButtons() {
    let calculatorDiv = document.getElementById('calculator');
    Array.from(calculatorDiv.getElementsByTagName('button')).forEach(item => {
        item.addEventListener('click', event => buttonClicked(event.target));
    })
}

function buttonClicked(target) {
    let targetClass = target.classList[0];
    if(targetClass == 'number') {
        numberInput(target.innerHTML);
        if(afterEnterPressed) {
             firstNumber = '';
             afterEnterPressed = false;
        }
        
    }
    
    if(targetClass == 'operand') {
        if(firstOperation) {
            if(firstNumber == "") firstNumber = secondNumber;
            firstOperation = false;
        }
        else {
            evaluate();
        }
        secondNumber = '';
        operation = window[target.value];
        
    }
    if(targetClass == 'functional') {
        window[target.value]();
    }
}

function enter() {
    afterEnterPressed = true;
    evaluate();
}

function evaluate() {
    firstNumber = operation(+firstNumber, +secondNumber);
    updateDisplay(firstNumber);
    firstOperation = true;
    secondNumber = '';
}

function clear() {
    firstNumber = "", secondNumber = "";
    updateDisplay(0);
    firstOperation = true;
}

function updateDisplay(message = secondNumber) {
    display.innerHTML = message;
}

addEventListenerToButtons();

function add(a = 0, b = 0){
    console.log(`adding ${a} and ${b}`);
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
    values[0] += number;
    updateDisplay(values[0]);
}

