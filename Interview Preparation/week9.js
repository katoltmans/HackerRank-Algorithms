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
    /*
    Simple Text Editor
    
    Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:
        1. append(W) - Append string W to the end of S.
        2. delete(k) - Delete the last k characters of S.
        3. print(k) - Print the kth character of S.
        4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.
    */
}

function processData(input) {
    // Create switch case based on the initial input

    // input = input.split("\n");
    // console.log("INPUT:", input);
    let runningString = "";
    let stack = [runningString];

    for (let i = 1; i < input.length; i++) {
        const [op, text] = input[i].split(" ");
        // console.log("QUERY:", query);

        switch (op) {
            case "1":
                runningString += text;
                // console.log("RUNNING STRING:", runningString);
                stack.push(runningString);
                //console.log("STACK:", stack);
                break;
            case "2":
                let toDelete = parseInt(text);
                //console.log("TO DELETE:", toDelete);
                runningString = runningString.substring(
                    0,
                    runningString.length - toDelete
                );
                //console.log("AFTER DELETE:", runningString);
                stack.push(runningString);
                break;
            case "3":
                // console.log(input[i])
                // console.log("RUNNING STRING:", runningString);
                let index = parseInt(text - 1);
                // //console.log("PRINT INDEX:", index);
                console.log(runningString[index]);
                break;
            case "4":
                stack.pop();
                runningString = stack[stack.length - 1];
                break;
        }
    }
    return;
}

console.log("Simple Text Editor");
console.log(
    processData(["1 abc", "3 3", "2 3", "1 xy", "3 2", "4", "4", "3 1"]) // expect c y a
);
console.log();

{
    /*
    Equal Stacks
    
    You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. 
    You can change the height of a stack by removing and discarding its topmost cylinder any number of times.
    Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. 
    This means you must remove zero or more cylinders from the top of zero or more of the three stacks until 
    they are all the same height, then return the height.
      */
}

function equalStacks(h1, h2, h3) {
    // Reduce each array to find the initial sum of each
    // Shift first elements of arrays that are greater than the lowest sum until all arrays are an equal height
    // Subtact the shifted sum from the stack total
    // Min sum of stacks is the comparison value until all stacks are even

    let h1Total = h1.reduce((a, b) => a + b);
    let h2Total = h2.reduce((a, b) => a + b);
    let h3Total = h3.reduce((a, b) => a + b);

    let min = Math.min(h1Total, h2Total, h3Total);

    while (true) {
        if (h1Total === h2Total && h2Total === h3Total) {
            return min;
        }

        if (h1Total !== min) {
            h1Total -= h1.shift();
        }

        if (h2Total !== min) {
            h2Total -= h2.shift();
        }

        if (h3Total !== min) {
            h3Total -= h3.shift();
        }
        min = Math.min(h1Total, h2Total, h3Total);
    }

    return min;
}

console.log("Equal Stacks");
console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1])); // expect 5
console.log(equalStacks([1, 2, 1, 1], [1, 1, 2], [1, 1])); // expect 2
console.log();

{
    /*
    The Coin Change Problem
    
    Given an amount and the denominations of coins available, determine how many ways change can be made for amount. 
    There is a limitless supply of each coin type. (Coins are not standard denominations)
    */
}

function getWays(n, c) {
    // Prefill an array with on and zeros according to coin array length
    // Track coin totals while iterating through the array - return final index

    // Early return
    if (c.length < 1) {
        return 0;
    }

    // Preload array with 1 to take care of zero spot and fill rest with zeros to keep track of counts
    let storage = [1, ...Array(n).fill(0)];
    // console.log("STORAGE:", storage);

    // Iterate through the coin array
    for (let i = 0; i < c.length; i++) {
        // Count coin totals and track in storage array
        for (let j = c[i]; j <= n; j++) {
            storage[j] += storage[j - c[i]];
            // console.log(storage);
        }
    }
    // return last value of the storage array because that is the number of combinations that worked to create n
    return storage[n];
}

console.log("The Coin Change Problem");
console.log(getWays(4, [1, 2, 3])); // expect 4
console.log(getWays(10, [2, 5, 3, 6])); // expect 5
console.log();

{
    /*
    Two Characters
    
    Given a string, remove characters until the string is made up of any two alternating characters. 
    When you choose a character to remove, all instances of that character must be removed. 
    Determine the longest string possible that contains just two alternating letters.
    */
}

function alternate(s) {
    // Find unique characters of the string
    // Use a regular expression to filter out non matching pairs of characters
    // Check if the new string alternates - if so compare to max length

    let maxLength = 0;

    // Create an array of unique characters
    let uniqueStr = [...new Set(s)].join("");
    // console.log("STRING:", s, "UNIQUE STRING:", uniqueStr);

    for (let i = 0; i < uniqueStr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < uniqueStr.length; j++) {
            let subCount = 2;

            // Regular expression to filter out characters that do not match
            let regEx = new RegExp("[^" + uniqueStr[i] + uniqueStr[j] + "]");
            // console.log("REGEX:", regEx);

            // Create a new string with only matching characters
            let newStr = s.split(regEx).join("");
            // console.log("NEW STRING:", newStr);

            // Check if characters of newStr alternates
            for (let k = 0; k < newStr.length - 2; k++) {
                if (
                    newStr[k] !== newStr[k + 2] ||
                    newStr[k] === newStr[k + 1]
                ) {
                    subCount = 0;
                    break;
                } else {
                    subCount++;
                }
            }

            // Set maxLength to count if the count is larger
            count = subCount;
            maxLength = Math.max(maxLength, count);
            // console.log("MAX LENGTH", maxLength);
        }
    }

    return maxLength;
}

console.log("Two Characters");
console.log(alternate("beabeefeab")); // expect 5
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab")); // expect 8
console.log(alternate("asvkugfiugsalddlasguifgukvsa")); // expect 0
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
