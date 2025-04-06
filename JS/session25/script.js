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
// task 6

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