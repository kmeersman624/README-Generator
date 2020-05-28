const inquirer = require("inquirer");
const fs = require("fs");

const questions = [

];
inquirer
.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "description",
        type: "input",
        message: "Waht is the description of the project?",
    },
    {
        name: "contents",
        type: "list",
        message: "",
    },
    {
        name: "usage",
        type: "input",
        message: "",
    },
    {
        name: "license",
        type: "input",
        message: "",
    },    
    {
        name: "contributing",
        type: "input",
        message: "",
    },    
    {
        name: "tests",
        type: "input",
        message: "",
    },  
    {
        name: "questions",
        type: "input",
        message: "",
    },  

    
])
function writeToFile(fileName, data) {
}

function init() {

}

init();
