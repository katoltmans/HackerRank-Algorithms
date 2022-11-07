{
    /*
    Bitwise Operators (&)

    We define S to be a sequence of distinct sequential integers from 1 to n; in other words, s = {1, 2, 3, ..., n}. 
    We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.
    Complete the function in the editor so that given  and , it returns the maximum a & b < k.
    */
}

function getMaxLessThanK(n, k) {
    // find max a & b value
    // if less than k, replace max

    let max = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let andValue = a & b;
            // console.log("A:", a, "B:", b, "AND VALUE:", andValue, "K:", k);
            if (andValue > max && andValue < k) {
                max = andValue;
                // console.log("MAX:", max);
            }
        }
    }
    return max;
}

console.log("Bitwise Operators (&)");
console.log(getMaxLessThanK(8, 5)); // expect 4
console.log(getMaxLessThanK(2, 2)); // expect 0
console.log();

//  *** EXTRA BITWISE ALGOS FROM INTERVIEW PREP ****

{
    /*
    Flipping bits (~)
    
    You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.
    */
}

function flippingBits(n) {
    // Invert all bits with ~ operator
    // Push zeros from the left to shift bits right with >>> (will not preserve the original sign)
    // console.log("~n:", ~n);
    // console.log("~n>>>0:", ~n >>> 0);
    return ~n >>> 0;
}

console.log("Flipping bits (~)");
console.log(flippingBits(4)); // expect 4294967291
console.log(flippingBits(123456)); // expect 4294843839
console.log();

{
    /*
    Sansa and XOR (^)
    
    Sansa has an array. She wants to find the value obtained by XOR-ing the contiguous subarrays, followed by XOR-ing the values thus obtained. Determine this value.
    */
}

function sansaXor(arr) {
    // If arr.length is even, return 0
    // XOR only even indexes when arr.length is odd (a number XORed with itself is always 0)
    let result = 0;
    let arrLength = arr.length;

    if (arrLength % 2 === 0) {
        return 0;
    }

    for (let i = 0; i < arrLength; i += 2) {
        // console.log(i);
        result = result ^ arr[i];
    }

    // console.log("RESULT",result);
    return result;
}

console.log("Sansa and XOR (^)");
console.log(sansaXor([4, 5, 7, 5])); // expect 0
console.log(sansaXor([50, 13, 2])); // expect 48
console.log();

{
    /*
    Sum vs XOR
    
    Given an integer n, find each x such that:
        0 <= x <= n
        n + x = n^x
    where ^ denotes the bitwise XOR operator. Return the number of x's satisfying the criteria.
    */
}

function sumXor(n) {
    // Convert n into a bit string
    // Use regEx match to count the zeros in the pattern
    // The answer is 2 to the power of the zeroes count

    // console.log("N:", n);

    if (n < 2) {
        return 1;
    }
    let exponentBits = n.toString(2);
    // console.log("BIT PATTERN:", exponentBits);
    let zeroesCount = exponentBits.match(/0/g).length;
    // console.log("ZEROS COUNT:", zeroesCount)
    let count = 2 ** zeroesCount;
    return count;
}

console.log("");
console.log(sumXor(5)); // expect 2
console.log(sumXor(10)); // expect 4
console.log();
