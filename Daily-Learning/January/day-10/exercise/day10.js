// Task 1: Array Operations
const products = ['shoes', 'bags', 'watches', 'hats'];

// 1. Adding two new products: 'gloves' and 'scarves' to the end of the Array
products.push('gloves', 'scarves');
 
const productsAdded = [...products];
console.log('Products added:', productsAdded);
/*[...] is a spread operator used to expand,create, concatenate a copy of an array without modification.
It is used to create a new array using an existing array.
#Benfits of spread operator.
-Non-destructive: It does not modify the original array.
-Cleaner syntax: It is more concise and easier to read.
-Performance: It is faster than other methods like concat() or slice().
-Veraity of uses: It can be used for copying, merging, and spreading elements.
*/
const aNewArray = [...filteredProducts, 'dark_shades', 'sunglasses'];
console.log('A new array:', aNewArray);
// 2. Remove the first product from the list
products.shift();

// 3. Sort the products alphabetically
products.sort();

// 4. Find and log the index of 'watches'
const watchesIndex = products.indexOf('watches');
// console.log('Index of watches:', watchesIndex);

// 5. Filter out all products that start with the letter 's'
const filteredProducts = products.filter(product => !product.startsWith('s'));

// console.log('Filtered products:', filteredProducts);

/* Task 2: Object Operations
const student = {
    name: 'John Doe',
    age: 20,
    subjects: ['Math', 'Science', 'History']
};

// 1. Add a new key-value pair: grade (e.g., 'A+')
student.grade = 'A+';

// 2. Remove the age property
delete student.age;

// 3. Use Object.keys() to log all the properties of the student object
console.log('Student properties:', Object.keys(student));

// 4. Use Object.values() to log all the values of the student object
console.log('Student values:', Object.values(student));

// 5. Use a for...in loop to print the key-value pairs in the format: key: value
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
*/