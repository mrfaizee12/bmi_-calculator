#! /usr/bin/env node
console.log("made by mr.faizee");
import inquirer from "inquirer";
const questions = [
    { type: 'number', name: 'weight', message: 'enter your weight in (kilogram):' },
    { type: 'number', name: 'height', message: 'enter your height in(meter):' },
];
const calculatorBMI = (weight, height) => weight / (height * height);
const categorizeBMI = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    }
    else {
        return "obses";
    }
};
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    const bmi = calculatorBMI(weight, height);
    const category = categorizeBMI(bmi);
    console.log(`Your BMI is: ${bmi}`);
    console.log(`Category: ${category}`);
};
main();
