let attackPower = 0;
let armorName = "Steel Armor";


function knight(attackPower) {
    let sheild = true;
    if (attackPower >= 100 && armorName === "Steel Armor" && sheild === true) {
        console.log(`Knight has ${attackPower} attacking power and ready to start quest`);
    } else {
        console.log("Knight is not ready to start quest");
    }

}

knight(50);
knight(160);