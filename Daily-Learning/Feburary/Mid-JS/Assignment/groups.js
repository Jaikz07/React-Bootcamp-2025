/*
Mid-JavaScript Assignment

Instructions:
Use const for variable declarations and let only where necessary.
Use template strings for all string outputs.
Each group contains 6 questions:
3 Subjective questions (Explain concepts or predict outputs)
3 Coding questions (Write code to solve problems)
Submit your solutions in a .js file.


Group 1 – JavaScript Basics & Arrays
Subjective Questions:
1.Explain the difference between let, const, and var with examples.
2.What are primitive data types in JavaScript? List them with examples.
3.Explain the difference between .map() and .forEach() methods.
Coding Questions:
1.Create an array of 10 fruits. Use .map() to return an array of their lengths.

const fruits = ["apple", "banana", "orange", "kiwi", "mango"];
// Your code here

2.Use a for...of loop to print all numbers from 1 to 20.
3.Create an array of numbers and use .filter() to return only the even numbers.


Group 2 – Objects & Object Methods
Subjective Questions:
1.What is the this keyword in JavaScript? Explain with an example.
2.Differentiate between dot notation and bracket notation for accessing object properties.
3.What is an object method? Provide an example.
Coding Questions:
1.Create an object person with properties: name, age, gender, and a method greet() that logs a greeting using template strings.

const person = {
  // Your code here
};

2.Create an object car with properties: brand, model, year. Add a method getCarInfo() that returns "This car is a [year] [brand] [model]".
3.Add a new property color to the car object using bracket notation.



Group 3 – Functions & Conditional Statements
Subjective Questions:
1.Explain the difference between function declaration and function expression with examples.
2.What is an arrow function, and how does it handle the this keyword differently from a regular function?
3.How do you use a switch statement in JavaScript? Provide an example.
Coding Questions:
1.Write a function isEven() that accepts a number and returns "Even" if it is even and "Odd" if it is odd.

const isEven = (num) => {
 // Your code here
};

2.Create a function gradeCalculator() that accepts a score and returns grades:
90 and above: "A"
80 to 89: "B"
70 to 79: "C"
Below 70: "F"
3.Use a switch statement to create a function dayOfWeek() that returns the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).


Group 4 – Loops & Error Handling
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



Group 5 – Math Methods & Import/Export
Subjective Questions:
1.What is the purpose of Math.random() in JavaScript?
2.How do you export and import functions between two JavaScript files?
3.Explain the difference between named exports and default exports.
Coding Questions:
1.Generate a random number between 1 and 100 and log it to the console.
2.Create a module named mathUtils.js and export a function called addNumbers(). Then, import it into another file and use it to add two numbers.
3.Use Math.max() to find the largest number in this array: [23, 45, 67, 89, 12].





Group 6 – Advanced Objects, Functions, and Loops
Subjective Questions:
1.Explain what a method is inside an object and how it differs from a regular function.
2.What is the difference between .for...in and .for...of loops?
3.Explain the concept of closures in JavaScript.
Coding Questions:
1.Create an object student with properties: name, age, scores (an array of numbers). Add a method averageScore()that calculates and returns the average score.
2.Write a function fizzBuzz() that prints numbers from 1 to 20 but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
3.Create an object calculator with methods add(), subtract(), multiply(), and divide() that perform basic arithmetic operations and return the results.



✅ Submission Guidelines:
Submit your assignment in a .js file, structured by groups.
Ensure your code runs without errors.
Comment your code where necessary for clarity.
Good luck, and happy coding! 🚀✨
*/


