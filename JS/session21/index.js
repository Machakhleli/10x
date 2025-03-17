let powerOfGandalf = 0;
let powerOfDumbldor = 0;


function comparision(){
    console.log(`gandalf's power is: ${powerOfGandalf}, dumbldor's power is: ${powerOfDumbldor}`);

        if(powerOfGandalf > powerOfDumbldor){
            console.log("Gandalf is stronger than Dumbldor");
        }else if(powerOfGandalf < powerOfDumbldor){
            console.log("Dumbldor is stronger than Gandalf");
        }else{
            console.log("They are in same range of power");
        }
}

document.querySelector(".decrease-gandalfp").addEventListener("click", function(){
    powerOfGandalf -= 8;
    comparision();
})

document.querySelector(".increase-gandalfp").addEventListener("click", function(){
    powerOfGandalf += 10;
    comparision();
})
document.querySelector(".decrease-dumbldorep").addEventListener("click", function(){
    powerOfDumbldor -= 6;
    comparision();
})
document.querySelector(".increase-dumbldorep").addEventListener("click", function(){
    powerOfDumbldor += 8;
    comparision();
})
comparision();