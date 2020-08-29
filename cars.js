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
 * Complete the 'carParkingRoof' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY cars
 *  2. INTEGER k
 */

function carParkingRoof(cars, k) {
    // Write your code here
var i;
for(i = 0; i <cars.length; i++) {
    k = i;
    console.log(k);
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const carsCount = parseInt(readLine().trim(), 10);

    let cars = [];

    for (let i = 0; i < carsCount; i++) {
        const carsItem = parseInt(readLine().trim(), 10);
        cars.push(carsItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = carParkingRoof(cars, k);

    ws.write(result + '\n');

    ws.end();
}