import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";


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