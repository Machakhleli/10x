let ticketPrice = 20;
let ticketsSold = 500;
let concertCosts = 8000;

let totalEarnings = ticketPrice * ticketsSold;

// console.log(totalEarnings);

let leftMoney = totalEarnings - concertCosts ;

if(leftMoney > 0){
    console.log(`Concert Profit: ${leftMoney}. Great success!`);
}else{
   console.log(`Concert did not cover costs. Earnings: ${leftMoney}, Costs: ${concertCosts}`);
}