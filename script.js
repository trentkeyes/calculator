const numButtons = document.querySelectorAll('.numButton');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const subtraction = document.querySelector('#subtraction');
const addition = document.querySelector('#plus');
const equals = document.querySelector('#equals');
const display = document.querySelector('.display');


let firstNum = '';
let firstNumOp = false;
let secondNum = '';
let secondNumOp = false;
let operatorVar = '';
let operatorOp = false;
let operatorView = '';
let result = '';

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
    let result = dict[operatorVar](num1, num2).toString();
    if (result.length > 13) {
        result = Number(result);
        let whole = Math.round(result).toString();
        return result.toFixed(13 - whole.length)
    } else {
        return result;
    }


}

numButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        let input = e.target.textContent.toString();
        if (display.textContent.length < 13) {
            if (firstNumOp == false && secondNumOp == false) {
                firstNum = input;
                firstNumOp = true;
                display.textContent = firstNum;
            } else if (firstNumOp && secondNumOp == false && firstNum !== '0') {
                firstNum = firstNum + input;
                display.textContent = firstNum;
            } else if (firstNumOp == false && secondNumOp && secondNum == '') {
                secondNum = input;
                display.textContent = `${firstNum}${operatorView}${secondNum}`;
            } else if (firstNumOp == false && secondNumOp && secondNum !== '0') {
                secondNum = secondNum + input;
                display.textContent = `${firstNum}${operatorView}${secondNum}`;
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
});

clear.addEventListener('click', (e) => {
    firstNum = '';
    secondNum = '';
    operatorVar = '';
    display.textContent = '';
    firstNumOp = false;
    secondNumOp = false;
    operatorOp = false;
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