const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabinet= food.split(',');
equipmentCabinet = equipment.split(',');
petsCabinet = pets.split(',');
sleepAidsCabinet = sleepAids.split(',');


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet]
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCabinet = Number(input.question("Select a cabinet:"));
console.log(userCabinet)
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userCabinet > cargoHold.length){
    console.log("Invalid number.")
} else{
    console.log(`${cargoHold[userCabinet]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if ( userCabinet <= cargoHold.length){
    let = userItem = input.question("What are you looking for?");
    if (cargoHold[userCabinet].includes(userItem) === true){
        console.log(`Cabinet ${userCabinet} DOES contain ${userItem}.`);
    } else {
        console.log(`Cabinet ${userCabinet} DOES NOT contain ${userItem}`);
    }
} 

