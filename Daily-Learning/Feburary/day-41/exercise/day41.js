/*
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
*/

//Solution.
/*
Task1
1. ReferenceError: undefinedVariable is not defined.
2. Type error: "Hello".pop(); is not a function 
3. Type error: undefined.
4. Range error: invalid array length cus 0f the negative number.
5. Reference error: Hello not defined.
*/

//Task2
function enteredNumber() {
    try {
        let userInput = prompt("Enter a number:");
        if (isNaN(userInput) || userInput.trim() === "") {
            throw new Error("Invalid input! Please enter a valid number.");
        }
        console.log("You entered:", Number(userInput));
    } catch (error) {
        console.error(error.message);
    }
}

enteredNumber();


//Assignment.
//1.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Number not divisible by 0.");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        return null; 
    }
}

// Example
console.log(divide(10, 2)); // Output: 5
console.log(divide(5, 0));  // Output: Error message + null


//2.
async function fetchPost(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Post ${postId} Title:`, data.title);
    } catch (error) {
        console.error(`Error fetching post ${postId}:`, error.message);
    }
}

// Example:
fetchPost(1);  // Fetch post with ID 1
fetchPost(5);  // Fetch post with ID 5
fetchPost(100); // Fetch post with ID 100

//End