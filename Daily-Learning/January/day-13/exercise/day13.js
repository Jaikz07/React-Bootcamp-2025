/* This is the syntax on a JavaScript Object.
const objectName = {
    key1: value1,
    key2: value2,
    key3: value3,

};


const student = {
    name: 'Jone Doe',
    age: 27,
    subject: ['maths', 'physics', 'chemistry'],
    isGraduate: false,
    gender: 'Male',
};

/*The syntax for accessing an object property in JS is:
dot notation, the syntax for dot notation is;

//objectName.ObjectKey

console.log(student.subject);

const subjects = ["math", "physics", "chemistry"];

const key = 'age';
console.log(student[key]);

students.grade = 'A+';
//delete student.isGraduate;

for (const key in student) {
    console.log('${key}: ${student[key]}');
    console.log(key);
} 
*/

/*Classwork Assignment: Object Manipulation and Iteration in JavaScript

Objective:
To understand how to create and manipulate objects in JavaScript, and use loops to iterate over their properties.
Scenario:
You are a student in a department that offers 9 courses. Each course has a name and a corresponding grade assigned to it. Your task is to create an object to represent these courses and their grades, and then perform operations on this object.

Assignment Questions:
1.Object Creation:
Create an object named courses that contains 9 courses offered by your department. Each course should be a property of the object, and the value of each property should be the grade assigned to that course (e.g., A, B, C, etc.).
2.Iteration and Display:
Use a for...in loop to iterate over the courses object and display each course name along with its corresponding grade in the format: Course: [Course Name], Grade: [Grade].
3.Grade Analysis:
Calculate and display the following:
The total number of courses.
The number of courses where the grade is A.
The number of courses where the grade is B or lower.
4.Grade Improvement:
Suppose you want to improve your grades. Write a plan (in words) to update the grades of at least 3 courses in the courses object. Explain which courses you would improve and why.
5.Advanced Task (Optional):
If you were to add a new course to the courses object, how would you do it? Describe the steps and write the code (if you want to attempt it).

Example Structure of the courses Object:
Your courses object might look something like this:
const courses = {
  mathematics: "A",
  physics: "B",
  chemistry: "C",
  biology: "A",
  programming: "B",
  literature: "A",
  history: "C",
  economics: "B",
  art: "A"
};

Instructions:
1.Write your answers to the questions in a clear and structured manner.
2.Use comments to explain your steps if you write any code.
3.Be prepared to discuss your approach and reasoning during the class.

Learning Outcomes:
By completing this assignment, you will:
Understand how to create and manipulate objects in JavaScript.
Learn how to iterate over object properties using loops.
Gain experience in analyzing and updating data stored in objects.
*/

//Object creation
const courses = {
    mathematics: "A",
    physics: "c",
    chemistry: "C",
    biology: "A",
    programming: "B",
    literature: "b",
    history: "C",
    economics: "B",
    art: "A"
};


//Iteration(Loop) and Display.
for (const subjects in courses) {
    console.log(`Course: ${subjects}, Grade: ${courses[subjects]}`); // Displays each course name along with its corresponding grade.
}

//Grade Analysis
let totalCourses = 0; //assigns a variable totalCourses to count the total number of courses. starting at 0.
let gradeACount = 0; // assigns a variable gradeACount to count the number of courses with a grade of 'A' starting at 0.
let gradeBOrLowerCount = 0; //assigns a variable gradeBOrLowerCount to count the number of courses with a grade of 'B' or lower. starting at 0.

for (const subjects in courses) { //Starts a loop that iterates over each property () in the courses object. The subject variable represents the property name (course name) in each iteration.
    totalCourses++; //Increments the totalCourses variable by 1 for each course in the object.
    if (courses[subjects] === "A") { //Checks if the grade for the current course is 'A'.
        gradeACount++; //If the grade is 'A', it increments the gradeACount variable by 1.
    } else if (courses[subjects] === "B" || courses[subjects] === "C" || courses[subjects] === "D" || courses[subjects] === "F") { //checks if the grade is 'B', 'C', 'D', or 'F'.
        gradeBOrLowerCount++; // If the grade is 'B' or lower, it increments the gradeBOrLowerCount variable by 1.
    }
}

console.log(`Total number of courses: ${totalCourses}`); //logs the total number of courses to the console.
console.log(`Number of courses with grade A: ${gradeACount}`); //logs the number of courses with a grade of 'A' to the console.
console.log(`Number of courses with grade B or lower: ${gradeBOrLowerCount}`); // logs the number of courses with a grade of 'B' or lower to the console.


//Grade Improvement Plan.
/* 
Plan to improve grades:
- Improve physics grade from C to A because it is a core subject fundamental to understanding other scientific courses.
- Improve chemistry grade from C to A to enhance understanding of chemical reactions and processes.
- Improve history grade from C to A to achieve a well-rounded education and improve overall GPA.
*/

// Adding a new course to courses.
courses.InformationTechnology = "A";

// Displays the updated courses object
console.log(courses);