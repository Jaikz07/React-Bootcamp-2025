/*
Class Work
Task 1: Print numbers from 1 to 10 using:
1.A for loop.
2.A while loop.
3.A do...while loop.
Task 2: Write a program that prints even numbers from 2 to 20 using a for loop.
Task 3: Given an object:
const student = { name: "John", age: 20, grade: "A" };
Use a for...in loop to print all the keys and values.
Task 4: Use a for...of loop to iterate over this array:
const colors = ["Red", "Green", "Blue"];

Take-Home Assignment.
1.Write a JavaScript program that prints numbers from 1 to 50. However:
For multiples of 3, print "Fizz".
For multiples of 5, print "Buzz".
For multiples of both 3 and 5, print "FizzBuzz".
2.Write a JavaScript program to find the sum of all numbers from 1 to 100 using a loop.

Conclusion
Loops are fundamental in JavaScript for automating repetitive tasks. Understanding for, while, do...while, for...in, and for...of loops will help you write more efficient and cleaner code. Keep practicing and experiment with different loop scenarios!
*/

//Class work Solutions
//1 - 10 iteration
for (let num = 1; num <= 10; num++) {
    console.log('number' + num);
}


let jay = 1;
while (jay <= 10) {
    console.log('The number is:' + jay);
    jay++;
}


let vibez = 1;

do {
    console.log("vibration: " + vibez);
    vibez++;
} while (vibez <= 10);

// even number iteration
for (let number = 2; number <= 50; number++) {
    if (number % 2 === 0) {
        console.log(number + ' is an even number');
    }
}

//object iteration
const student = { name: "John", age: 20, grade: "A" };
for (const dent in student) {
    console.log(`${dent}: ${student[dent]}`);
}

// array iteration
const colors = ["Red", "Green", "Blue"];
for (const look in colors) {
    console.log(`${look}`)
} 

//Assigment Solution.
//1.
for (let vamp = 1; vamp <= 50; vamp++) {
    if (vamp % 3 === 0) {
        console.log('Fizz');
    }else if (vamp % 5 === 0) {
        console.log('Buzz');
    }else if (vamp % 3 === 0 && vamp % 5 === 0) {
        console.log('FizzBuzz');
    }else {
        console.log('NaN');
    }
}


let sum = 0;
for (roll = 1; roll <= 100; roll++) {
    sum += roll;
} 
console.log('The sum of numbers 1 to 100 is:', sum);

//END