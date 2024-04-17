#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.red("Enter you sentence to count the word:")
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.blue(`Your Sentence word count is: ${words.length}`));
