'use strict';

function compareTriplets(a, b) {
    let compareValues = [0, 0];
    
    for (let i = 0; i < 3; i++) {
        if ( a[i] > b[i] ) {
            compareValues[0]++;
        } else if ( a[i] < b[i] ) {
            compareValues[1]++;
        }
    }
    
    return compareValues;
}