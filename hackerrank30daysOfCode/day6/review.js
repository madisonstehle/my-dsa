function processData(input) {
    input = input.split('\n').slice(1);
    
    for ( let i = 0; i < input.length; i++ ) {
        let fullS = '';
        let evenS = '';
        let oddS = '';
                
        for ( let j = 0; j < input[i].length; j++ ) {
            if ( j % 2 === 0 ) {
                evenS += input[i][j];
            } else {
                oddS += input[i][j];
            }
        }
        
        fullS = evenS + ' ' + oddS;
        console.log(fullS)
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
