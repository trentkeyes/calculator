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
}

numButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        let input = e.target.textContent.toString();
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
    })
});

const doOperation = function (operator, num1, num2) {
    firstNum = Number(num1);
    secondNum = Number(num2);
    display.textContent = operate(operator, firstNum, secondNum);
    secondNum = '';
    firstNum = display.textContent;
    didOperation = true;
}

const clearFunc = function () {
    firstNum = '';
    secondNum = '';
    operatorVar = '';
    display.textContent = '';
    firstNumOp = false;
    secondNumOp = false;
    operatorOp = false;
    didOperation = false;
}

equals.addEventListener('click', (e) => {
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
});

clear.addEventListener('click', (e) => {
    clearFunc();
});

division.addEventListener('click', (e) => {
    if (operatorOp) {
        doOperation(operatorVar, firstNum, secondNum);
    }
    operatorVar = '/';
    operatorView = '÷';
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
    display.textContent = `${firstNum}÷`;
});

multiplication.addEventListener('click', (e) => {
    if (operatorOp) {
        doOperation(operatorVar, firstNum, secondNum);
    }
    operatorVar = '*';
    operatorView = '×'
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
    display.textContent = `${firstNum}×`;
});

addition.addEventListener('click', (e) => {
    if (operatorOp) {
        doOperation(operatorVar, firstNum, secondNum);
    }
    operatorVar = '+';
    operatorView = '+';
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
    display.textContent = `${firstNum}+`;
});

subtraction.addEventListener('click', (e) => {
    if (operatorOp) {
        doOperation(operatorVar, firstNum, secondNum);
    }
    operatorVar = '-';
    operatorView = '-';
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
    display.textContent = `${firstNum}−`;
});

backspace.addEventListener('click', (e) => {
    display.textContent = display.textContent.slice(0, -1);
    if (firstNumOp && secondNumOp == false) {
        firstNum = firstNum.slice(0, -1);
        display.textContent = firstNum;
    } else if (firstNumOp == false && operatorOp && secondNum == '') {
        operatorVar = '';
        operatorView = '';
        operatorOp = false;
        display.textContent = firstNum;
    } else if (firstNumOp == false && secondNumOp) {
        secondNum = secondNum.slice(0, -1);
        display.textContent = `${firstNum}${operatorView}${secondNum}`;
    }
})