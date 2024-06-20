//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let first = language.slice(0, 1);
let second = language.slice(4,5);
console.log(first + second);
//2. Without using slice(), use method chaining to accomplish the same thing.
first = language.indexOf('J');
second = language.indexOf('S');
console.log(`${language.charAt(first)}${language.charAt(second)}`);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
first = language[0];
second = language[4];
console.log(`The abbreviation for 'Javascript' is ${first}${second}.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.substring(0, 3).toUpperCase().at(2));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = notTitleCase.replace("t", "T").replace("c","C");

console.log(titleCase);