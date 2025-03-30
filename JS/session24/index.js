// task 1, //task 2
let marksMass = 0;
let marksHeight = 0;
let johnsMass = 0;
let johnsHeight = 0;

function compareBmi(marksMass, marksHeight, johnsMass, johnsHeight) {
    let marksBmi = marksMass / marksHeight ** 2;
    let johnsBmi = johnsMass / johnsHeight ** 2;

    // markHigherBMI = true;
    let markHigherBMI = marksBmi > johnsBmi;

    if (markHigherBMI) {
        console.log(`Mark has ${marksBmi} and John has ${johnsBmi}. So Mark has Higher BMI then John`);
    } else {
        console.log(`Mark has ${marksBmi} and John has ${johnsBmi}. So Mark has lower BMI then John`);
    }
}
compareBmi(78, 1.69, 92, 1.95);
compareBmi(95, 1.88, 85, 1.76);


// task 3 


function compareAvarageScores(dolphinsScore1, dolphinsScore2, dolphinsScore3, koalasScore1, koalasScore2, koalasScore3) {

    let dolphinsAvarageScore = Math.floor((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);

    let koalasAvarageScore = Math.floor((koalasScore1 + koalasScore2 + koalasScore3) / 3);

    if (dolphinsAvarageScore > koalasAvarageScore) {
        console.log(`Dolphins avarage score is ${dolphinsAvarageScore}, Koalas avarage score is ${koalasAvarageScore}. So winner is: Dolphins team`);
    } else if (dolphinsAvarageScore < koalasAvarageScore) {
        console.log(`Dolphins avarage score is ${dolphinsAvarageScore}, Koalas avarage score is ${koalasAvarageScore}. So winner is: Koala's team`);
    } else {
        console.log(`Dolphins avarage score is ${dolphinsAvarageScore}, Koalas avarage score is ${koalasAvarageScore}. Both team has same score, so there's no winner`);
    }
}
compareAvarageScores(96, 108, 89, 88, 91, 110);
compareAvarageScores(97, 112, 101, 109, 95, 123);
compareAvarageScores(97, 112, 101, 109, 96, 106);

//task 4

function tipCalculator(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    let totalValue = tip + bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, total value was ${totalValue}`);
}

tipCalculator(275);
tipCalculator(40);
tipCalculator(430);

//task 5

function calculate(a, b, operator) {
    switch (a, b, operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "can not devide by zero";
        case "%":
            return b !== 0 ? a % b : "can not devide by zero";
        case "**":
            return a ** b;
        default:
            return "invalid operator";
    }
}
console.log(calculate(5, 3, '+'));
console.log(calculate(10, 2, '/'));
console.log(calculate(4, 0, '/'));
console.log(calculate(2, 3, '^'));
console.log(calculate(5, 3, '**'));
console.log(calculate(25, 3, '%'));

//task 6
function playGame(player1, player2) {
    switch (true) {
        case (player1 === "rock" && player2 === "scissors"):
        case (player1 === "scissors" && player2 === "paper"):
        case (player1 === "paper" && player2 === "rock"):
            return "player1 wins!";

        case (player1 === player2):
            return "It's a tie";

        case player1 !== "rock" && player1 !== "scissors" && player1 !== "paper":
        case player2 !== "rock" && player2 !== "scissors" && player2 !== "paper":
            return "invalid movie";

        default:
            return "player2 wns";

    }

}
console.log(playGame("rock", "scissors"));
console.log(playGame("paper", "scissors"));
console.log(playGame("paper", "paper"));
console.log(playGame("fire", "paper"));

// task 7
function trinagleType(a, b, c) {

    switch (true) {
        case a === b && b === c:
            return "Equilateral";
        case a === b || a === c || b === c:
            return "Isosceles";
        case a + b <= c || b + c <= a || a + c <= b:
            return "Not a trinagle";

        default:
            return "Scalene";
    }

}
console.log(trinagleType(3, 3, 3));
console.log(trinagleType(3, 3, 5));
console.log(trinagleType(3, 4, 5));
console.log(trinagleType(1, 2, 3));

//task 8

function processTransaction(balance, amount, transactionType) {
    switch (true) {
        case transactionType === "withdraw" && amount > balance:
            return "Insufficient funds";
        case transactionType === "withdraw" && amount <= balance:
            return `Here is your ${amount} $, left balance is ${balance - amount} $`;
        case transactionType === "deposit":
            return `your new balance is ${balance + amount} $.`;
        default:
            return "Invalid transaction type"
    }
}

console.log(processTransaction(500, 200, "withdraw"));
console.log(processTransaction(500, 600, "withdraw"));
console.log(processTransaction(500, 100, "deposit"));
console.log(processTransaction(500, 50, "transfer"));

//task 9 

function getRoomPrice(type, isWeekend, hasDiscount) {
    let price;

    switch (type) {
        case "Standard":
            price = isWeekend ? 120 : 100;
            break;

        // if (isWeekend) {
        //     return price = "$120";
        // } else {
        //     return price = "$100";
        // }


        case "Deluxe":
            price = isWeekend ? 180 : 150;
            break;

        // if (isWeekend) {
        //     return price = "$180";
        // } else {
        //     return price = "$150";
        // }


        case "Suite":
            price = isWeekend ? 250 : 200;
            break;

        // if (isWeekend) {
        //     return price = "$250";
        // } else {
        //     return price = "$200";
        // }

    }
    if (hasDiscount) {
        return price *= 0.9;
    }

    return price;

}
console.log(getRoomPrice("Standard", false, false));
console.log(getRoomPrice("Deluxe", true, false));
console.log(getRoomPrice("Suite", false, true));
console.log(getRoomPrice("Suite", true, true));


