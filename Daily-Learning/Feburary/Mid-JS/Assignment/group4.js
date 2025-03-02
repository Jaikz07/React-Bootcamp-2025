/* Group 4 – Loops & Error Handling
Subjective Questions:
1.Explain the difference between a for loop and a while loop with examples.
2.What is a try...catch block used for in JavaScript?
3.Describe the use of the finally block in error handling.
Coding Questions:
1.Write a for loop that prints numbers from 100 to 90 in descending order.
2.Create a function findSquare() that accepts a number and uses a try...catch block to catch errors if the input is not a number.

const findSquare = (num) => {
 // Your code here
};

3.Use a while loop to print numbers from 1 to 10.
*/

//ANSWERS and SOLUTIONS.
/* 1. Explaining the difference between a for loop and a while loop.
For Loop:
A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
Syntax: for (initialization; condition; increment/decrement) { ... } */

//Example:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

/*while Loop:
A while loop is used when the number of iterations is not known beforehand and depends on a condition.
Syntax: while (condition) { ... } */

//Example:
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}

/*2. try...catch block in JavaScript.
A try...catch block is used for error handling in JavaScript. The code that may cause an error is placed inside the try block, and the catch block contains code to handle the error if it occurs. This prevents the program from crashing and allows for graceful error handling. */

//Example:
try {
    let result = faultySyntaxCode();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

/* 3. The finally block in error handling.
The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not. It is typically used for cleanup operations, such as closing files or releasing resources. */
//Example:
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This runs regardless of the outcome.");
}

//Cod_1:
//A for loop that prints numbers from 100 to 90 in descending order.
for (let i = 100; i >= 90; i--) {
    console.log(i);
}

//Cod2:
//Creating a function findSquare() that accepts a number and uses a try...catch block to catch errors if the input is not a number.
const findSquare = (num) => {
    try {
        if (typeof num !== "number") {
            throw new Error("Input is not a number");
        }
        return num * num;
    } catch (error) {
        console.error(error.message);
    }
};

console.log(findSquare(5));// Output: 25
console.log(findSquare("test"));// Output: Input is not a number

//Cod3:
//Using a while loop to print numbers from 1 to 10.
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}


//Assignment
//Telling time and Season.
const getTime = () => {
    const currentHour = new Date().getHours();
    let timeOfDay;

    switch (true) {
        case (currentHour >= 0 && currentHour <= 5):
            timeOfDay = 'This is early morning';
            break;
        case (currentHour === 6):
            timeOfDay = 'This is dawn';
            break;
        case (currentHour >= 7 && currentHour <= 11):
            timeOfDay = 'This is morning';
            break;
        case (currentHour >= 12 && currentHour <= 15):
            timeOfDay = 'This is mid noon';
            break;
        case (currentHour >= 16 && currentHour <= 18):
            timeOfDay = 'This is early evening';
            break;
        case (currentHour >= 19 && currentHour <= 20):
            timeOfDay = 'This is late evening';
            break;
        case (currentHour >= 21 && currentHour <= 23):
            timeOfDay = 'This is late night';
            break;
        default:
            timeOfDay = 'You are in between a season';
    }

    console.log(timeOfDay);
};

getTime();