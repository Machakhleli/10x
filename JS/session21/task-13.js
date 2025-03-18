let heroStrength = 0;
let villainStrength = 0;

function comparision(heroStrength, villainStrength) {
    if (heroStrength - villainStrength > 10) {
        console.log("Decisive Hero Victory");
    } else if (villainStrength - heroStrength > 10) {
        console.log("Decisive Villain Victory");
    } else if (villainStrength === heroStrength) {
        console.log("Stalemate");
    } else {
        console.log("Close Call");
    }
}

comparision(150, 100);
comparision(50, 130);
comparision(100, 100);