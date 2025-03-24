
// Task -1 - Pokémon Battle – Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
    let resultForPokemon1 = document.querySelector(".result");

    let message = `${pokemon1}'s power: ${attack1}, ${pokemon2}'s power: ${attack2} `;

    if (attack1 > attack2) {
        message += `${pokemon1} is stronger!`;
        console.log(message += `${pokemon1} is stronger!`)
    } else {
        message += `${pokemon2} is stronger!`;
        console.log(message += `${pokemon2} is stronger!`)
    }


    resultForPokemon1.innerHTML += `<p>${message}</p>`;

}

compareAttack("Pikachu", 55, "Charizard", 84);

compareAttack("Pikachu", 100, "Charizard", 70);

compareAttack("pikachu", 100, "charizard", 500);






// Task-2 - Hogwarts Spell Casting – Function Parameters
function castSpell(spell, wizard) {
    let rslt = document.querySelector(".result2")
    let msg = `${wizard} casts ${spell}!`
    rslt.innerHTML += `<p>${msg}</p>`

}

castSpell("Expelliarmus", "Hermione");

//task 3 One Piece Bounty Calculator – Return Values

function calculateBounty(currentBounty, increase) {
    let increasedBounty = currentBounty + increase;
    console.log(increasedBounty);

}

calculateBounty(1500000000, 500000000);

//task 4 Jedi Training – Default Parameters

function trainJedi(name, strength = 50) {
    console.log(`Jedi ${name} has ${strength} power`);
}
trainJedi("Luke", 100);
trainJedi("Ray");

//task-5 Gollum’s Precious – String Manipulation

function gollumSays(phrase) {
    console.log(`${phrase}  ${phrase} ${phrase} `);
}
gollumSays("My precious...");

// task-6 Super Mario Power-Up – Function Expressions

let powerUp = function (jumpHeight) {
    return jumpHeight * 2;
}

console.log(powerUp(5));

// task 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

let shadowClone = count => {
    return count * 5;
}
console.log(shadowClone(10));

//task 8. Sorting the Sorting Hat – Callback Functions

function sortHouses() {
    let rendomizer = Math.floor(Math.random() * 4);

    if (rendomizer == 0) {
        return "Gryffindor";
    } else if (rendomizer == 1) {
        return "Slytherin";
    } else if (rendomizer == 2) {
        return "Ravenclaw";
    } else {
        return "Hufflepuff";
    }

}
function sortStudents(name, usho) {
    return `${name} sorted in ${usho}`;

}
console.log(sortStudents("Harry", sortHouses()));

//9. Infinity Gauntlet – Function Scope

function snapFingers() {
    let stones = 6;
    function checkStones() {
        if (stones == 6) {
            console.log("Thanos has 6 stones. The universe trembles!");
        } else {
            console.log("Fuck you Thanos!:D");
        }
    }
    checkStones();
}
console.log(snapFingers());

// 10. Time-Turner – Function Hoisting

turnBackTime();

function turnBackTime() {
    console.log("Going back in time");
}

// 11. Batman’s Secret Identity – Function Closures

function batman() {

    function hiddenBatman() {
        console.log("I am Batman");
    }
    return hiddenBatman;

}
let bruceWayne = batman();
bruceWayne();

// 12. The Enchanted Mirror – Higher-Order Functions

function magicMirror(message, transformFunction) {
    function transformFunction() {
        let transformedMessage = message.toUpperCase();
        return `The mirror says: ${transformedMessage}`;
    }
    console.log(transformFunction(message));

}

magicMirror("will I be rich?");
magicMirror("am I cool?");
magicMirror("of couerse you are cool )))")