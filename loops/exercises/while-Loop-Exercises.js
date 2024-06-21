//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startFuel = 0
let crewAboard = 0
let shuttleAltKm = 0




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  while((startFuel < 5000 || startFuel > 30000) || isNaN(startFuel)) {
    userFuel = input.question('How many units of fuel would you like to load?');
    startFuel = Number(userFuel);
    if (isNaN(startFuel)) {
       startFuel = input.question(`You can't use ${userFuel} as a fuel source silly! Please enter a number between 5000 and 30000:`);
    } else if (!isNaN(startFuel)) {
      if (startFuel < 5000 || startFuel > 30000) {
        startFuel = input.question('Please enter a number between 5000 and 30000:');
      }
      
    }
  
  }
  





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while ((crewAboard < 1 || crewAboard > 8) || isNaN(crewAboard)) {
  userCrew = input.question("How many astronauts for the flight?");
  crewAboard = Number(userCrew);
  if (isNaN(crewAboard)) {
    crewAboard = input.question('Please enter a number from 1 to 7:');
  } else if (!isNaN(crewAboard)) {
    if(crewAboard < 1 || crewAboard > 7) {
       crewAboard = input.question('Please enter a number from 1 to 7:');
    } 

  }
}
  
console.log(startFuel);
console.log(crewAboard);

  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
