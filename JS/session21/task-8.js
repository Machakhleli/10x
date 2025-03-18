let spellOne = 0;
let spellTwo = 0;
let spellThree = 0;

function comparision(spellOne, spellTwo, spellThree){
    if(spellOne > spellTwo && spellOne > spellThree){
        console.log("spellOne is the strongest");
    }else if(spellTwo > spellOne && spellTwo > spellThree){
        console.log("spellTwo is the strongest");
    }else{
        console.log("spellThree is the strongest");
    }
}
comparision(50, 40, 80);
comparision(20, 100, 50);
comparision(70, 60, 30);