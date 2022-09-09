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
    /* Tower Breakers
    
    Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:
        Initially there are  towers.
        Each tower is of height .
        The players move in alternating turns.
        In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
        If the current player is unable to make a move, they lose the game.
        Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .
    */
}

function towerBreakers(n, m) {
    // If the number of towers is even, player 2 will win because every move can be matched
    // If the number of towers is odd, player 1 will win because the last tower can be taken to 1 by player 1
    // if the measurement of the towers is 1, player 1 automatically loses because no moves can be made
    if (n % 2 === 0 || m === 1) {
        return 2;
    } else {
        return 1;
    }
}

console.log("Tower Breakers");
console.log(towerBreakers(2, 2));
console.log(towerBreakers(1, 4));
console.log();

{
    /*
    Absolute Minimum difference in an Array
    
    The absolute difference is the positive difference between two values a and b, is written |a-b| or |b-a| and they are equal. 
    Given an array of integers, find the minimum absolute difference between any two elements in the array.
    */
}

function minimumAbsoluteDifference(arr) {
    // Iterate through the array finding the absolute difference of each pair
    // if the difference is smaller than the previus difference, set a new minimum difference

    arr.sort((a, b) => a - b);
    let min = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        let difference = Math.abs(arr[i + 1] - arr[i]);
        // console.log("DIFFERENCE:", difference);
        if (difference < min) {
            min = difference;
        }
    }

    return min;
}

console.log("Absolute Minimum Difference");
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); //expect 3 (71 - 68 = 3)
console.log();

{
    /* 
    Caesar Cypher

    ulius Caesar protected his confidential information by encrypting it using a cipher. 
    Caesar's cipher shifts each letter by a number of letters. 
    If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
    In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
    */
}

function caesarCipher(s, k) {
    // Create a shifted alphabet array by k places
    // find the index of value in the original array and replace it with the value at the matching index in the shifted array

    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let cypherAlphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let result = "";

    for (let i = 0; i < k; i++) {
        let toRotate = cypherAlphabet.shift();
        cypherAlphabet.push(toRotate);
        // cypherAlphabet.unshift(cypherAlphabet.pop());
    }
    console.log("CYPHER ALPHABET:", cypherAlphabet);

    for (let i = 0; i < s.length; i++) {
        let index = 0;
        if (alphabet.includes(s[i])) {
            index = alphabet.indexOf(s[i]);
            result = result + cypherAlphabet[index];
        } else if (alphabet.includes(s[i].toLowerCase())) {
            index = alphabet.indexOf(s[i].toLowerCase());
            let cypherChar = cypherAlphabet[index].toUpperCase();
            result = result + cypherChar;
        } else {
            result = result + s[i];
        }
    }

    // console.log("RESULT:", result);
    return result;
}

console.log("Caesar Cypher:");
let code = "middle-Outz";
console.log(caesarCipher(code, 2)); // expect "okffng-Qwvb"
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
