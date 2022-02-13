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
    return dict[operatorVar](num1, num2);
}

numButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        let input = e.target.textContent.toString();
        console.log(input);
        if (display.textContent.length < 13) {
            if (firstNumOp == false && secondNumOp == false) {
                firstNum = input;
                firstNumOp = true;
                display.textContent = firstNum;
                console.log(firstNum);
            } else if (firstNumOp == true && secondNumOp == false) {
                firstNum = firstNum + input;
                display.textContent = firstNum;
            } else if (firstNumOp == false && secondNumOp == true && secondNum == '') {
                secondNum = input;
                display.textContent = `${firstNum}${operatorView}${secondNum}`;
            } else if (firstNumOp == false && secondNumOp == true) {
                secondNum = secondNum + input;
                display.textContent = `${firstNum}${operatorView}${secondNum}`;
            }
        }
    })
});

equals.addEventListener('click', (e) => {
    if (operatorVar == '+') {
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
    }
    display.textContent = operate(operatorVar, firstNum, secondNum);
    secondNum = '';
    secondNumOp = false;
    operatorVar = '';
    operatorView = '';
    operatorOp = false;
    firstNum = display.textContent;
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
    operatorVar = '/';
    operatorView = '÷';
    display.textContent = `${firstNum}÷`;
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
});

multiplication.addEventListener('click', (e) => {
    operatorVar = '*';
    operatorView = '×'
    display.textContent = `${firstNum}×`;
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
});

addition.addEventListener('click', (e) => {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    operatorVar = '+';
    operatorView = '+';
    display.textContent = `${firstNum}+`;
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
});

subtraction.addEventListener('click', (e) => {
    operatorVar = '-';
    operatorView = '-';
    display.textContent = `${firstNum}−`;
    operatorOp = true;
    firstNumOp = false;
    secondNumOp = true;
});



