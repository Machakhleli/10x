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
    greet: function(){  return "Hello, my name is " + this.name + " and I am " + this.age + " years old."}
}
// person.greet();
console.log(person.greet());