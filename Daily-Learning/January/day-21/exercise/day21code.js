// Define a complex object
const library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        { title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: true },
        { title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false },
        { title: "You Don't Know JS", author: "Kyle Simpson", available: true }
    ],
    members: [
        { name: "Alice", memberId: 1, borrowedBooks: [] },
        { name: "Bob", memberId: 2, borrowedBooks: ["Eloquent JavaScript"] }
    ],
    // Complex function to borrow a book
    borrowBook: function(memberId, bookTitle) {
        const member = this.members.find(member => member.memberId === memberId);
        const book = this.books.find(book => book.title === bookTitle);

        if (!member) {
            return `Member with ID ${memberId} not found.`;
        }
        if (!book) {
            return `Book titled "${bookTitle}" not found.`;
        }
        if (!book.available) {
            return `Book titled "${bookTitle}" is currently not available.`;
        }

        book.available = false;
        member.borrowedBooks.push(bookTitle);
        return `${member.name} successfully borrowed "${bookTitle}".`;
    },
    // Complex function to return a book
    returnBook: function(memberId, bookTitle) {
        const member = this.members.find(member => member.memberId === memberId);
        const book = this.books.find(book => book.title === bookTitle);

        if (!member) {
            return `Member with ID ${memberId} not found.`;
        }
        if (!book) {
            return `Book titled "${bookTitle}" not found.`;
        }
        if (!member.borrowedBooks.includes(bookTitle)) {
            return `${member.name} did not borrow "${bookTitle}".`;
        }

        book.available = true;
        member.borrowedBooks = member.borrowedBooks.filter(title => title !== bookTitle);
        return `${member.name} successfully returned "${bookTitle}".`;
    }
};

// Example usage
console.log(library.borrowBook(1, "JavaScript: The Good Parts"));
console.log(library.returnBook(2, "Eloquent JavaScript"));