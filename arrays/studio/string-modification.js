const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstThree = str.slice(0,3);
newStr = str.slice(3);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr}${firstThree}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userData = Number(input.question("How many characters should we move?"));
let userSlice = str.slice(0,userData);
let userSlice2 = str.slice(userData);
console.log(`${userSlice2}${userSlice}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userData > str.length){
    userData = 3
} 

userSlice = str.slice(0,userData);
userSlice2 = str.slice(userData);
console.log(`${userSlice2}${userSlice}`);