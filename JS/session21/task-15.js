let coneIceCreamPrice = 4;
let sundaeIceCreamPrice = 8;

let conesSoldToday = 250;
let sundaesSoldToday = 120;

let totalCone = coneIceCreamPrice * conesSoldToday;
let totalSundae = sundaeIceCreamPrice * sundaesSoldToday;

let dailySum = totalCone + totalSundae;
let discount = dailySum * 0.95;
// console.log(dailySum);

if(dailySum >= 1000){
let dailySum = totalCone + totalSundae;
    console.log(`current price is ${dailySum}, but You have  5% discount, and your final price is ${discount}`);
}