// ANSWER && SOLUTIONS.
/*
GROUP_1.
1. Explaining the difference between let, const, and var.
Keyword     Scope	   Reassignment	Redeclaration	Hoisting
var     Function-scoped	✅ Yes	    ✅ Yes	    Hoisted with undefined
let     Block-scoped	✅ Yes	    ❌ No	    Hoisted but not initialized
const   Block-scoped	❌ No	    ❌ No	    Hoisted but not initialized
Examples:
// var example
var x = 10;
if (true) {
  var x = 20;  // Re-declares and modifies the same variable
}
console.log(x); // Output: 20

// let example
let y = 10;
if (true) {
  let y = 20; // Block-scoped, does not affect outer y
  console.log(y); // Output: 20
}
console.log(y); // Output: 10

// const example
const z = 30;
const z = 50; // Error: Identifier 'z' has already been declared

2. Primitive data types in JavaScript:
Primitive data types in JavaScript are the most basic data types in the language and are immutable, meaning their values cannot be changed. They include 7 basic data type, which are;
i. Number:
Represents both integer and floating-point numbers.
Example: 42, 3.14

ii. String:
Represents a sequence of characters (text).
Example: "Hello, world!", 'JavaScript'

iii. Boolean:
Represents a logical entity and can have two values: true or false.
Example: true, false

iv.Undefined:
Represents a variable that has been declared but not yet assigned a value.
Example: let x; // x is undefined

v. Null:
Represents the intentional absence of any object value.
Example: let y = null; // y is null

vi. Symbol:
A unique and immutable value often used to identify object properties.
Example: const sym = Symbol('description');

vii. BigInt:
Represents integers with arbitrary precision, useful for working with large numbers.
Example: const bigInt = 9007199254740991n;

3. Explaining the difference between .map() and .forEach() methods.
.map() and .forEach() are both array methods in JavaScript used to iterate over an array and perform an action on each element. The key difference between them is that .map() returns a new array with the results of the provided function, while .forEach() does not return anything and is used for its side effects.
Example
let numbers = [1, 2, 3, 4];

// Using .map()
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Using .forEach()
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8 (but does not return a new array)
*/
//Cod1: 1. Creating an array of 10 fruits. Using .map() to return an array of their lengths.
const fruits = ["apple", "banana", "orange", "kiwi", "mango", "grape", "papaya", "cherry", "pear", "plum"];
const fruitLengths = fruits.map(fruit => fruit.length);

console.log(fruitLengths); 
// Output: [5, 6, 6, 4, 5, 5, 6, 6, 4, 4]

//Cod2. Using a for...of loop to print all numbers from 1 to 20.
for (let num of Array.from({ length: 20 }, (_, i) => i + 1)) {
    console.log(num);
}
  
//Cod3. Creating an array of numbers and using .filter() to return only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

  

/*
GROUP_2
1. The 'this' keyword in JavaScript refers to the object it belongs to. It possess different values depending on where it is used:
In a method, 'this' refers to the owner object.
Alone, 'this' refers to the global object (in browsers, it's window).
In a function, 'this' refers to the global object (in strict mode, it is undefined).
In an event, 'this' refers to the element that received the event.
In an object constructor, 'this' refers to the object being constructed.
*/
//Example:
const entity = {
  name: 'Jacob',
  age: 29,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};
console.log(entity.greet()); // Output: Hello, my name is Jacob and I am 25 years old.

/*
2. Differentiate between dot notation and bracket notation for accessing object properties.
Dot Notation:
Syntax: object.property
Commonly used when the property name is known and is a valid identifier.
Example: person.name
It is more readable and easier to write.

Bracket Notation:
Syntax: object['property']
Used when the property name is a string or a variable.
Example: person["name"]
It is useful when property names are dynamic or not valid identifiers.
*/
//Example:
const fruity = {
    Citrus: 'Orange',
    Berry: 'Strawberry',
    Melon: 'Watermelon',
    Tropical: 'Pineapple'
};
// Dot Notation
console.log(fruity.Citrus);

// Bracket Notation
console.log(fruity['Berry']);

/*
3. An object method is a function that is a property of an object. It is used to perform actions on the object or to access/modify its properties.
*/
//Example:
const vehicle = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  getCarInfo() {
    return `This car is a ${this.year} ${this.brand} ${this.model}`;
  }
};
console.log(car.getCarInfo()); // Output: This car is a 2020 Toyota Camry

