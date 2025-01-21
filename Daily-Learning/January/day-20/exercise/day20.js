/*In the spirit of puhing something and keeping the streak alive.*/

// Calculator object with methods for basic arithmetic operations
const calculator = {
    // Method to add two numbers
    add: (a, b) => a + b,

    // Method to subtract two numbers
    subtract: (a, b) => a - b,

    // Method to multiply two numbers
    multiply: (a, b) => a * b,

    // Method to divide two numbers
    divide: (a, b) => {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    },

    // Method to calculate the power of a number
    power: (a, b) => a ** b,
        
};

// Example: Using the calculator object to perform basic arithmetic operations.
const param1 =10;
const param2 = 5;

console.log(`Addition: ${param1} + ${param2} = ${calculator.add(param1, param2)}`); 
console.log(`Subtraction: ${param1} - ${param2} = ${calculator.subtract(param1, param2)}`); 
console.log(`Multiplication: ${param1} * ${param2} = ${calculator.multiply(param1, param2)}`);
console.log(`Division: ${param1} / ${param2} = ${calculator.divide(param1, param2)}`);
console.log(`Power: ${param1} ** ${param2} = ${calculator.power(param1, param2)}`);
