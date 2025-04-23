//easy task 1

const students = ["Harry", "Hermione", "Ron", "Draco"];
const houses = ["gryffindor", "Ravenclaw", "gryffindor", "Slytherin"];


const sortedStudents = students.map(student => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    console.log( `${student} - ${randomHouse}`);
})


//easy task 2

const pokemons = [{name: "Pikachu", CP: 320}, {name: "Charizard", CP: 900}];

const result = pokemons.filter((combPower) => combPower.CP > 500);
console.log(result);


const myArr = [1, 2 , 10, 20, 15, 17, 40, 58];
const newArr = myArr.filter((num) => num >= 19);
console.log(newArr);

const neighbours = [
    {name: "lia", age: 35, haveChildren: true},
    {name: "guja", age: 28, haveChildren: false},
    {name: "gogi", age: 42, haveChildren: true},
    {name: "nana", age: 22, haveChildren: false},
    {name: "levan", age: 62, haveChildren: true}
];    
const filtredNeighbours = neighbours.filter((guys) => (guys.age <= 50 && guys.age >= 30));
console.log(filtredNeighbours);

// easy task 3