//Cod1 => person object.
const person = {
    name: "Alice",
    age: 25,
    gender: "female",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet();

//Cod2
const car = {
    brand: "Toyota",
    model: "Hilux",
    year: 2020,
    getCarInfo: function() {
        return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
};

console.log(car.getCarInfo());

//Cod3
car["color"] = "Dragon Black";
console.log(car);

/* GROUP_3.
1. A function declaration defines a named function and is hoisted to the top of its scope.
Syntax: function functionName(parameters) { ... }
Example:
function greet() {
    console.log("Hello!");
}

greet();

A function expression defines a function as part of an expression and is not hoisted.
Syntax: const functionName = function(parameters) { ... };
Example:
const greet = function() {
    console.log("Hello!");
};

greet();

2.Arrow Function:
An arrow function is a concise way to write functions using the => syntax.
Example:
const today = () => {
    console.log('Today is a great day to code!');
};

today();

NB: Arrow functions do not have their own this; instead, they inherit this from their surrounding lexical scope. This makes them unsuitable for defining methods inside objects if you want this to refer to the object itself.
However, you can use arrow functions in combination with regular functions to work correctly within an object.
*/
//Example:

const myObject = {
  name: "RadiantLife",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, welcome to ${this.name}`);
    }, 1000);
  },
};

myObject.greet();

/*
The greet method is a regular function, so this correctly refers to myObject.
The setTimeout callback is an arrow function, meaning it inherits this from greet(), so this.name correctly refers to "RadiantLife".
*/


/*3. Switch Statement.
The switch statement is a conditional statement that is used to perform different actions based on different conditions.
Syntax:
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
        break;
}
Example:
const dayOfWeek = (day) => {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        default:
            return "Just another day to kill!";
    }
};

console.log(dayOfWeek(4));
*/

//Cod1:
//Write a function isEven() that accepts a number and returns "Even" if it is even and "Odd" if it is odd.

const isEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isEven(4));

//Cod2:
//Grade Calculator
const gradeCalculator = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
};

console.log(gradeCalculator(95));


/* GROUP_4.
1. Explaining the difference between a for loop and a while loop.
For Loop:
A for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
Syntax: for (initialization; condition; increment/decrement) { ... }
Example:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}


While Loop:
A while loop is used when the number of iterations is not known beforehand and depends on a condition.
Syntax: while (condition) { ... }
Example:
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}

2. try...catch block in JavaScript.
A try...catch block is used for error handling in JavaScript. The code that may cause an error is placed inside the try block, and the catch block contains code to handle the error if it occurs. This prevents the program from crashing and allows for graceful error handling.
Example:
try {
    let result = faultySyntaxCode();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

3. The finally block in error handling.
The finally block is used to execute code after the try and catch blocks, regardless of whether an error was thrown or not. It is typically used for cleanup operations, such as closing files or releasing resources.
Example:
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This runs regardless of the outcome.");
}
*/

//Cdd_1:
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
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


/*
GROUP 5.
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


/*GROUP 6.
1. Method in Object.
A method is a function that is defined inside an object and is associated with that object. It can access the object's properties using the this keyword.
Example:
const person = {
    name: "Stella",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Stella
NB=>In this example, greet is a method of the person object, and this.name refers to the name property of the person object.

2. The for...in and .for...of loops
for...in Loop: Iterates over the enumerable properties of an object (including inherited properties).
Example:
const person = { name: "Alice", age: 25 };
for (let word in person) {
    console.log(word + ": " + person[word]);
}
// Output:
// name: Alice
// age: 25

for...of Loop: Iterates over the values of an iterable object (e.g., arrays, strings).
Suitable for iterating over array elements or other iterable objects.
Example:
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

3. Concept of closures in JavaScript.
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. Closures are created when a function is defined inside another function, allowing the inner function to "remember" the environment in which it was created.
Example:
function outerFunction() {
    let outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: I'm outside!
*/


//Cod_1:
//Creating an object student with properties: name, age, scores (an array of numbers). Add a method averageScore() that calculates and returns the average score.
const student = {
    name: "Jackson",
    age: 20,
    scores: [90, 85, 88, 92, 78],
    averageScore: function() {
        const sum = this.scores.reduce((acc, score) => acc + score, 0);
        return sum / this.scores.length;
    }
};

console.log(student.averageScore()); // Output: 86.6

//Cod_2:
/*Writing a function fizzBuzz() that prints numbers from 1 to 20 but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
*/
function fizzBuzz() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

//Cod_3:
//Create an object calculator with methods add(), subtract(), multiply(), and divide() that perform basic arithmetic operations and return the results.

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 3));