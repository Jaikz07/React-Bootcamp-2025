/*
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
*/


/*
ANSWERS SOLUTION. 
1. A function declaration defines a named function and is hoisted to the top of its scope.
Syntax: function functionName(parameters) { ... }
*/
//Example:
function greet() {
    console.log("Hello!");
}

greet();

/* A function expression defines a function as part of an expression and is not hoisted.
Syntax: const functionName = function(parameters) { ... }; */
//Example:
const greet = function() {
    console.log("Hello!");
};

greet();

/* 2.Arrow Function:
An arrow function is a concise way to write functions using the => syntax.*/
//Example:
const today = () => {
    console.log('Today is a great day to code!');
};

today();

/* NB: Arrow functions do not have their own this; instead, they inherit this from their surrounding lexical scope. This makes them unsuitable for defining methods inside objects if you want this to refer to the object itself.
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
  } */
  //Example:
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