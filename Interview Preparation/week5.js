{
    /* 
    Max Min
    
    You will be given a list of integers, arr, and a single integer k. 
    You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as
                max(arr') - min(arr')
Where:
- max denotes the largest integer in arr'
- min denotes the smallest integer in arr'
    */
}

function maxMin(k, arr) {
    // sort the initial array
    // add k elements from each iteration
    // if difference is less than the previous difference, set a new minimum
    // return the minimum difference

    arr.sort((a, b) => a - b);
    let min = Infinity;

    // console.log(arr);

    for (let i = 0; i < arr.length - k + 1; i++) {
        // console.log("First", arr[i]);
        // console.log("LAST:" , arr[i+k-1])
        if (arr[i + k - 1] - arr[i] < min) {
            min = arr[i + k - 1] - arr[i];
            // console.log("MIN:", min);
        }
    }
    return min;
}

console.log("Max Min");
console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30])); //expect 20
console.log();

{
    /*
    Strong Password
    
    Louise joined a social networking site to stay in touch with her friends. 
    The signup page required her to input a name and a password. 
    However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

    -Its length is at least 6.
    -It contains at least one digit.
    -It contains at least one lowercase English character.
    -It contains at least one uppercase English character.
    -It contains at least one special character. The special characters are: !@#$%^&*()-+
    */
}

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    // Evaluate the length of the password
    // Check for each requirement - if needed, add one
    // Make sure the number of characters needed would be sufficient - if not, add required number
    let addChar = 0;

    if (!/[a-z]/.test(password)) {
        addChar += 1;
        console.log("Need lower case");
    }
    if (!/[A-Z]/.test(password)) {
        addChar += 1;
        console.log("Need upper case");
    }
    if (!/[0-9]/.test(password)) {
        addChar += 1;
        console.log("Need number");
    }
    if (!/[!@#$%^&*()--+)]/.test(password)) {
        addChar += 1;
        console.log("Need special character");
    }
    if (n + addChar < 6) {
        console.log("PASSWORD:", password);
        console.log("ADDCHAR", addChar);
        addChar += 6 - (n + addChar);
    }
    return addChar;
}

console.log("Strong Password");
console.log(minimumNumber("Ab1"));
console.log();

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

console.log("Sherlock And Array");
console.log(balancedSums([1, 2, 3]));
console.log(balancedSums([2, 0, 0, 0]));
console.log();

{
    /*
    Misère Nim

    Two people are playing game of Misère Nim. The basic rules for this game are as follows:

    The game starts with n piles of stones indexed from 0 to n-1. Each pile i (where 0<i<n) has s[i] stones.
    The players move in alternating turns. During each move, the current player must remove one or more stones from a single pile.
    The player who removes the last stone loses the game.
    Given the value of n and the number of stones in each pile, determine whether the person who wins the game is the first or second person to move. 
    If the first player to move wins, print First on a new line; otherwise, print Second. Assume both players move optimally.
    
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
console.log(misereNim([2, 1, 3]));
console.log(misereNim([9, 8, 4, 4, 4, 7]));
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
