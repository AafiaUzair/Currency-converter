#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
    USD: 1,   //Base currency
    PKR: 278.09,
    INR: 83.43,
    EUR: 0.93,
    SAR: 3.75,
    GBP: 0.80,
    AED: 3.67,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "From:",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "SAR", "GBP", "AED"]
    },
    {
        name: "to",
        message: "To:",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "SAR", "GBP", "AED"]
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number"
    }
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;   
let convertedAmount = (baseAmount * toAmount).toFixed(2);
console.log(convertedAmount);