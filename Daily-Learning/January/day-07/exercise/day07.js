/*Day-07 Task*

Read carefully 
Create the required directory and file of the day 

Write all your task in your file 

Push codes and send url


*Basic Variables (Strings, Numbers, and Booleans)*
 1. Declare a variable to store your first name.
 2. Declare a variable to store your last name.
 3. Store your age in a variable.
 4. Create a variable to hold your favorite color.
 5. Declare a variable for today’s date (e.g., “January 7, 2025”).
 6. Store your birth year in a variable.
 7. Declare a variable to represent whether you like chocolate (true or false).
 8. Create a variable for the name of your school.
 9. Save your favorite movie title in a variable.
 10. Declare a variable for your country of origin.
*/
 // Variable Declaration...
 const firstName = 'Jacob';
 const lastName = 'Solomon';
 let age = 29;
 const favouriteColor = 'white';
 let date2day = '12th January, 2025';
 const birthYear = '1995';
 let likeChocolate = false;
 const schoolName = 'Federal University Dutsinma';
 let favouriteMovie = 'Prison Break';
 const countryOfOrigin = 'Nigeria';
/*
Mathematical Variables
 11. Create variables for two numbers and calculate their sum.
 12. Declare variables for length and width, then calculate the area of a rectangle.
 13. Store your current age and add 5 years to it.
 14. Declare a variable for your height in meters.
 15. Calculate the perimeter of a square given the length of its sides.
 16. Create variables for distance and time, then calculate speed.
 17. Declare variables for price and quantity, then calculate the total cost.
 18. Store the radius of a circle and calculate its circumference (C = 2πr).
 19. Calculate the square of any number.
 20. Create a variable for hours worked and hourly pay, then find the total salary.
*/
// Mathematical Variable and Calculations...
let a = 3, b = 2;
const sum = a + b;
console.log(sum);
let length = 5, width = 3;
const areaOfRectangle = length * width;
console.log(areaOfRectangle);

let ageIn5Years = age + 5;
console.log(ageIn5Years);
let heightInMeters = 1.82;
console.log(heightInMeters);

let = lengthOfSides = 5;
const perimeterOfSquare = 4 * lengthOfSides;
console.log(perimeterOfSquare);

let distance = 10, time = 5;
const speed = distance / time;
console.log(speed);

let price = 550, quantity = 25;
const totalCost = price * quantity;
console.log(totalCost);

let radius(r) = 5;
const pi = Math.PI; // Using the Math.PI constant for the value of π
const perimeterOfCircle = 2 * pi * radius;
console.log(perimeterOfCircle);

let number = 10;
const square = number ** 2;
conosle.log(square);

let workedHours = 12;
let hourlyPay = 1150;
const totalSalary = workedHours * hourlyPay;
console.log(totalSalary);

/*String Concatenation and Template Literals
 21. Combine your first and last name into a full name.
 22. Use a template literal to create a sentence introducing yourself.
 23. Write a sentence using concatenation (e.g., “My name is “ + name).
 24. Declare a variable for a city and state, then format it like “Abuja, Nigeria.”
 25. Create a variable for a hobby and describe it in one sentence.
 26. Concatenate three variables (e.g., name, age, hobby) into one sentence.
 27. Store a message and add a greeting in front of it.
 28. Create variables for a product name and price, then format it as “Item: ₦500.”
 29. Store a quote and include the author’s name.
 30. Declare variables for a friend’s name and send them a welcome message.
*/
const fullName = firstName + lastName;
const introduction = `Hello, my name is ${fullName}. Nice to meet you!`;
console.log(introduction);
let sentence = "i am " + fullName + "by name.";

let city = "Abuja";
let state = "Nigeria";
let address = city + ", " + state;
console.log(address); 

let hobby = "music, coding and sleeping";
let hobbyDescription = "I enjoy " + hobby[1] + " in my free time.";
console.log(hobbyDescription);
let selfInfo = "My name is " + fullName + ", I am " + age + " years old, and I love " + hobby[0, 'and', 1] + ".";

let message = "it's a pleasure to have you here!";
let greeting = "Hello! " + firstName + message;
console.log(greeting);

let productName = "Laptop";
let price = "₦500";
let productInfo = "Item: " + productName + ", Price: " + price;
console.log(productInfo);

let quote = "Life begins in it's fullness for us all where fear ends.";
let author = "Jayson Solomon";
let fullQuote = quote + " - " + author;
console.log(fullQuote);

let friendName = "Richard";
let welcomeMessage = "Hi " + friendName + ", welcome to the 2025 React Bootcamp!";
console.log(welcomeMessage);


/*Bonus Challenge:
 • Write 10 additional variables that describe random facts about yourself.
 • Use console.log() to display all variables in a formatted list.
*/

const favoriteColor = "white";
const favoriteFood = "Rice and Beans";
const favoriteSport = "Football";
const favoriteBook = "Art of War";
const favoriteMusicGenre = "rythm and blues";
const dreamDestination = "Prague, Czech";
const favoriteQuote = "To dare is to do!;
const funFact = "apt at learning new things and apt letting go.";
const skills = "dismantling and coupling, data analysis and visualization"
const lifeStyle = "Simple and Sweet"

// Displaying all variables in a formatted list
console.log("Random Facts About Me:");
console.log("1. Favorite Color: " + favoriteColor);
console.log("2. Favorite Food: " + favoriteFood);
console.log("3. Favorite Sport: " + favoriteSport);
console.log("4. Favorite Book: " + favoriteBook);
console.log("5. Favorite Music Genre: " + favoriteMusicGenre);
console.log("6. Dream Destination: " + dreamDestination);
console.log("7. Favorite Quote: " + favoriteQuote);
console.log("8. Fun Fact: " + funFact);
console.log("9. Skills:" + skills);
console.log("10. Lifestyle:" + lifeStyle);
