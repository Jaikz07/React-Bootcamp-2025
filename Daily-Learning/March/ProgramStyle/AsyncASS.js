//ASSIGNMENT: enter 2 promises and consume them, choose watever will be your promise but ensure to follow the promise syntax.

// Promise 1 - Simulate data fetch using setTimeout
const userData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const validUser = true;
        if (validUser) {
        resolve("User data fetched successfully!");
        }
        else 
        reject("Failed to fetech user data...");
    }, 2000);
});

// Promise 2 - Simulate user authentication
const authenticateUser = new Promise((resolve, reject) => {
    const isAuthenticated = true;
    if (isAuthenticated) {
        resolve("User authenticated.");
    } else {
        reject("Authentication failed.");
    }
});

// Consuming the promises separately
userData
    .then(data => console.log(data))
    .catch(error => console.error("Fetch Error:", error));

authenticateUser
    .then(auth => console.log(auth))
    .catch(error => console.error("Auth Error:", error));

// Using Promise.all to wait for both to finish
Promise.all([userData, authenticateUser])
    .then(results => {
        console.log("All Promises Resolved:");
        console.log(results); // [ "Data fetched successfully!", "User authenticated." ]
    })
    .catch(error => {
        console.error("One of the promises failed:", error);
    });