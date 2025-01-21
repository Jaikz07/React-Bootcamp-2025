// 50 Arrow functions.

const logMessage = () => console.log('Hello Beautiful People');
logMessage();

const getNumber = () => 42;
console.log(getNumber());

const getString = () => "GitHub Copilot";

const isAvailable = () => true;

const getRandomNumber = () => Math.random();

const getCurrentDateTime = () => new Date();

const logArray = () => console.log([1, 2, 3, 4, 5]);

const getObject = () => ({ name: "Jane Doe", age: 25 });

const logUpperCaseString = (str) => console.log(str.toUpperCase());

const logGreeting = () => console.log("Welcome to the JavaScript world!");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const concatenate = (str1, str2) => str1 + str2;

const max = (a, b) => (a > b ? a : b);

const min = (a, b) => (a < b ? a : b);

const isEven = (num) => num % 2 === 0;

const isOdd = (num) => num % 2 !== 0;

const getLength = (str) => str.length;

const toUpperCase = (str) => str.toUpperCase();

const toLowerCase = (str) => str.toLowerCase();

const contains = (arr, value) => arr.includes(value);

const getFirstElement = (arr) => arr[0];

const getLastElement = (arr) => arr[arr.length - 1];

const getRectangleArea = (width, height) => width * height;

const getCircumference = (radius) => 2 * Math.PI * radius;

const greet = (name) => `Hello, ${name}!`;

const square = (num) => num * num;

const cube = (num) => num * num * num;

const isPositive = (num) => num > 0;

const isNegative = (num) => num < 0;

const absoluteValue = (num) => Math.abs(num);

const squareRoot = (num) => Math.sqrt(num);

const getArrayLength = (arr) => arr.length;

const joinArray = (arr) => arr.join(", ");

const reverseString = (str) => str.split("").reverse().join("");

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getCurrentYear = () => new Date().getFullYear();

const getCurrentMonth = () => new Date().getMonth() + 1;

const getCurrentDay = () => new Date().getDate();

const logError = (message) => console.error(message);

const logWarning = (message) => console.warn(message);

const getRandomBoolean = () => Math.random() >= 0.5;

const startsWith = (str, prefix) => str.startsWith(prefix);

const endsWith = (str, suffix) => str.endsWith(suffix);

const indexOf = (arr, value) => arr.indexOf(value);

const toCharArray = (str) => str.split("");

const containsSubstring = (str, substring) => str.includes(substring);

const repeatString = (str, times) => str.repeat(times);