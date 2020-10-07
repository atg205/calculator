let result; 
let input;
let begin;
let enterPressed;
let operation;
let oldTarget;
let display = document.getElementById('display');
let calculatorDiv = document.getElementById('calculator');
let buttons = Array.from(calculatorDiv.getElementsByTagName('button'));



function init() {
    result = "";
    input = "";
    begin = true;
    enterPressed = false;
}

init();

function addEventListenerToButtons() {
    buttons.forEach(item => {
        item.addEventListener('click', event => buttonClicked(event.target));
    });
    window.addEventListener('keydown', (e) => {
        buttons.forEach(button => {
             if(button.innerHTML == e.key) button.click();
        });
    });
    
}

addEventListenerToButtons();

function buttonClicked(target) {
    if(oldTarget){
        oldTarget.classList.remove('clicked');
        oldTarget = null;
    }
    let targetClass = target.classList[0];
    let targetFunction = window[target.value];

    if(enterPressed) {
        input = '';
        
        if(targetClass == 'number') {
            init();
        }
        if(targetClass == 'operand') {
            operation = targetFunction;
        }
    }
   
    switch (targetClass) {
        case 'number':
            numberInput(target.innerHTML);
            break;
        case 'operand':
            target.classList.add('clicked');
            oldTarget = target;
            if(begin) {
                result = input;
                begin = false;
                operation = targetFunction;
                enterPressed = false;
            }
            else if (!enterPressed){
                result = operation(+result, +input);
                operation = targetFunction;
            }
            updateDisplay(result);
            input = '';
            enterPressed = false; 
            break;
        case 'functional':
            targetFunction();
            input = "";
            break;
        default:
            console.log(target);
    }
}


function enter() {
    enterPressed = true;
    result = operation(+result, +input);
    updateDisplay(result);
}

function clear() {
    begin = true;
    init();
    updateDisplay(0);
}

function updateDisplay(message = result) {
    display.innerHTML = message;
}


function add(a = 0, b = 0){
    return a + b
}

function substract(a, b = 0) {
    return a - b
}

function multiply(a, b = 1) {
    return a * b
}

function divide(a , b = 1){
    return a / b
}

function numberInput(number) {
    input += number;
    updateDisplay(input);
}

