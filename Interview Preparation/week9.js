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
    /*
    Stock Maximize

    Your algorithms have become so good at predicting the market that you now know what the share price of Wooden Orange Toothpicks Inc. 
    (WOT) will be for the next number of days. Each day, you can either buy one share of WOT, sell any number of shares of WOT that you own, 
    or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?
    */
}

function stockmax(prices) {
    // Set the last value to max and iterate backwards through the array.
    // If the vext value is less than max, add what would have been the daily profit onto profit (max - dayily buy price)
    // If the value is greater than max, set that profit as the new max

    let max = prices[prices.length - 1];
    let profit = 0;

    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] < max) {
            profit += max - prices[i];
        } else {
            max = prices[i];
        }
    }
    return profit;
}

console.log("Stock Maximize");
console.log(stockmax([5, 4, 3, 4, 5])); // expect 4
console.log(stockmax([1, 2, 100])); // expect 197
console.log(stockmax([5, 3, 2])); // expect 0
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
