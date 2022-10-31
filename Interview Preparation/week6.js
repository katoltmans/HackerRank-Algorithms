{
    /*
    Sherlock and Array

    Watson gives Sherlock an array of integers. 
    His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.
    */
}

function balancedSums(arr) {
    // sum the total of the array
    // arrays with i value have values of non on each side - return YES
    // arrays with 2 values cannot have an equal value on each side - return NO
    // edge cases - the value to left of arr[0] and right or arr[arr.length-1] count as none
    let arrTotal = arr.reduce((previous, current) => previous + current);
    let arrSum = 0;

    if (arr.length === 1) {
        return "YES";
    }

    if (arr.length < 3) {
        return "NO";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arrSum === arrTotal - arrSum - arr[i]) {
            return "YES";
        }
        arrSum += arr[i];
    }

    return "NO";
}

console.log("Sherlock and Array");
console.log(balancedSums([1, 2, 3])); //expect NO
console.log(balancedSums([0, 0, 2, 0])); //expect YES
console.log();

{
    /*
    Misère Nim

    Two people are playing game of Misère Nim. The basic rules for this game are as follows:
    * The game starts with n piles of stones indexed from 0 to n-1. Each pile i (where 0<i<n) has s[i] stones.
    * The players move in alternating turns. During each move, the current player must remove one or more stones from a single pile.
    * The player who removes the last stone loses the game.
    Given the value of n and the number of stones in each pile, determine whether the person who wins the game is the first 
    or second person to move. If the first player to move wins, print First on a new line; otherwise, print Second. Assume both players move optimally.
    */
}

function misereNim(s) {
    // If each index only contains one stone, First will win even length arrays and Second will win odd length arrays
    // Columns with multiple values need duplicates removed (choices that will cancel each other out). Use XOR to do this
    let numChoices = s.length;
    let total = s.reduce((a, b) => a + b);
    let extraChoices = s.reduce((a, b) => a ^ b);

    // console.log("NUMCHOICES:", numChoices);
    // console.log("EXTRACHOICES:", extraChoices);
    // console.log("TOTAL:", total);

    if (numChoices === total) {
        if (numChoices % 2 === 0) {
            return "First";
        } else {
            return "Second";
        }
    }

    if (extraChoices === 0) {
        return "Second";
    } else {
        return "First";
    }
}

console.log("Misère Nim");
console.log(misereNim([2, 1, 3])); // Expect Second
console.log(misereNim([9, 8, 4, 4, 4, 7])); // expect First
console.log();

{
    /*
    Gaming Array 1

    Andy wants to play a game with his little brother, Bob. The game starts with an array of distinct integers and the rules are as follows:
        * Bob always plays first.
        * In a single move, a player chooses the maximum element in the array. He removes it and all elements to its right. 
            For example, if the starting array arr = [2,3,5,4,1], then it becomes arr' = [2,3] after removing [5,4,1].
        * The two players alternate turns.
        * The last player who can make a move wins.
    Andy and Bob play g games. Given the initial array for each game, find and print the name of the winner on a new line. If Andy wins, print ANDY; if Bob wins, print BOB.
    To continue the example above, in the next move Andy will remove 3. Bob will then remove 2 and win because there are no more integers to remove.
    */
}

function gamingArray(arr) {
    // Count number of max moves from left to right
    // even count = "ANDY", odd count = "BOB"
    //

    let max = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            count++;
        }
    }

    if (count % 2 === 0) {
        return "ANDY";
    } else {
        return "BOB";
    }
}

console.log("Gaming Array 1");
console.log(gamingArray([5, 2, 6, 3, 4])); // expect ANDY
console.log(gamingArray([1, 3, 5, 7, 9])); // expect BOB
console.log();

{
    /*
    Forming a Magic Square
    
    We define a magic square to be an n x n  matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, 
    or diagonal of length n is always equal to the same number: the magic constant.
    You will be given a 3 x 3 matrix  of integers in the inclusive range [1, 9]. We can convert any digit a to any other digit b in the range [1,9] at cost of [a-b]. 
    Given s, convert it into a magic square at minimal cost. Print this cost on a new line.
    Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].
    */
}

function formingMagicSquare(s) {
    // set possibilities to the limited number of working magic square orders
    // flatten to array to compare to each possibility
    // find the absolute difference between each value in each possibility and the corresponding value in the flattened array
    // that sum of all differences = cost
    // Store the difference of each possibility and compare to the previous minimum to find the absolute minimum
    // return the absolute minimum
    let possibilities = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
    ];
    let min = Number.POSITIVE_INFINITY;
    s = s.flat();
    // console.log("S:", s);

    for (let i = 0; i < possibilities.length; i++) {
        let difference = 0;
        for (let j = 0; j < s.length; j++) {
            difference += Math.abs(possibilities[i][j] - s[j]);
        }
        if (difference < min) {
            min = difference;
        }
    }

    return min;
}

console.log("Forming a Magic Square");
console.log(formingMagicSquare([4, 9, 2], [3, 5, 7], [8, 1, 5])); // expect 1
console.log(formingMagicSquare([4, 8, 2], [4, 5, 7][(6, 1, 6)])); // expect 4
console.log();

{
    /*
    Recursive Digit Sum

    We define super digit of an integer x using the following rules:
    Given an integer, we need to find the super digit of the integer.
    If x has only 1 digit, then its super digit is x.
    Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
    For example, the super digit of  will be calculated as:
        super_digit(9875)   	9+8+7+5 = 29 
        super_digit(29) 	2 + 9 = 11
        super_digit(11)		1 + 1 = 2
        super_digit(2)		= 2  
    */
}

function superDigit(n, k) {
    // If k = 1, return k
    // concatenate n k number of times
    // Slice k and convert to integers to add together

    if (n.length === 1) {
        return parseInt(n);
    }

    let sum = 0;
    let numLength = n.length;

    for (let i = 0; i < numLength; i++) {
        let toAdd = parseInt(n[i]);
        // console.log("TOADD:", toAdd);
        sum += toAdd;
        // console.log("SUM:", sum);
    }

    sum *= k;

    n = sum.toString();

    return superDigit(n, 1);
}

console.log("Recursive Digit Sum");
console.log(superDigit("9875", 4)); // expect 8
console.log(superDigit("148", 3)); // expect 3
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
