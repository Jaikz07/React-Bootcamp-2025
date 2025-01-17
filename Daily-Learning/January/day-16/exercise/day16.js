/*JavaScript Functions Lesson

Introduction to Functions
A function in JavaScript is a reusable block of code that performs a specific task. It allows you to write code once and use it multiple times, making your programs more efficient and organized.

1. Basics of Functions
Defining a Function
A function is defined using the function keyword, followed by a name, parentheses, and curly braces.
*/
//Example:
function greet() {
    console.log("Hello, World!");
}

//Calling a Function
//To execute a function, you call it by its name followed by parentheses.
greet(); // Output: Hello, World!
/*
2. Functions with Parameters
Parameters are placeholders that allow you to pass data into a function.
Example:
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice"); // Output: Hello, Alice!

3. Functions with Return Values
A function can return a value using the return keyword.
Example:
function add(a, b) {
  return a + b;
}

const sum = add(5, 10);
console.log(sum); // Output: 15

4. Function Expressions
A function can also be assigned to a variable. This is called a function expression.
Example:
const greet = function () {
  console.log("Hello, World!");
};

greet(); // Output: Hello, World!

5. Arrow Functions
Arrow functions are a shorter syntax for writing functions, introduced in ES6.
Example:
const greet = () => {
  console.log("Hello, World!");
};

greet(); // Output: Hello, World!
Arrow Functions with Parameters:
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15

6. Functions Inside Objects
Functions defined inside objects are called methods.
Example:
const user = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet(); // Output: Hello, Alice!

7. Callback Functions
A callback function is a function passed as an argument to another function.
Example:
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

processUserInput(greet); // Output: Hello, Alice!

8. Higher-Order Functions
A higher-order function is a function that takes another function as an argument or returns a function.
Example:
function higherOrder(func) {
  func();
}

function sayHello() {
  console.log("Hello!");
}

higherOrder(sayHello); // Output: Hello!

9. Immediately Invoked Function Expressions (IIFE)
An IIFE is a function that runs immediately after it is defined.
Example:
(function () {
  console.log("I am an IIFE!");
})(); // Output: I am an IIFE!

Advanced Concepts
Closures
A closure is a function that remembers its outer variables even after the outer function has executed.
Example:

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2





//This lesson provides a comprehensive guide to JavaScript functions, from basics to advanced topics.
*/


/*JavaScript function Class Work/Assignment


Task 1: Create a Function
Write a function called multiply that takes two numbers as parameters and returns their product.
Task 2: Object Method
Define an object student with a method getInfo that prints the student's name and age.
Task 3: Arrow Functions
Rewrite the multiply function using arrow syntax.

Take-Home Assignment
1.Write a Function Expression: Define a function expression called divide that divides two numbers and returns the result.
2.Higher-Order Function: Write a function called processNumber that takes a number and a callback function. The callback should either double or triple the number.
3.Callback Function: Write a function called runTask that takes a string (task name) and a callback function. The callback should log: "Running task: [task name]".
*/

//Task 1
//Variable declaration.
let a = 5;
let b = 6;

function multiply() {
    console.log(a, b);
    return a * b;
};

multiply();


//Task 2
const student = {
    name: 'Jack Sparrow',
    age: '29',
    getInfo: function () { // object function
        console.log(`Name: ${this.name}, Age: ${this.age}`); //NB: "this" references the object student.
    }
};

student.getInfo(); //Displays the student's name and age.


//Task 3.
//Defining Function using the Arrow function.
const multiply = () => {
    console.log(a, b);
    return a * b;
};

const result = multiply(); //Invokes the function multiply.

console.log(result); //Prints the result of the multiplication.

/*Assignment.*/

//Task 1.
//Defining Function using the Arrow function.
const divide = () => {
    console.log(a, b);
    return a / b;
};

const answer = divide(); //Invokes the function multiply.

console.log(answer); //Prints the result of the multiplication.

//Task 2
const number = 5;
//Defining the processNumber function.
function processNumber(number, callback) {
    return callback(number);
};

//Defines the callback functions
function doubleNumber(num) {
    return num * 2;
};

function tripleNumber(num) {
    return num * 3;
};

const doubled = processNumber(number, doubleNumber);
console.log(`Doubled: ${doubled}`); 

const tripled = processNumber(number, tripleNumber);
console.log(`Tripled: ${tripled}`);


//Task 3.
//Task Variable Declaration.
const taskName = "Backup";
const taskName1 = "CleanUp";
const taskName2 = "Update";

//RunTask function...
function runTask(taskName, callback) {
    callback(taskName); // Call the callback function with the task name
}

// Callback function...
function logTask(taskName) {
    console.log(`Running task: ${taskName}`);
}


runTask(taskName, logTask);

runTask(taskName1, logTask); 

runTask(taskName2, logTask); 