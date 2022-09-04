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
