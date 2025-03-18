let speedLimit = 100;
let carSpeed = 30;

carSpeed += 25;
console.log(carSpeed);

if(carSpeed > speedLimit){
    console.log(` Your current speed is: ${carSpeed}. Speed Warning: You are going too fast!`);
}else{
    console.log(`Your current speed is ${carSpeed}, Speed is okay.`);
}