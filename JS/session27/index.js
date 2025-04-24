// easy task 1

const car = {
    brand: "Toyota",
    model: "Supra",
    year: 2006,
    getInfo: function () {
        return this.brand + " " + this.model + "," + this.year
    }
};
console.log(car.getInfo());
console.log("Car brand: ", car.brand);

car.color = "white";
console.log(car);

delete car.getInfo;
console.log(car);