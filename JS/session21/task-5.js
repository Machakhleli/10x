let bread = 0;
let cake = 0;

let priceOfBread = 2;
let priceOfCake = 4;



function calculateDailyIncome(bread, cake) {
    let dailyIncome = bread * priceOfBread + cake * priceOfCake;
    return dailyIncome;
}
console.log(calculateDailyIncome(10, 5)); 
console.log(calculateDailyIncome(5, 10));
console.log(calculateDailyIncome(3, 3));