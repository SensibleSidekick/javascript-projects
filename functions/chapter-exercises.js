function makeLine(width){
    let line = ''
    for (let i= 0; i < width; i++) {
        line += '#';
    }
    return line;
}

//console.log(makeLine(10));

function makeSquare(size) {
    let square = ``
    for (let i = 0; i < size; i++){
        for (let j = 0; j <= size; j++){
            square += `#`;
        }
        square += `\n` 
    }
    square = square.trimEnd();
    return square;
}

//console.log(makeSquare(6));

function makeRectangle(width, height){
    let rectangle = ''
    for(let h = 0; h < height; h++){
       for(let i = 0; i < width; i++) {
            rectangle += makeLine(width);
            rectangle += `\n`;
    }
}
rectangle = rectangle.trimEnd();
return rectangle

}

//console.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    let stairs = ''
    for (let i=0; i <= height; i++) {
        stairs += makeLine(i) + `\n`
    }
    stairs = stairs.trimEnd();
    return stairs
}

//console.log(makeDownwardStairs(5));

