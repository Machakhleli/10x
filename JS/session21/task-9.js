let kitchenHasGhost = true;
let livingRoomHasGhost = false;

function isHouseSafe(){
if(kitchenHasGhost === false && livingRoomHasGhost === false){
    console.log("The house is safe! No ghosts in the Kitchen or Living Room");
}else{
    console.log("Danger! The house is NOT safe. Ghosts detected!");
}
}

isHouseSafe();