/*Day 15 Overview*

In our ongoing discussions on Object and its methods, we looked at the following:
Understanding Objects: 
     Definition and syntax 
Accessing Objects properties:
     Dot notation and Bracket notation 

We are currently studying Iterating over Objects, and we’ve looked at
     Using for…in and Using Object.keys()
Today, under iteration of Object, we’ll focus on 
     Using Object.Values() and Using Object.entries 

After which we will do the assignment together and move to Object Methods , this will be our core focus on today’s lecture.
*/

const car = {
     brand: "Toyota",
     model: "Camry",
     weight: "850kg",
     color: "white",
     start: function(){
         console.log("car has started");
     },
     drive: function(){
         console.log("car is driving");
     },
     getDetails: function(){
         return `${car.brand} ${car.model} ${car.color} ${car.weight}`
         // we used the native dot notation way of refrencing an Object key
     },
     getDetailsUsingThis: function(){
         return `${this.brand} ${this.model} ${this.color} ${this.weight}`
         // we used the this method of refrencing an Object key
     },
     getdetailsUsingBracketNotation: function(){
         console.log(`${car["brand"]} ${car["model"]} ${car["color"]} ${car["weight"]}`)
         // we used the bracket notation way of refrencing an Object key
         console.log('${this["brand"])} ${this["model"])} ${this["color"])} ${this["weight"])}')
     },
 };
 
 // car.getdetailsUsingBracketNotation()
 console.log(car.getDetailsUsingThis())
 
 console.log(car['brand']);