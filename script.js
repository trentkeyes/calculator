

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
