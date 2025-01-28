

// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN2)
// console.log(Math.LN10)

// Assignments
// 1: Using the Math.sqrt method, find the square root of the following numbers 24, 96, 48, 122  
 
const squareSixteen = Math.sqrt(16) 
// console.log(squareSixteen)

const roundNum = Math.round(3.7)
// console.log(roundNum)

const roundNumTwo = Math.ceil(3.1)
// console.log(roundNumTwo)

const roundNumThree = Math.floor(3.9)
// console.log(roundNumThree)


const roundedNumber = Math.floor(Math.PI) 
// console.log(roundedNumber)

const truncatedNumber = Math.trunc(9.3)
// console.log(truncatedNumber)



// Assignment: Understanding Math.round(), Math.ceil(), and Math.floor()

// Objective:

// This assignment is designed to help you understand the difference between Math.round(), Math.ceil(), and Math.floor() in JavaScript by using them in various scenarios.

// Instructions:
// 	1.	Theory Questions
// Answer the following questions in your own words:
// 	•	What is the difference between Math.round(), Math.ceil(), and Math.floor()?
// 	•	What will Math.round(2.5) return? Why?
// 	•	How does Math.ceil() behave when the number is negative? Provide an example.
// 	2.	Practical Tasks
// Write a JavaScript program to perform the following tasks:
// Task 1:
// 	•	Write an arrow function named compareRoundingMethods(number) that takes a decimal number as input.
// 	•	Inside the function, use Math.round(), Math.ceil(), and Math.floor() on the input number.
// 	•	Return the results in an object format like this:

// {
//   rounded: 4,
//   ceil: 5,
//   floor: 4
// }

// Example Input: 4.3
// Example Output: { rounded: 4, ceil: 5, floor: 4 }

// Solution:
const compareRoundingMethods = (number) => {
    return {
        rounded: Math.round(number),
        ceil: Math.ceil(number),
        floor: Math.floor(number)
    }
}
const number = 3.45;
console.log(compareRoundingMethods(number));
//Output: { rounded: 3, ceil: 4, floor: 3 }


// Task 2:
// 	•	Create a program that generates 10 random decimal numbers between 1 and 100.
// 	•	For each number, display the result of Math.round(), Math.ceil(), and Math.floor() in the console.

// Solution:
const randomNumbers = []; // creates an empty array that stores random numbers
for (let i = 0; i < 10; i++) { // runs a loop 10 times (i = 0 to i = 9)
    randomNumbers.push(Math.random() * 100); // generates a random number between 0 and 100 and adds it to the array.
}
console.log(randomNumbers); // displays the array of random numbers to the console.
randomNumbers.forEach(number => { // usess forEach method to iterates through each random number in the array.
    console.log(`Number: ${number}`); // displays the current random number to the console.
    console.log(`Math.round(): ${Math.round(number)}`); // displays the rounded value of the random number to the console.
    console.log(`Math.ceil(): ${Math.ceil(number)}`); // displays the ceil value of the random number to the console.
    console.log(`Math.floor(): ${Math.floor(number)}`); // displays the floor value of the random number to the console.
    console.log('----------------------');  // displays a separator to distinguish between different random numbers.
});
//Output: Random numbers and their rounded, ceil, and floor values.
//NB=> randomNumbers.push() adds the number to the randomNumbers array.


// Task 3:
// 	•	Write a function calculateTotal(items) that takes an array of item prices (decimal numbers).
// 	•	Use:
// 	•	Math.round() to calculate the total rounded to the nearest integer.
// 	•	Math.ceil() to calculate the total rounded up.
// 	•	Math.floor() to calculate the total rounded down.
// 	•	Return an object with the three totals.
// Example Input: [10.5, 5.3, 8.8]
// Example Output:

// {
//   totalRounded: 25,
//   totalCeil: 26,
//   totalFloor: 24
// }

// Solution:
const calculateTotal = (items) => { // defines a function called calculateTotal that takes an array of item prices as input.
    const totalRounded = Math.round(items.reduce((acc, curr) => acc + curr, 0)); // calculates the total rounded to the nearest integer.
    const totalCeil = Math.ceil(items.reduce((acc, curr) => acc + curr, 0)); // calculates the total rounded up.
    const totalFloor = Math.floor(items.reduce((acc, curr) => acc + curr, 0)); // calculates the total rounded down.
    return {
        totalRounded,
        totalCeil,
        totalFloor
    }; // returns an object with the three totals.
}

const items = [7.5, 5.3, 9.8, 2.2]; // defines an array of item prices.
console.log(calculateTotal(items)); // displays the total rounded, ceil, and floor values to the console.
//Output: { totalRounded: 25, totalCeil: 26, totalFloor: 24 }

/*
NB=> reduce method: is used to calculate the sum of all the items in the array. The initial value of the accumulator is set to 0. The Math.round(), Math.ceil(), and Math.floor() methods are then applied to the sum to calculate the total rounded, ceil, and floor values, respectively.
acc: represents the accumulator, which stores the sum of the items in the array.
curr: represents the current item being processed in the array.
*/


// 	3.	Challenge Question 
// Write a program that takes any positive or negative decimal number and determines whether Math.ceil() and Math.floor() return the same result for that number. Print a message indicating the result.
// Hint: For some negative numbers, Math.ceil() and Math.floor() behave differently.

//Solution:

const checkCeilFloor = (number) => { // defines a function called checkCeilFloor that takes a decimal number as input.
    const ceilResult = Math.ceil(number); // calculates the ceil value of the number.
    const floorResult = Math.floor(number); // calculates the floor value of the number.
   
    if (ceilResult === floorResult) { // Checks if the ceil and floor values are the same.
        
        console.log(`Math.ceil() and Math.floor() return the same result for ${number}.`); // displays a message indicating that ceil and floor return the same result.
    } else {
        console.log(`Math.ceil() and Math.floor() return different results for ${number}.`); // displays a message indicating that ceil and floor return different results.
    }
}
checkCeilFloor(3.5); //Output: Math.ceil() and Math.floor() return different results for 3.5.
checkCeilFloor(-3.5); //Output: Math.ceil() and Math.floor() return different results for -3.5.
checkCeilFloor(3.0); //Output: Math.ceil() and Math.floor() return the same result for 3.
checkCeilFloor(-3.0); //Output: Math.ceil() and Math.floor() return the same result for -3.

// Submission:
// 	•	Submit your answers to the theory questions as a text file or document.
// 	•	Include the JavaScript code for the practical tasks and ensure it runs without errors.
// 	•	Include screenshots of the console output for each task to verify your results.

// Grading Criteria:
// 	•	Clarity of Explanation (20 points): Answers to theory questions are clear and correct.
// 	•	Code Accuracy (50 points): Code performs the specified tasks correctly.
// 	•	Output Verification (20 points): Console output matches the expected results.
// 	•	Challenge Completion (10 points, optional): Correct solution to the challenge question.


const randon = Math.floor(Math.random() * 50)
// console.log(randon)




