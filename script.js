const numButtons = document.querySelectorAll('.numButton');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const subtraction = document.querySelector('#subtraction');
const addition = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const display = document.querySelector('.display');
const decimal = document.querySelector('#decimal');
const backspace = document.querySelector('#backspace');

let firstNum = '';
let firstNumOp = false;
let secondNum = '';
let secondNumOp = false;
let operatorVar = '';
let operatorOp = false;
let operatorView = '';
let result = '';
let didOperation = false;

const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};

const dict = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

const operate = function (operator, num1, num2) {
    if (operator == '/' && num2.toString() == '0') {
        return 'Nope!';
    } else {
        let result = dict[operatorVar](num1, num2).toString();
        if (result.length > 12) {
            result = Number(result);
            let whole = Math.round(result).toString();
            return result.toFixed(12 - whole.length)
        } else {
            return result;
        }
    }
};

const numButtonsEvent = function (input) {
    if (input.match(/[0-9]|\./)) {
        console.log(input);
        if (didOperation && !operatorOp) {
            clearFunc();
        }
        if (display.textContent.length < 12) {
            if (firstNumOp == false && secondNumOp == false) {
                firstNum = input;
                firstNumOp = true;
                display.textContent = firstNum;
            } else if (firstNumOp && secondNumOp == false && firstNum !== '0') {
                if (input == '.' && firstNum.includes('.')) {
                } else {
                    firstNum = firstNum + input;
                    display.textContent = firstNum;
                }
            } else if (firstNumOp == false && secondNumOp && secondNum == '') {
                secondNum = input;
                display.textContent = `${firstNum}${operatorView}${secondNum}`;
            } else if (firstNumOp == false && secondNumOp && secondNum !== '0') {
                if (input == '.' && secondNum.includes('.')) {
                } else {
                    secondNum = secondNum + input;
                    display.textContent = `${firstNum}${operatorView}${secondNum}`;
                }
            }
        }
    }
};

numButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        let input = e.target.textContent.toString();
        numButtonsEvent(input);
    });
});
window.addEventListener('keydown', (e) => {
    let input = e.key.toString();
    numButtonsEvent(input);
});

const doOperation = function (operator, num1, num2) {
    firstNum = Number(num1);
    secondNum = Number(num2);
    display.textContent = operate(operator, firstNum, secondNum);
    secondNum = '';
    firstNum = display.textContent;
    didOperation = true;
};

const clearEvent = function (e) {
    if (e.key == 'c' || e.type == 'click') {
        firstNum = '';
        secondNum = '';
        operatorVar = '';
        display.textContent = '';
        firstNumOp = false;
        secondNumOp = false;
        operatorOp = false;
        didOperation = false;
    }
};

clear.addEventListener('click', clearEvent);
window.addEventListener('keydown', clearEvent);

const equalsEvent = function (e) {
    if (e.key == 'Enter' || e.type == 'click') {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        display.textContent = operate(operatorVar, firstNum, secondNum);
        secondNum = '';
        secondNumOp = false;
        operatorVar = '';
        operatorView = '';
        operatorOp = false;
        firstNum = display.textContent;
        firstNumOp = true;
        didOperation = true;
    }
};

equals.addEventListener('click', equalsEvent);
window.addEventListener('keydown', equalsEvent);

const divideEvent = function (e) {
    if (e.key == '/' || e.type == 'click') {
        if (operatorOp) {
            doOperation(operatorVar, firstNum, secondNum);
        }
        operatorVar = '/';
        operatorView = '÷';
        operatorOp = true;
        firstNumOp = false;
        secondNumOp = true;
        display.textContent = `${firstNum}÷`;
    }
};

division.addEventListener('click', divideEvent);
window.addEventListener('keydown', divideEvent);

const multiplyEvent = function (e) {
    if (e.key == '*' || e.type == 'click') {
        if (operatorOp) {
            doOperation(operatorVar, firstNum, secondNum);
        }
        operatorVar = '*';
        operatorView = '×'
        operatorOp = true;
        firstNumOp = false;
        secondNumOp = true;
        display.textContent = `${firstNum}×`;
    }
};

multiplication.addEventListener('click', multiplyEvent);
window.addEventListener('keydown', multiplyEvent);

const addEvent = function (e) {
    if (e.key == '+' || e.type == 'click') {
        if (operatorOp) {
            doOperation(operatorVar, firstNum, secondNum);
        }
        operatorVar = '+';
        operatorView = '+';
        operatorOp = true;
        firstNumOp = false;
        secondNumOp = true;
        display.textContent = `${firstNum}+`;
    }
};

addition.addEventListener('click', addEvent);
window.addEventListener('keydown', addEvent);

const subtractEvent = function (e) {
    if (e.key == '-' || e.type == 'click') {
        if (operatorOp) {
            doOperation(operatorVar, firstNum, secondNum);
        }
        operatorVar = '-';
        operatorView = '-';
        operatorOp = true;
        firstNumOp = false;
        secondNumOp = true;
        display.textContent = `${firstNum}−`;
    }
};

subtraction.addEventListener('click', subtractEvent);
window.addEventListener('keydown', subtractEvent);

const backspaceEvent = function (e) {
    if (e.key == 'Backspace' || e.type == 'click') {
        if (firstNumOp && secondNumOp == false) {
            firstNum = firstNum.slice(0, -1);
            display.textContent = firstNum;
        } else if (firstNumOp == false && operatorOp && secondNum == '') {
            operatorVar = '';
            operatorView = '';
            operatorOp = false;
            display.textContent = firstNum;
            firstNumOp = true;
            secondNumOp = false;
        } else if (firstNumOp == false && secondNumOp) {
            secondNum = secondNum.slice(0, -1);
            display.textContent = `${firstNum}${operatorView}${secondNum}`;
        }
    }
};

backspace.addEventListener('click', backspaceEvent);
window.addEventListener('keydown', backspaceEvent);

const clearFunc = function () {
    firstNum = '';
    secondNum = '';
    operatorVar = '';
    display.textContent = '';
    firstNumOp = false;
    secondNumOp = false;
    operatorOp = false;
    didOperation = false;
};