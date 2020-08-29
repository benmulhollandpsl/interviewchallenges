// hackerrank backend test


ws.write(result.join('\n')+ '\n');



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'closest' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function closest(s, queries) {
    // Write your code here
    // console.log(s);
    var i;
    var n;
    var letters = /^[A-Za-z]+$/;
    for (i = 0; i <= s.length; i++){
    if (n = letters){
        return -1;
    // if (s<0 || s === '') {
        
    }else{
        // console.log('no good')
        return n;
        console.log(n);
    } 
    let i = n++;
    } 
}


function main() {




'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'closest' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function closest(s, queries) {
    // Write your code here
    // console.log(s);
    var i;
    var n;
    var letters = /^[A-Za-z]+$/;
    for (i = 0; i <= s.length; i++){
    if (n = letters){
        return -1;
    // if (s<0 || s === '') {
        
    }else{
        // console.log('no good')
        return n;
        console.log(n);
    } 
    let i = n++;
    } 
}















function main() {









    process.stdin.resume();
process.stdin.setEncoding('ascii');

let consoleInput = '';
process.stdin.on('data', (data) => {
    consoleInput += data;
});

process.stdin.on('end', () => {
    consoleInput = consoleInput.split('\n');
    main();    
});

let currentLine = 0;
function readLine() {
    if (currentLine >= consoleInput.length) {
        return null;
    }
    
    return consoleInput[currentLine++];
}


function main() {
    // read the string filename
    const filename = readLine();
    
    readLine = () => `bytes_`+filename;
  
//   readLine = fileNew;
    var fs = require("fs");


     fs.readFile(readLine(), "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);


    fs.writeFile(readLine(), dataArr, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
});
   
    } 
    
    
    );
}















