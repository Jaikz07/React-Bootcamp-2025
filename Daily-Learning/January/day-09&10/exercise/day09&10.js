// Step 1: Creating an array called library with three book objects
let library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: false },
    { title: "1984", author: "George Orwell", available: true }
];

// Step 2: Adding a new book object to the library array
library.push({ title: "The Alchemist", author: "Paulo Coelho", available: true });

// Step 3: Using filter() to create a new array of all available books
let availableBooks = library.filter(book => book.available);

// Step 4: Using find() to locate a book by title (e.g., 'The Alchemist')
let foundBook = library.find(book => book.title === "The Alchemist");

// Step 5: Updating the available status of a specific book to false (simulating borrowing)
let borrowBook = library.find(book => book.title === "1984");
if (borrowBook) {
    borrowBook.available = false;
}

// Step 6: Using a map() to create a new array of strings that list each book's title and author
let bookDetails = library.map(book => `${book.title} by ${book.author}`);

console.log(library);
console.log(availableBooks);
console.log(foundBook);
console.log(bookDetails);