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

const avangersData = [ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];

const sumOfData = avangersData.reduce((acc, elem) => acc + elem.budget, 0);
console.log(sumOfData);

const maxBudget = avangersData.reduce((accumulator, element) => accumulator.budget > element.budget ? accumulator : element);
console.log(maxBudget);

const minBudget = avangersData.reduce((accum, elemen) => elemen.budget < accum.budget ? elemen : accum);
console.log(minBudget);


// easy task 4

const directions = ['left', 'right', 'forward'];
const editedDirections = directions.map((direction) => "Move " + direction);
console.log(editedDirections);

// normal task 1 (5)

const jediNames = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];
const res = jediNames.includes('Yoda') ? "master found" : "Yoda isn't here";
console.log(res);

// normal task 2 (6)

let inventory = []

inventory.push("Lembas Bread", "Ring");
inventory.pop();

console.log(inventory);

//normal task 3(7)

const locations = ['Times Square', 'Central Park', 'Brooklyn'];
const sortedLocations = locations.sort();

console.log(sortedLocations);

// normal task 4(8)

const events = [ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ];
const slicedEvents = events.slice(2, 5);
console.log(slicedEvents);

// hard tasks 1 (9)

const array = [3, 7, 15, 22];
const newArray = array.map((num) => num.toString(2));
console.log(newArray);

const maxNum = array.reduce((accumul, number) => accumul > number ? accumul : number);
console.log(maxNum);

const minNum = array.reduce((accum, numb) => numb < accum ? numb : accum);
console.log(minNum);

// hard tasks 2 (10)

const numsToAnalyze = [99, 135, 76, 200, 150, 89];
const numsToHex = numsToAnalyze.map((num) => num.toString(16));
const aboveHundreed = numsToAnalyze.filter((element) => element > 100);
const totalRiskLevel = numsToAnalyze.reduce((accumul, nums) => accumul + nums, 0);
const fisrtRisk = numsToAnalyze.find((element) => element > 150);

for(let i = 0; i < numsToAnalyze.length; i++){
    if(numsToAnalyze[i] < 80){
        numsToAnalyze.splice(i, 1);
    }
}


console.log(numsToHex);
console.log(aboveHundreed);
console.log(totalRiskLevel);
console.log(fisrtRisk);
console.log(numsToAnalyze);