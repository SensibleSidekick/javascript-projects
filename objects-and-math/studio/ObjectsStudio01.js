
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

let selectRandomEntry = function (arr) {
   let id = arr[Math.floor(Math.random()*arr.length)];
   return id;
};

const selectID = function (idNumbers) {
  let selectedID = [];
  while (selectedID.length < 3) {
    let luckyPick = selectRandomEntry(idNumbers);
    if (!selectedID.includes(luckyPick)) {
      selectedID.push(luckyPick);
    }
  };
  return selectedID;
};
const crew = [];
// Code your buildCrewArray function here:

let buildCrewArray = function(candidates, selectedIDs) {
let candidateTest;
let selectedID = selectID(idNumbers);
 for ( i = 0; i < candidates.length; i++){
  candidateTest = candidates[i]["astronautID"];
    for (j = 0; j < selectedID.length; j++){
      if (candidateTest === selectedID[j]){
        crew.push(candidates[i]);
      }
    }
}

return crew;
};

buildCrewArray(animals, selectID);
console.log(`${crew[0]["name"]}, ${crew[1]["name"]}, and ${crew[2]["name"]} are going to space!`);

// Here are the candidates and the 'animals' array:


// Code your template literal and console.log statements:
