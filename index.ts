#! /usr/bin/env node

let myBalance = 5000;
let myPin = 1212;

import inquirer from "inquirer";

console.log("Welcome to Code with Kamran - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name : "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if(pinAnswer.pin === myPin){
    console.log("Logged in Succesfully");
    // console.log('current account balance is ${myBalance}');

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Amount"]
        },
    ]);

    if (operationAnswer.operation === "Withdraw Amount"){

        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type : "number",
                message: "Enter the amount to withdraw",
            },
        ]);     
        if(amountAnswer.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        
        }
    }
    else if(operationAnswer.operation === "Check Amount"){
        console.log(`Your current amount is: ${myBalance}`);
}

else {
    console.log("Pin is incorrect, Try again!");
}
}