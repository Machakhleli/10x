// easy task 1

const car = {
    brand: "Toyota",
    model: "Supra",
    year: 2006,
    getInfo: function () {
        return this.brand + " " + this.model + "," + this.year
        // return car.brand + " " + car.model + "," + car.year
    }
}
console.log(car.getInfo());
console.log("Car brand: ", car.brand);

car.color = "white";
console.log(car);

delete car.getInfo;
console.log(car);

// easy task 2

const person = {
    name: "Usho",
    age: 35,
    // greet: function(){ console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.")}
    greet: function () { return "Hello, my name is " + this.name + " and I am " + this.age + " years old." }
}
// person.greet();
console.log(person.greet());

// easy task 3 

const student = {
    name: "Usho",
    age: 35,
    grade: [75, 87, 95, 100]
}
let log = console.log;
const studentsKeys = Object.keys(student);
const studentValues = Object.values(student);
const studentEntries = Object.entries(student);

log(studentsKeys);
log(studentValues);
log(studentEntries);

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


// easy task 4

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year
}
const doubledBook = new Book("Maugli", "Kipling", 1652);
const doubledBook2 = new Book("Tsikara", "Khalkhuri", "unknown");

console.log(doubledBook.title);
console.log(doubledBook2.author, doubledBook2.title, doubledBook2.year);

// medium task 1 (5)

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("Animal sound");
    }
}
const dog = new Animal("Tsuga", "dog");
dog.makeSound();