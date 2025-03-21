            
            // Task -1 - Pokémon Battle – Function Basics

function compareAttack(pokemon1, attack1, pokemon2, attack2){
let resultForPokemon1 = document.querySelector(".pikachus-power");
let resultForPokemon2 = document.querySelector(".charizards-power"); 

let message = `${pokemon1}'s power: ${attack1},  ${pokemon2}'s power: ${attack2} `;

    if(attack1 > attack2){
        message += `${pokemon1} is stronger!` 
    }else{
       message += `${pokemon2} is stronger!`
    }

    resultForPokemon1.innerHTML += `<span>${message}</span>`;
    // resultForPokemon2.innerHTML += `<span>${message}</span>`;
}            

compareAttack("Pikachu", 55, "Charizard", 84);

compareAttack("Pikachu", 10, "Charizard", 70);




        // Task-2 - Hogwarts Spell Casting – Function Parameters



