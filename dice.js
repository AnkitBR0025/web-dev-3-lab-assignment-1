const crypto = require("crypto");
const fs = require("fs");

const randomNumber = crypto.randomInt(1, 7);

console.log("Dice Rolled:", randomNumber);


// Save dice history
fs.appendFile("diceHistory.txt",`Dice Rolled: ${randomNumber}\n`,(err) => {
        
        if (err) {
            console.log("Error saving dice history");
            return;
        }

        console.log("Dice roll history saved.");
    }
);


// run: node dice.js