{
    /*
    Waiter

    You are a waiter at a party. There is a pile of numbered plates. Create an empty  array. At each iteration, i, 
    remove each plate from the top of the stack in order. Determine if the number on the plate is evenly divisible by the ith prime number. 
    If it is, stack it in pile B. Otherwise, stack it in stack A. Store the values in B from top to bottom in answers. 
    In the next iteration, do the same with the values in stack A. Once the required number of iterations is complete, store the remaining values in A in answers, 
    again from top to bottom. Return the answers array.
    */
}

function findPrimeNums(max, q) {
    let store = [];
    let primes = [];

    for (let i = 2; i <= max; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
        if (primes.length === q) {
            break;
        }
    }
    return primes;
}

function waiter(number, q) {
    // Create prime array
    // Iterate through the initial array and pop and push values according to their divisibility of the prime iteration
    // continuously loop through all non divisible arrays until all values have been pushed to the results array

    let maxValue = Math.max(...number);
    // console.log("MAX:", maxValue);
    let primeArr = findPrimeNums(maxValue, q);
    console.log("PRIME ARR:", primeArr);
    let aArr = [];
    let bArr = [];
    let answers = [];

    for (let i = 0; i < primeArr.length; i++) {
        // console.log("PRIME:", primeArr[i]);
        for (let j = number.length - 1; j >= 0; j--) {
            if (number[j] % primeArr[i] === 0) {
                bArr.push(number.pop());
            } else {
                aArr.push(number.pop());
            }
        }
        // console.log("BARR:", bArr);
        // console.log("AARR:", aArr);
        for (let k = bArr.length - 1; k >= 0; k--) {
            answers.push(bArr.pop());
        }
        // console.log("ANSWERS:", answers);

        number = aArr;
        aArr = [];
    }

    for (let n = number.length - 1; n >= 0; n--) {
        answers.push(number.pop());
    }
    // console.log("FINAL ANSWER:", answers);
    return answers;
}

console.log("Waiter");
console.log(waiter([3, 4, 7, 6, 5], 1)); // expect [4, 6, 3, 7, 5]
console.log(waiter([3, 3, 4, 4, 9], 2)); // expect [4,4, 9, 3, 3]
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

{
    /*  */
}

console.log("");

console.log();
