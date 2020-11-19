function processData(input) {
    input = input.split('\n');
    
    let phoneBook = new Map();
    let entries = parseInt(input[0]);
    
    for ( let i = 1; i <= entries; i++ ) {        
        input[i] = input[i].split(' '); 
        phoneBook.set(input[i][0], input[i][1]);
    }
    
    for ( let i = entries+1; i < input.length; i++ ) {
        phoneBook.get(input[i]) ? console.log(`${input[i]}=${phoneBook.get(input[i])}`) : console.log('Not found');
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
