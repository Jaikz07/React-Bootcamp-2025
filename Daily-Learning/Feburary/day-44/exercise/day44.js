//Getting Hands dirty

const whatAreWeDoingToday = () => {
    return "Today is another great day to code a program that impacts the global village?";
};

console.log(whatAreWeDoingToday());


// Using IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This code runs immediately!");
})();

// Using the 'arguments' object in a function
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Using default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!