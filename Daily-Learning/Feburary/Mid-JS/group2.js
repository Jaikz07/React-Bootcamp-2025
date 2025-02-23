/*
Group 2 – Objects & Object Methods
Subjective Questions:
1.What is the this keyword in JavaScript? Explain with an example.
2.Differentiate between dot notation and bracket notation for accessing object properties.
3.What is an object method? Provide an example.
Coding Questions:
1.Create an object person with properties: name, age, gender, and a method greet() that logs a greeting using template strings.

const person = {
  // Your code here
};

2.Create an object car with properties: brand, model, year. Add a method getCarInfo() that returns "This car is a [year] [brand] [model]".
3.Add a new property color to the car object using bracket notation.
*/

//Answers and Solutions.

/*
1. The 'this' keyword in JavaScript refers to the object it belongs to. It possess different values depending on where it is used:
In a method, 'this' refers to the owner object.
Alone, 'this' refers to the global object (in browsers, it's window).
In a function, 'this' refers to the global object (in strict mode, it is undefined).
In an event, 'this' refers to the element that received the event.
In an object constructor, 'this' refers to the object being constructed.
*/
//Example:
const entity = {
    name: 'Jacob',
    age: 195,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };
  console.log(entity.greet()); // Output: Hello, my name is Jacob and I am 195 years old.
  
  /*
  2. Differentiating between dot notation and bracket notation for accessing object properties.
  Dot Notation:
  Syntax: object.property
  Commonly used when the property name is known and is a valid identifier.
  Example: person.name
  It is more readable and easier to write.
  
  Bracket Notation:
  Syntax: object['property']
  Used when the property name is a string or a variable.
  Example: person["name"]
  It is useful when property names are dynamic or not valid identifiers.
  */
  //Example:
  const fruity = {
      Citrus: 'Orange',
      Berry: 'Strawberry',
      Melon: 'Watermelon',
      Tropical: 'Pineapple'
  };
  // Dot Notation
  console.log(fruity.Citrus);
  
  // Bracket Notation
  console.log(fruity['Berry']);
  
  /*
  3. An object method is a function that is stored as a property of an object, that can perform actions using the object's data and can access properties using the 'this' keyword.
  */
  //Example:
  const vehicle = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    getCarInfo() {
      return `This car is a ${this.year} ${this.brand} ${this.model}`;
    }
  };
  console.log(car.getCarInfo()); // Output: This car is a 2020 Toyota Camry
  //NB=> The getCarInfo is a method of the vehicle object because it is a function inside an object.

  //Cod_1 => person object.
  const person = {
      name: "Alice",
      age: 25,
      gender: "female",
      greet: function() {
          console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
  };
  
  person.greet();
  
  //Cod_2
  const car = {
      brand: "Toyota",
      model: "Hilux",
      year: 2020,
      getCarInfo: function() {
          return `This car is a ${this.year} ${this.brand} ${this.model}.`;
      }
  };
  
  console.log(car.getCarInfo());
  
  //Cod_3
  car["color"] = "Dragon Black";
  console.log(car);

  //END.