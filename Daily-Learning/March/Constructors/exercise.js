// Using a constructor function, create 12 objects and loop over the last two.

class Person {
    constructor(designation, name, specialization) {
        this.designation = designation;
        this.name = name;
        this.specialization = specialization;
    }
}

const People = [
    new Person("Prof", "Fatoye", "Analyst"),
    new Person("Dr", "Ahmed", "Virulogist"),
    new Person("San", "Akinwole", "Judge"),
    new Person("Mr", "Ezenowu", "Entreprenuer"),
    new Person("Dr", "William", "Gynecologist"),
    new Person("Engr", "Jame", "Aeronautic"),
    new Person("Miss", "Jane", "Designer"),
    new Person("Mrs", "Elizabeth", "Writer"),
    new Person("Arch", "David", "Architect"),
    new Person("Cpt", "Mike", "Soldier"),
    new Person("Pst", "John", "Overseer"),
    new Person("Mr", "Solomon", "Developer"),
];

for(let j = People.length - 2; j < People.length; j++){
    console.log(`${People[j].designation} ${People[j].name}, is a/an ${People[j].specialization}.`);
}













