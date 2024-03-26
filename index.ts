#! /usr/bin/env node

console.log("made by mr.faizee");
import inquirer from "inquirer";

const questions = [
    {type: 'number', name: 'weight', message: 'enter your weight in (kilogram):'},
    {type: 'number', name: 'height', message: 'enter your height in(meter):'},
];

const calculatorBMI = (weight: number, height: number): number => weight/(height*height);

const main = async() => {
    const {weight, height} = await inquirer.prompt(questions);

    console.log(`Your BMI is: ${calculatorBMI(weight, height).toFixed(2)}`)
};

main();