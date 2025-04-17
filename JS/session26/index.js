//easy task 1

const students = ["Harry", "Hermione", "Ron", "Draco"];
const houses = ["gryffindor", "Ravenclaw", "gryffindor", "Slytherin"];


const sortedStudents = students.map(student => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    console.log( `${student} - ${randomHouse}`);
})


