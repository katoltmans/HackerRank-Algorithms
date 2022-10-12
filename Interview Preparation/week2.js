{
    /* Lonely Integer
    
    Given an array of integers, where all elements but one occur twice, find the unique element. */
}

function lonelyinteger(a) {
    const map1 = [];

    for (let i = 0; i < a.length; i++) {
        if (!!map1[a[i]]) {
            map1[a[i]] += 1;
        } else {
            map1[a[i]] = 1;
        }
    }

    for (let key in map1) {
        if (map1[key] === 1) {
            return key;
        }
    }

    return;
}

console.log("Lonely Integer");
a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));
console.log();

{
    /* Grading Students
    HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.
    
    */
}

function gradingStudents(grades) {
    let roundedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            roundedGrades.push(grades[i]);
        } else if ((grades[i] + 1) % 5 === 0) {
            roundedGrades.push(grades[i] + 1);
        } else if ((grades[i] + 2) % 5 === 0) {
            roundedGrades.push(grades[i] + 2);
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    console.log(roundedGrades);
    return roundedGrades;
}

{
    /* Flipping Bits
    You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.
    */
}

function flippingBits(n) {
    // Use bitwise operator
    return ~n >>> 0;
}

console.log("Flipping Bits");
let toFlip = 2147483647;
console.log(flippingBits(toFlip));
console.log();

{
    /* Diagonal Difference
    Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:
    1 2 3
    4 5 6
    9 8 9

    */
}

function diagonalDifference(arr) {
    let count = 0;
    let position = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i][i];
        count -= arr[i][position];
        position--;
    }
    return Math.abs(count);
}

console.log("Diagonal Difference");
let matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];
console.log(diagonalDifference(matrix));
console.log();

{
    /*
    Counting Sort 1
    Quicksort usually has a running time of n * log(n), but is there an algorithm that can sort even faster? 
    In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by 
    comparing the elements to one another. A comparison sort algorithm cannot beat n * log(n) (worst-case) running time, 
    since n * log(n) represents the minimum number of comparisons needed to know where to place each element. 
    */
}

function countingSort(arr) {
    const arrayCounts = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        arrayCounts[index] += 1;
    }
    return arrayCounts;
}

console.log("Counting Sort 1");
console.log(
    countingSort([
        63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56,
        75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61,
        83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40,
        67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84,
        33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12,
        29, 35, 80, 78, 80, 6, 5, 24, 49, 82,
    ])
);
console.log();

{
    /*
    Counting Valleys
    An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly stepsNum steps, for every step it was noted if it was an uphill,
    U , or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
    */
}

function countingValleys(steps, path) {
    let valley = 0;
    let count = 0;

    let i = 0;
    while (i < path.length) {
        if (count === 0) {
            if (path[i] === "D") {
                valley += 1;
            }
        }
        if (path[i] === "D") {
            count -= 1;
            i++;
        } else {
            count += 1;
            i++;
        }
    }
    return valley;
}

console.log("Counting Valleys");
console.log(countingValleys(8, "UDDDUDUU")); // expect 1
console.log(countingValleys(12, "DDUUDDUDUUUD")); // expect 2
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
    /* 1
2
112 42 83 119
56 125 56 49
15 78 101 43
62 98 114 108  */
}
function flippingMatrix(matrix) {
    let temp;
    let sum1 = 0;
    let sum2 = 0;
    let pivot = matrix.length / 2;

    console.log("pivot:", pivot);

    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < pivot - 1; j++) {
            sum1 += matrix[i][j];
        }
        console.log("sum1:", sum1);
        for (let j = pivot; j < matrix[i].length; j++) {
            sum2 += matrix[i][j];
        }
        console.log("sum2:", sum2);

        if (sum2 > sum1) {
            for (let j = 0; j < pivot - 1; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[i][j + 1];
                matrix[i][j + 1] = temp;
            }
        }
        console.log(matrix);
    }
}
