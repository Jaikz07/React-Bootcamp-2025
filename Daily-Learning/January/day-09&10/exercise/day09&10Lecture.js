JavaScript Arrays and Objects Methods – Comprehensive Lecture

1. Arrays in JavaScript
What is an Array?
An array is a data structure that stores a list of values, where each value is assigned an index starting from 0. Arrays are commonly used to manage collections of data.
Array Declaration:
const colors = ['red', 'blue', 'green']; // String array
const numbers = [10, 20, 30];           // Number array
const mixed = ['hello', 42, true];      // Mixed data types
const nested = [[1, 2], [3, 4]];        // Nested arrays

Array Methods:

1. push() – Adds Elements to the End
const fruits = ['apple', 'banana'];
fruits.push('mango', 'orange');
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']

2. pop() – Removes the Last Element
const fruits = ['apple', 'banana', 'mango'];
fruits.pop();
console.log(fruits); // ['apple', 'banana']

3. shift() – Removes the First Element
const fruits = ['apple', 'banana', 'mango'];
fruits.shift();
console.log(fruits); // ['banana', 'mango']

4. unshift() – Adds Elements to the Beginning
const fruits = ['banana', 'mango'];
fruits.unshift('apple', 'orange');
console.log(fruits); // ['apple', 'orange', 'banana', 'mango']

5. concat() – Combines Multiple Arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['mango', 'orange'];
const combined = fruits.concat(moreFruits);
console.log(combined); // ['apple', 'banana', 'mango', 'orange']

6. slice() – Extracts a Portion of an Array
const fruits = ['apple', 'banana', 'mango', 'orange'];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'mango']

7. splice() – Adds or Removes Elements
const fruits = ['apple', 'banana', 'mango'];
fruits.splice(1, 1, 'grapes', 'pear');
console.log(fruits); // ['apple', 'grapes', 'pear', 'mango']

8. indexOf() – Finds the Index of an Element
const fruits = ['apple', 'banana', 'mango'];
const index = fruits.indexOf('banana');
console.log(index); // 1

9. includes() – Checks if an Element Exists
const fruits = ['apple', 'banana', 'mango'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // true

10. map() – Creates a New Array by Transforming Elements
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

11. filter() – Filters Elements Based on a Condition
const numbers = [10, 20, 30, 40];
const filtered = numbers.filter(num => num > 20);
console.log(filtered); // [30, 40]

12. reduce() – Accumulates Values
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

13. find() – Finds the First Element That Matches a Condition
const numbers = [10, 20, 30, 40];
const found = numbers.find(num => num > 20);
console.log(found); // 30

14. sort() – Sorts an Array
const numbers = [40, 10, 30, 20];
numbers.sort((a, b) => a - b);
console.log(numbers); // [10, 20, 30, 40]

15. reverse() – Reverses an Array
const fruits = ['apple', 'banana', 'mango'];
fruits.reverse();
console.log(fruits); // ['mango', 'banana', 'apple']


2. Objects in JavaScript
What is an Object?
An object is a collection of key-value pairs. Keys are strings (or symbols), and values can be any data type.
Object Declaration:
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'traveling'],
  address: {
    city: 'Abuja',
    country: 'Nigeria'
  }
};

Object Methods:

1. Object.keys() – Gets All Keys
const person = { name: 'John', age: 30 };
const keys = Object.keys(person);
console.log(keys); // ['name', 'age']

2. Object.values() – Gets All Values
const person = { name: 'John', age: 30 };
const values = Object.values(person);
console.log(values); // ['John', 30]

3. Object.entries() – Gets Key-Value Pairs
const person = { name: 'John', age: 30 };
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30]]

4. Object.assign() – Merges Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combined = Object.assign({}, obj1, obj2);
console.log(combined); // { a: 1, b: 2 }

5. hasOwnProperty() – Checks if Property Exists
const person = { name: 'John' };
const hasName = person.hasOwnProperty('name');
console.log(hasName); // true

6. Adding and Removing Properties
const person = { name: 'John', age: 30 };
person.gender = 'Male';
delete person.age;
console.log(person); // { name: 'John', gender: 'Male' }

7. Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // 'John', 30

8. Spread Operator with Objects
const person = { name: 'John', age: 30 };
const updated = { ...person, city: 'Abuja' };
console.log(updated); // { name: 'John', age: 30, city: 'Abuja' }

9. Looping Through Objects
const person = { name: 'John', age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: John
// age: 30

Final Notes:
●Arrays are best for ordered data, like lists.
●Objects are ideal for structured, key-value data.
Mastering these methods is essential for building robust JavaScript applications.
