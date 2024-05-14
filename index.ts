#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellcome Message

console.log("\n\tWellcome to \'Yousuf8521\' - CLI Simple Calculator\n");

//import Choice from "inquirer/lib/objects/choice.js";


// Asking Question from Users through Inquirer

let answers = await inquirer.prompt([
    {message : "Enter First Number", type: "number", name: "firstNumber"},
    {message : "Enter Second Number", type: "number", name: "secondNumber"},
    {

        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition" , "Subtractions" , "Multiplication" , "Division"],
    },
]);

// console.log(answers);

//  Condtional Statements If-Else


 if(answers.operator === "Addition"){
     console.log(answers.firstNumber + answers.secondNumber)
 }
 else if (answers.operator === "Subtractions"){
     console.log(answers.firstNumber - answers.secondNumber)
 }
 else if (answers.operator === "Multiplication"){
     console.log(answers.firstNumber * answers.secondNumber)
 }
 else if (answers.operator === "Division"){
     console.log(answers.firstNumber / answers.secondNumber)
 }
 else{
     console.log("Invalid Input")
 }  