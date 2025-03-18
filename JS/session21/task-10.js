let batteryLvl = 0;

function checkBattery(batteryLvl) {
    if (batteryLvl < 30) {
        console.log("Low battery");
    } else {
        console.log("Battery sufficient")
    }
}
checkBattery(100);
checkBattery(20);
