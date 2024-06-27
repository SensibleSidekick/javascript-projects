function makeLine(width, character = '#'){
    let line = ''
    for (let i= 0; i < width; i++) {
        line += character;
    }
    return line;
}

//console.log(makeLine(10));

function makeSquare(size, character = '#') {
    let square = ``
    for (let i = 0; i < size; i++){
        for (let j = 0; j <= size; j++){
            square += character;
        }
        square += `\n`;
    }
    square = square.trimEnd();
    return square;
}

//console.log(makeSquare(6));

function makeRectangle(width, height, character = '#'){
    let rectangle = ''
    for(let h = 0; h < height; h++){
       for(let i = 0; i < width; i++) {
            rectangle += makeLine(width);
            rectangle += `\n`;
    }
}
rectangle = rectangle.trimEnd();
return rectangle;

}

//console.log(makeRectangle(5,3));

function makeDownwardStairs(height, character = '#'){
    let stairs = '';
    for (let i=0; i <= height; i++) {
        stairs += makeLine(i) + `\n`;
    }
    stairs = stairs.trimEnd();
    return stairs;
}

//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, character = '#') {
let spaces = ''
let characters = ''
for (let i = 0; i < numSpaces; i++) {
    spaces += ' ';
}
for (let j = 0; j < numChars; j++) {
    characters += character;
}

let spaceLine = spaces + characters + spaces;
return spaceLine;
}

//console.log(makeSpaceLine(5,3, '!'));

function makeIsosceleseTriangle (height, character = '#') {
    let isosceleseTriangle = ''

    for (let i = 0; i < height; i++) {
        isosceleseTriangle += makeSpaceLine ((height-i-1), (2*i+1), character) + `\n`;
    }
    isosceleseTriangle = isosceleseTriangle.trimEnd();
    return isosceleseTriangle
}

//console.log(makeIsosceleseTriangle(5));
function reverse(str) {
    let reversedLettersArray =  str.split('').reverse().join('');
    return reversedLettersArray;
}

function makeDiamond(height, character = '#') {
    let diamond = makeIsosceleseTriangle(height, character) + `\n` + reverse(makeIsosceleseTriangle(height, character));
    return diamond;
}

console.log(makeDiamond(5));