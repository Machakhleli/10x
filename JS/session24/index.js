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



