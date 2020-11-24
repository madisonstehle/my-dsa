'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    
    let currentCount = 0;
    let maxCount = 0;
    let binary = n.toString(2);
    
    for(let i = 0; i < binary.length; i++){
        if (binary[i] === '0') {
            currentCount = 0;
        } else {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        }
    }
    
    console.log(maxCount);
}
