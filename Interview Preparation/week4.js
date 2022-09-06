{
    /* 
    Picking Numbers
    
    Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1. */
}

function pickingNumbers(a) {
    // Sort array to easily identify all differences greater than 1
    // Count all numbers in the subarray until the difference is greater than one
    // If the max count of the new subarray is greater than th previous count, set a new max
    // Restart count and continue the search for the greatest number of values in a subarray with a max difference between first and last value is one
    let sortArray = a.sort((a, b) => a - b);
    // console.log("SORTED ARRAY:", sortArray);
    let max = 0;

    for (let i = 0; i < sortArray.length; i++) {
        let count = 1;
        for (let j = i + 1; j < sortArray.length; j++) {
            if (sortArray[j] - sortArray[i] <= 1) {
                count++;
                // console.log("COUNT:", count);
            }
            if (count > max) {
                // console.log("MAX:", max, " COUNT:", count);
                max = count;
            }
        }
    }
    return max;
}

console.log("Picking Numbers");
a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a)); // expect 3
console.log();

{
    /*
    Left Rotation
    
    A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. 
    Given an integer, d, rotate the array that many steps left and return the result.

    */
}

function rotateLeft(d, arr) {
    // Rotate all values in array one position left by swapping pairs to the end of the array
    // Repeat the process d amount of times

    let temp;

    for (let i = 0; i < d; i++) {
        //console.log("d:", d);
        for (let j = 0; j < arr.length - 1; j++) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        //console.log("ARRAY:", arr);
    }

    return arr;
}

console.log("Left Rotation");
arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(4, arr)); // expect [5,1,2,3,4] to be returned
console.log();

{
    /* 
    Number Line Jumps
    
    You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
*/
}
function kangaroo(x1, v1, x2, v2) {
    let one = x1;
    let two = x2;

    for (let i = 0; i < 10000; i++) {
        if (one === two) {
            return "YES";
        }
        one += v1;
        two += v2;
    }

    return "NO";
}

console.log("Number Line Jumps");
console.log(kangaroo(0, 3, 4, 2));
console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /* Closest Numbers
    
    Sorting is useful as the first step in many different tasks. 
    The most common task is to make finding things easier, but there are other uses as well. 
    In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.
    */
}

function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let minDifference = Infinity;
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let difference = arr[i + 1] - arr[i];
        if (difference < minDifference) {
            minDifference = difference;
        }
        // console.log("MINDIFFERENCE:", minDifference);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let difference = arr[i + 1] - arr[i];
        if (difference === minDifference) {
            result.push(arr[i], arr[i + 1]);
            // console.log("RESULT:", result);
        }
    }

    return result;
}
console.log("Closest Numbers");
let nums = [
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854,
];
console.log(closestNumbers(nums));
console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();

{
    /*  */
}

console.log("");

console.log();
