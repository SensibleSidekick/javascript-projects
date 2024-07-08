let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function move() {
      let steps = Math.floor(Math.random()*11);
      return steps;
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function move() {
      let steps = Math.floor(Math.random()*11);
      return steps;
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function move() {
      let steps = Math.floor(Math.random()*11);
      return steps;
   }
};

let doggoOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function move() {
      let steps = Math.floor(Math.random()*11);
      return steps;
   }
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function move() {
      let steps = Math.floor(Math.random()*11);
      return steps;
   }
};


function selectID (arr2, j){
   let id = Math.floor((Math.random() * 10)-j);
   id = arr2.splice(id,1)
   return id;
}


function assignID (arr1, arr2){
   let j
   for (i = 0; i < arr1.length; i++){
      j = i
      arr1[i]["astronautID"] = selectID(arr2, j)
   }
   return arr1
}
/*
function move() {
   let steps = Math.floor(Math.random()*11);
   return steps;
}
*/
let astronautID = [1,2,3,4,5,6,7,8,9,10];
let animalCrew = [superChimpOne, superChimpTwo, salamander, doggoOne, tardigrade]


// After you have created the other object literals, add the astronautID property to each one.

console.log(assignID(animalCrew, astronautID));

// Add a move method to each animal object


// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

let a = 0
for (item in animalCrew[a]) {
      if (a < animalCrew.length){
      console.log(`${animalCrew[a]["name"]} is a ${animalCrew[a]["species"]}. They are ${animalCrew[a]["age"]} years old and ${animalCrew[a]["mass"]} kilograms. Their ID is ${animalCrew[a]["astronautID"]}`);
      a++
   }
}


// Start an animal race!

function fitnessTest(arr){
 let raceResults = [];
   for (let i = 0; i < arr.length; i++){
      let distance = 0;
      let turns = 0; 
          while(distance < 21) {
            distance += arr[i].move();
            turns++;
          }
      raceResults.push(`${arr[i]["name"]} took ${turns} turns to take 20 steps.`);
   }
   return raceResults;
}

console.log(fitnessTest(animalCrew));