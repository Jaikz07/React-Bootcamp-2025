/*1. Variables
Variables are used to store data that can be used and manipulated throughout your code. In JavaScript, you can declare variables using var, let, or const.

var: Declares a variable. It is function-scoped and can be re-declared and updated.
let: Declares a block-scoped variable. It can be updated but not re-declared within the same scope.
const: Declares a block-scoped variable that cannot be updated or re-declared. It must be initialized at the time of declaration.
*/

//Example:
// Using 'let' to declare a variable that can be updated
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

greeting = "Hello, JavaScript!";
console.log(greeting); // Output: Hello, JavaScript!

// Using 'const' to declare a constant variable
const pi = 3.14159;
console.log(pi); // Output: 3.14159

// Uncommenting the next line will cause an error because 'pi' is a constant
// pi = 3.14;

/*2. Functions
Functions are blocks of code designed to perform a particular task. They can take inputs (called parameters) and return an output.
*/

// Defining a function
function add(a, b) {
    return a + b;
}

// Calling the function with arguments
let sum = add(5, 3);
console.log(sum); // Output: 8

// Another example of a function without parameters
function greet() {
    console.log("Welcome to learning JavaScript!");
}

// Calling the greet function
greet(); // Output: Welcome to learning JavaScript!

/*In Conclusion
By understanding these basic concepts, you'll be well on your way to writing more complex JavaScript programs. As you continue learning, you'll discover more about JavaScript syntax, data types, control structures, and more. Happy coding!
*/