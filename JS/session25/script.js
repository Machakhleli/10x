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