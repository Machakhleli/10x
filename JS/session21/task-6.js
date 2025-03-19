const shipsFuelCapacity = 500;
let currentFuelCapacity = 0;

function launchStatus(currentFuelCapacity) {
    if (currentFuelCapacity >= shipsFuelCapacity * 0.8) {
        console.log("The space ship has enoug fuel, so it can to fly")
    } else {
        console.log("There is not enough fuel in the space ship, so it can not fly yet")
    }
}

launchStatus(450);
launchStatus(300);