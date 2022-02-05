const numButtons = document.querySelectorAll('.numButton');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let numVar;
let operatorVar;


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
        numVar = e.target.textContent;
        display.textContent = numVar.toString();
        console.log(numVar);
    })
});

operators.forEach((element) => {
    element.addEventListener('click', (e) => {
        operatorVar = e.target.textContent;
        display.textContent = operatorVar;
        console.log(operatorVar);
        console.log(display)
    })
});


