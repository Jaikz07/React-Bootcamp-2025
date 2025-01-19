// 50 arrow functions without parameters
// 1.
const greet = () => {
    console.log("Displays a welcome message");
};
greet();

// 2.
const getNumber = () => console.log('this displays integers and floats');
getNumber();

// 3.
const getString = () => "displays this given string";
getString();

// 4. 
const isAvailable = () => true;
isAvailable();

// 5. 
const getRandomNumber = () => Math.random();
getRandomNumber();

// 6. 
const getCurrentDateTime = () => new Date();
getCurrentDateTime();

// 7. 
const logArray = () => {
    console.log([]);
};
logArray();

// 8.
const getObject = () => ({ });
getObject();

// 9.
const logUpperCaseString = () => { //logs a string in uppercase
   console.log("String".toUpperCase());
};
logUpperCaseString();

// 10.
const logGreeting = () => {
    console.log("");
};
logGreeting();

//11.
const add = (a, b) => {
    a + b;
};
add();

// 12. Arrow function to log a welcome message
const welcome = () => {
    console.log("");
};
welcome();

// 13.  
const isEnabled = () => false; //return a fixed boolean value
isEnabled();

// 14. 
const logCurrentYear = () => { //logs the current year.
    console.log(new Date().getFullYear());
};
logCurrentYear();

// 15. 
const stringLength = () => "string".length; //return the length of a fixed string.
stringLength();

// 16. 
const getArray = () => []; //return a fixed array.
getArray();

// 17.
const goodbye = () => { //log a goodbye message.

    console.log("Goodbye!");
};

// 18.
const getUser = () => ({ }); //return a fixed object
getUser();

// 19. 
const logSuccess = () => { //Arrow function to log a success message.
    console.log("");
};
logSuccess();


// 20.
const getSquare = () => a**2; //returns the square of a fixed number
getSquare();

// 21.
const logFailure = () => { //log a failure message
    console.log("Operation failed!");
};

// 22.
const logRandomInt = () => {  //log a random integer between 1 and 100
    console.log(Math.floor(Math.random() * 100) + 1);
};
logRandomInt();

// 23.
 const getDateString = () => new Date().toDateString();

// 24.
const logLowerCase = () => {  //Arrow function to log a fixed string in lowercase
    console.log("String".toLowerCase());
};
logLowerCase();


// 25.
const logCurrentTime = () => { //log the current time
    console.log(new Date().toLocaleTimeString());
};
logCurrentTime();

// 26.
const logNumber = () => { //log a fixed number
    console.log();
};
logNumber();

// 27. 
const isLoggedIn = () => true; //return a fixed boolean value

// 28. 
const logFixedArray = () => { //log a fixed array
    console.log([]);
};
logFixedArray();

// 29. 
const getType = () => typeof "text";


// 30.
const logTemplateLiteral = () => {   //log a fixed message with template literals
    console.log(`String ${new Date().toDateString()}`);
};
logTemplateLiteral();

// 31. Add two numbers
const sum = (a, b) => a + b;

// 32. Subtract two numbers
const subtract = (a, b) => a - b;

// 33. Multiply two numbers
const multiply = (a, b) => a * b;

// 34. Divide two numbers
const divide = (a, b) => a / b;

// 35. Concatenate two strings
const concatenate = (str1, str2) => str1 + str2;

// Maximum of two numbers
const max = (a, b) => (a > b ? a : b);

// 37. Minimum of two numbers
const min = (a, b) => (a < b ? a : b);

// 38. Check if a number is even
const isEven = num => num % 2 === 0;

// 39. Check if a number is odd
const isOdd = num => num % 2 !== 0;

// 40. Return the length of a string
const getLength = str => str.length;

// 41. Convert a string to uppercase
const toUpperCase = str => str.toUpperCase();

// 42. Convert a string to lowercase
const toLowerCase = str => str.toLowerCase();

// 43. Check if an array contains a value
const contains = (arr, value) => arr.includes(value);

// 44. Return the first element of an array
const getFirstElement = arr => arr[0];

// 45. Return the last element of an array
const getLastElement = arr => arr[arr.length - 1];

// 46. Calculate the area of a rectangle
const getRectangleArea = (width, height) => width * height;

// 47. Calculate the circumference of a circle
const getCircumference = radius => 2 * Math.PI * radius;

// 48. Return a greeting message
const salute = name => `Hello, ${name}!`;

// 49. Return the square of a number
const square = num => num * num;

// 50. Return the cube a number
const cube = num => num * num * num;

