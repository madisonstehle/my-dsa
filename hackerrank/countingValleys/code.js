/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // if altitude goes from 0 to -1, then we've entered a valley. If altitude goes from -1 to 0, we've exited a valley
    let valleyCount = 0;
    let altitude = 0;

    // as long as steps is greater than 0,
    for ( let i = 0; i < steps; i++ ){
        // Check letter

        // If U
        if (path[i] === 'U') {
            // if altitude === -1
            if (altitude === -1) {
                // increment valleyCount
                valleyCount++;
            }
            // increment altitude
            altitude++;

        // If D
        } else if (path[i] === 'D') {
            // decrement altitude
            altitude--;
        }

    }

    return valleyCount;
}