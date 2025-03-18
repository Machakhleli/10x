let numHp = 0;
let numMp = 0;

let costHp = 10;
let costMp = 5;


function totalCost(numHp, numMp) {
    let sum = numHp * costHp + numMp * costMp;

    if (sum > 50) {
        return sum - (sum * 0.1);
    }

    return sum;
}

console.log(`total price of potions:  ${totalCost(3, 2)} Gel`);
console.log(`total price of potions above 50 Gel has 10 % discount, so final cost for you is:  ${totalCost(5, 4)} Gel`);