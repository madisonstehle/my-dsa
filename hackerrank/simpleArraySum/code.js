'use strict';

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    let total = 0;
    
    ar.forEach( num => {
        total += num;
    });

    return total;
}
