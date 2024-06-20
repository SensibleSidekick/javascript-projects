let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 123.45
console.log(String(decimal).length - 1);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let number1 = 80346789;
let checkFor = '.'
let numberConvert = String(number1);

if (numberConvert.includes(checkFor)){
    numberConvert = numberConvert.replace('.','');
    console.log(numberConvert);
    console.log(numberConvert.length);
} else {
    console.log(numberConvert);
}