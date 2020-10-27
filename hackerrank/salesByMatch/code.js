'use strict';


function sockMerchant(n, ar) {
    let pairCount = 0;
    let pairTracker = {};
    
    // loop over each sock, in the array. keep counter of each color, maybe in an object, really as a map tho
    ar.forEach( (sock) => {
        // for each sock. check if exists in the object
        if (pairTracker[sock]) {
            // if it does already exist, increment pair counter by 1, and
            pairTracker[sock]++
            // if count of key is === 2, then reset value to 0, and increment pairs counter by 1
            if (pairTracker[sock] === 2) {
                pairCount++;
                pairTracker[sock] = 0;
            }
        } else {
            // if it doesn't exist, create a spot for it and set count to 1
            pairTracker[sock] = 1;
        }
    });

    return pairCount;
}
