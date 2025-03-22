
// Task -1 - Pokémon Battle – Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
    let resultForPokemon1 = document.querySelector(".result");

    let message = `${pokemon1}'s power: ${attack1}, ${pokemon2}'s power: ${attack2} `;

    if (attack1 > attack2) {
        message += `${pokemon1} is stronger!`
    } else {
        message += `${pokemon2} is stronger!`
    }

    resultForPokemon1.innerHTML += `<p>${message}</p>`;

}

compareAttack("Pikachu", 55, "Charizard", 84);

compareAttack("Pikachu", 100, "Charizard", 70);




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