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
