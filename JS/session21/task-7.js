let currentDate = new Date().getFullYear();
// console.log(currentDate);
let jumpedYear = 0;

function newYear(jumpedYear){
let newYear = currentDate + jumpedYear;
return newYear;
}

console.log(newYear(10));
console.log(newYear(-5));