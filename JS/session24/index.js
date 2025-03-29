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
compareBmi(78, 1.69, 92, 1.95);ებ 
compareBmi(95, 1.88, 85, 1.76);


// task 3 


