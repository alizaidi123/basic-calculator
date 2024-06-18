"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
inquirer_1.default.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number',
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number',
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Please select one of the following operators',
        choices: ['add', 'sub', 'div', 'mult'],
    },
]).then(function (answer) {
    if (answer.operator === 'add') {
        console.log('The result is', answer.num1 + answer.num2);
    }
    else if (answer.operator === 'sub') {
        console.log('The result is', answer.num1 - answer.num2);
    }
    else if (answer.operator === 'div') {
        console.log('The result is', answer.num1 / answer.num2);
    }
    else if (answer.operator === 'mult') {
        console.log('The result is', answer.num1 * answer.num2);
    }
    else {
        console.log('Kindly enter a valid operator');
    }
}).catch(function (error) {
    console.error('An error occurred:', error);
});
