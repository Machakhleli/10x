let hasTreasureMap = true;
let foundAncientKey = false;
let solvedRiddleScroll = true;
let hasCompass = true;
let isFullMoon = false;

let canFindTreasure = hasTreasureMap && foundAncientKey || solvedRiddleScroll && hasCompass

if (canFindTreasure) {
    console.log("Success! Alex can find the legendary treasure!");
} else {
    console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
}
