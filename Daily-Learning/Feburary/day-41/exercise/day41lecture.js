/*
JavaScript Errors and Error Handling

Introduction
Errors are an inevitable part of programming, and JavaScript provides several ways to handle and debug them effectively. Understanding how errors occur and how to manage them helps in writing robust and efficient applications.

Types of Errors in JavaScript
JavaScript errors can be classified into different categories:

1. Syntax Errors (SyntaxError)
Syntax errors occur when the JavaScript engine encounters code that violates the language syntax rules.
Example
const name = "John"  // Missing semicolon (optional, but recommended)
console.log("Hello, " name); // Syntax error due to missing `+` operator
Fix
const name = "John";
console.log("Hello, " + name);
Use Case: Ensuring code follows correct JavaScript syntax.

2. Reference Errors (ReferenceError)
A reference error occurs when trying to access a variable that has not been declared.
Example
console.log(myVariable); // ReferenceError: myVariable is not defined
Fix
const myVariable = "Hello";
console.log(myVariable);
Use Case: Ensuring all variables are properly declared before usage.

3. Type Errors (TypeError)
Type errors occur when a value is used in an inappropriate way.
Example
const num = 10;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function
Fix
const text = "Hello";
console.log(text.toUpperCase()); // Correct usage
Use Case: Preventing incorrect method calls on data types.

4. Range Errors (RangeError)
A range error occurs when a value is out of an allowable range, such as an invalid array length.
Example
const arr = new Array(-5); // RangeError: Invalid array length
Fix
const arr = new Array(5); // Valid array length
Use Case: Validating array lengths and numeric values.

5. Eval Errors (EvalError)
EvalError occurs when using the eval() function incorrectly (though it’s rarely used in modern JavaScript).
Example
eval("console.log('Hello)"); // EvalError: unterminated string
Fix
eval("console.log('Hello')");
Use Case: Avoid using eval() unless necessary.

Error Handling in JavaScript
To handle errors effectively, JavaScript provides the try...catch...finally and throw statements.
1. try...catch Block
The try block runs a piece of code, and if an error occurs, the catch block executes.
Example
try {
    console.log(undefinedVariable); // ReferenceError
} catch (error) {
    console.log("An error occurred:", error.message);
}
Output:
An error occurred: undefinedVariable is not defined
Use Case: Catching and handling unexpected errors gracefully.

2. throw Statement
You can manually generate errors using the throw keyword.
Example
function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older.");
    }
    return "Access granted!";
}

try {
    console.log(checkAge(16)); // Throws an error
} catch (error) {
    console.log(error.message);
}
Output:
You must be 18 or older.
Use Case: Creating custom error messages.

3. finally Block
The finally block always runs after try and catch, regardless of whether an error occurred.
Example
try {
    let data = JSON.parse("{ invalid json }"); // Causes error
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Execution completed.");
}
Output:
Error: Unexpected token i in JSON at position 2
Execution completed.
Use Case: Ensuring necessary cleanup operations, like closing database connections.

Handling Asynchronous Errors
In JavaScript, asynchronous operations (e.g., API calls, file reading) can fail. The best way to handle such errors is using .catch() with Promises or try...catch in async functions.
Using .catch() with Promises
fetch("https://invalid-url.com")
    .then(response => response.json())
    .catch(error => console.log("Error fetching data:", error.message));
Use Case: Handling API request failures.
Using try...catch in Async Functions
async function fetchData() {
    try {
        let response = await fetch("https://invalid-url.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();
Use Case: Handling async/await errors gracefully.

Debugging Errors
1.Use console.log() – Print variables to understand the flow of your code.
2.Use Developer Tools – Check the Console tab in Chrome or Firefox DevTools.
3.Use debugger Statement – Pause execution in DevTools.
4.Linting Tools (ESLint, Prettier) – Catch errors before running the code.

Class Work
Task 1: Identifying Errors
What type of error will each of the following produce?
1.console.log(undefinedVariable);
2."Hello".pop();
3.const obj = {}; console.log(obj.name.age);
4.new Array(-1);
5.eval("console.log(Hello)");

Task 2: Implementing Try-Catch
Write a program that:
Asks the user to enter a number.
Throws an error if the input is not a valid number.
Catches the error and displays an appropriate message.

Take-Home Assignment
1.Write a JavaScript function divide(a, b) that:
Throws an error if b is 0
Returns a / b otherwise
Uses try...catch to handle the error
2.Write an async function that fetches data from https://jsonplaceholder.typicode.com/posts/1 and:
Uses try...catch to handle errors
Logs the post title if successful

Conclusion
Understanding JavaScript errors and handling them properly ensures better debugging and prevents unexpected crashes in applications. Using try...catch, throw, and debugging tools effectively helps in writing robust, error-free JavaScript code. 🚀
*/