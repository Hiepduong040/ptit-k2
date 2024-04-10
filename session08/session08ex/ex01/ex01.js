"use strict";
function parseInput(iteam) {
    if (iteam === null) {
        return null;
    }
    console.log(typeof (iteam));
}
parseInput(1);
parseInput("1");
parseInput(true);
console.log(parseInput(null));
parseInput(undefined);
