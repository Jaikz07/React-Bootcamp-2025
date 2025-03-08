/*Group 5 – Math Methods & Import/Export
Subjective Questions:
1.What is the purpose of Math.random() in JavaScript?
2.How do you export and import functions between two JavaScript files?
3.Explain the difference between named exports and default exports.
Coding Questions:
1.Generate a random number between 1 and 100 and log it to the console.
2.Create a module named mathUtils.js and export a function called addNumbers(). Then, import it into another file and use it to add two numbers.
3.Use Math.max() to find the largest number in this array: [23, 45, 67, 89, 12].
*/


/*ANSWERS and SOLUTIONS.
1. The Math.random() function in JavaScript is used to generate a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). This function is commonly used for scenarios that require randomization, such as generating random numbers within a specific range, creating random IDs, or simulating randomness in games and simulations.
Example:
let randomNumber = Math.random();
console.log(randomNumber);

2. To export and import functions between two JavaScript files, we use the 'export' and 'import' statements. There are two main types of exports: named exports and default exports.
Example:
// Named export of the function addNumbers
formulars.js //file
export function addNumbers(a, b) {
    return a + b;
}

// Importing the named function addNumbers from formulars.js
main.js //file
import { addNumbers } from './formaulars.js';

const sum = addNumbers(3, 4);
console.log(sum);

3. Explain the difference between named exports and default exports.
Named Exports:
Named exports allow you to export multiple functions, variables, or objects from a module.
You must use the exact name when importing.
Syntax: export { namedExport1, namedExport2 };
Example:
// file: formulars.js
export function addNumbers(a, b) {
    return a + b;
}

export function subtractNumbers(a, b) {
    return a - b;
}

// file: main.js
import { addNumbers, subtractNumbers } from './formulars.js';

Default Exports:
Default exports allow you to export a single default export from a module.
You can use any name when importing.
Syntax: export default functionName;
Example:
// file: formulars.js
export default function addNumbers(a, b) {
    return a + b;
}

// file: main.js
import add from './formulars.js';
*/

//Cod_1:
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

//Cod_2:
// mathUtils.js
export function addNumbers(a, b) {
    return a + b;
}

// main.js
import { addNumbers } from './mathUtils.js';

const sum = addNumbers(5, 7);
console.log(sum);

//Cod_3:
// Using Math.max() to find the largest number in this array: [23, 45, 67, 89, 12].
const figures = [23, 45, 67, 89, 12];
const maxNumber = Math.max(...figures);
console.log(maxNumber);