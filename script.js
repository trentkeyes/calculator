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
let operatorVar = '';
let result = '';


const add = function (...args) {
    console.log(args);
    if (args.length > 0) {
        return args.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    return 0;
};

const subtract = function (...args) {
    if (args.length > 0) {
        return args.reduce((accumulator, currentValue) => accumulator - currentValue);
    }
    return 0;
};

const multiply = function (...args) {
    if (args.length > 0) {
        return args.reduce((accumulator, currentValue) => accumulator * currentValue);
    }
    return 0;
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

const operate = function (operate, a, b) {
    return dict[operate](a, b);
}

numButtons.forEach((element) => {
    element.addEventListener('click', (e) => {

        if (display.textContent.length < 13 && firstNum !== '' && operatorVar !== '') {
            display.textContent = operate(operatorVar, numVar, e.target.textContent.toString());
        } else if (numVar.length < 13) {
            numVar = numVar + e.target.textContent;
            display.textContent = numVar.toString();
        }
    })
});

clear.addEventListener('click', (e) => {
    numVar = '';
    operatorVar = '';
    display.textContent = '';
})

division.addEventListener('click', (e) => {
    operatorVar = '/';
    display.textContent = `${numVar.toString()} ÷`;
    console.log(operatorVar);
});




