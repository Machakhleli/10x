//    task 1
function countDownFrom(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
countDownFrom(5);

// task 2

function printArrayElements(arr) {
    for (let fruit of arr) {
        console.log(fruit);
    }
}
printArrayElements(["Apple", "Banana", "Cherry"]);
printArrayElements([1, 5, 6, 98]);

// task 3

function sumNumbersUpTo(n) {
    let sum = 0;
    while (n > 0) {
        sum += n;
        n--;
    }
    console.log(sum);
}
sumNumbersUpTo(5);
sumNumbersUpTo(5 + 5);
sumNumbersUpTo("usho".length + "kakhidze".length);
sumNumbersUpTo('usho'.length) + sumNumbersUpTo('kakhidze'.length);


// task 4

function repeatString(str, n) {
    let text = "";
    do {
        text += str;
        n--;
    }
    while (n > 0);
    console.log(text);

}
repeatString("hello", 3);
repeatString("expecto patronum ", 3);

// task 5

function printObjectKeys(obj) {
    for (let keys in obj) {
        // console.log(keys);
        console.log(`${keys} : ${obj[keys]}`)
    }
}
printObjectKeys({ name: "Alice", age: 25 });

const person = {
    name: "Usho",
    age: 35,
    family: "yes",
    children: ["Marta", "Taia"],
    car: "Honda Civic"
}
for (let properties in person) {
    console.log(`${properties}: ${person[properties]}`);

}
// medium task 1

//აქაც მუშაობს უბრალოდ არ გამოაქვს 1-იანი, სავარაუდოდ იმიტომ, რომ 0-ს ვერ აღიქვამს ლუწ რიცხვად
// function filterOdds(numbers) { 
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             console.log(numbers[i] + 1);
//         }
//     }
// }
// filterOdds([1, 2, 3, 4, 5, 6, 7]);

function filterOdds(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
}
filterOdds([1, 2, 3, 4, 5, 6, 7]);

// middke task 2

function findMaxValue(numbers) {
    let maxValue = numbers[0]
    for (let num of numbers) {
        if (num > maxValue) {
            maxValue = num
        }
    }
    console.log(maxValue)
}
findMaxValue([10, 20, 5, 30]);
findMaxValue([1, 5, 3, 9, 7]);

//middle task 3

function reverseString(str) {
    let reverse = ""; //აქ უნდა გამოვიდეს დარევერსებული მნიშვნელობა
    let item = str.length - 1; // ეს არი სტრინგის უკანასკნელი ასობგერის ინდექსი, hello-ს შემთხვევაში გამოდის 4
    while (item >= 0) {
        reverse += str[item];
        item--;
    }//აღნიშნული ლუპი გაეშვება სტრინგის სიგრძის ბოლოდან დასაწყისისკენ, რადგან ყოველი იტერაციის დროს ვთხოვთ შემცირებას (item --),
    //შესაბამისად პირველ იტერაციაზე str[item] დააბრუნებს "o"-ს, მომდევნო იტერაციაზე "h"-ს და ა.შ. სანამ არ შესრულდება პირობა,
    //აქედან გამომდინარე, საბოლოოდ დაკონსოლებული სტრინგის რევერსი გამოვა "ohsU"
    console.log(reverse);
}

reverseString("Usho");
reverseString("ჯავასკრიპტი ტვინის ბურღვაა");

// 