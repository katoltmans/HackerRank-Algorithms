{
    /* There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all  where 0 <= i < n.

There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO. */
}

function twoArrays(k, A, B) {
    let sortedA = A.sort((a, b) => a - b);
    let sortedB = B.sort((a, b) => b - a);

    console.log("A:", sortedA);
    console.log("B:", sortedB);

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] + sortedB[i] < k) {
            return "NO";
        }
    }
    return "YES";
}
console.log("Two Arrays");
console.log(10, [2, 1, 3], [7, 8, 9]);
console.log(5, [1, 2, 2, 1], [3, 3, 3, 4]);
console.log();

{
    /*  */
}

{
    /*  */
}

{
    /* Sales By Match
    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. */
}

function sockMerchant(n, ar) {
    let pairMap = [];
    let pairCount = 0;

    for (let i = 0; i < ar.length; i++) {
        if (!!pairMap[ar[i]]) {
            pairMap[ar[i]] += 1;
        } else {
            pairMap[ar[i]] = 1;
        }
    }
    console.log(pairMap);

    for (let value in pairMap) {
        let pairValue = Math.floor(pairMap[value] / 2);

        console.log("PAIR VALUE:", pairValue);

        if (pairValue != 0) {
            pairCount = pairCount + pairValue;
        }
    }
    console.log("PAIR COUNT:", pairCount);
    return pairCount;
}

console.log("Sales By Match");
let sockArray = [1, 2, 1, 2, 1, 3, 2];
console.log(sockMerchant(7, sockArray));
console.log();

{
    /* Migratory Birds
    
    Given an array of bird sightings where every element represents a bird type id, 
    determine the id of the most frequently sighted type. If more than 1 type has been 
    spotted that maximum amount, return the smallest of their ids. */
}

function migratoryBirds(arr) {
    // console.log("arr:", arr);
    let sortedArray = arr.sort((a, b) => a - b);
    let birdMap = {};
    let max = 0;

    // console.log("SORTED ARRAY:", sortedArray);

    // Create map
    for (let i = 0; i < sortedArray.length; i++) {
        if (!!birdMap[sortedArray[i]]) {
            birdMap[sortedArray[i]] += 1;
        } else {
            birdMap[sortedArray[i]] = 1;
        }
    }

    // console.log("BIRD MAP:", birdMap);

    // Set max
    for (let key in birdMap) {
        if (birdMap[key] > max) {
            max = birdMap[key];
        }
    }

    // console.log("MAX:", max);

    // Find 1st key of max value
    for (let key in birdMap) {
        if (birdMap[key] === max) {
            return key;
        }
    }
}

{
    /* Subarray Division
    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
    */
}

function birthday(s, d, m) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        sum = s[i];
        for (let j = i + 1; j < i + m; j++) {
            sum = sum + s[j];
        }

        if (sum === d) {
            count++;
        }
    }

    return count;
}

bar = [1, 2, 1, 3, 2];
day = 3;
month = 2;

console.log("Subarray Division:");
console.log(birthday(bar, day, month));
console.log();

{
    /*Migratory Birds
    Given an array of bird sightings where every element represents a bird type id, 
    determine the id of the most frequently sighted type. If more than 1 type has been 
    spotted that maximum amount, return the smallest of their ids.
    */
}

function migratoryBirds(arr) {
    // console.log("arr:", arr);
    let sortedArray = arr.sort((a, b) => a - b);
    let birdMap = {};
    let max = 0;

    // console.log("SORTED ARRAY:", sortedArray);

    // Create map
    for (let i = 0; i < sortedArray.length; i++) {
        if (!!birdMap[sortedArray[i]]) {
            birdMap[sortedArray[i]] += 1;
        } else {
            birdMap[sortedArray[i]] = 1;
        }
    }

    // console.log("BIRD MAP:", birdMap);

    // Set max
    for (let key in birdMap) {
        if (birdMap[key] > max) {
            max = birdMap[key];
        }
    }

    // console.log("MAX:", max);

    // Find 1st key of max value
    for (let key in birdMap) {
        if (birdMap[key] === max) {
            return key;
        }
    }
}

console.log("Migratory Birds");
birdArray = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(birdArray));
console.log();

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}
