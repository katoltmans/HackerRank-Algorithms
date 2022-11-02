{
    /*
    Try, Catch, and Finally
    
    Complete the reverseString function; it has one parameter, s. You must perform the following actions:
        1. Try to reverse string s using the split, reverse, and join methods.
        2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
        3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
    */
}

function reverseString(s) {
    // Try to reverse string sith .split().reverse().join()
    // catch and print any errors and then print the original string

    try {
        s = s.split("").reverse().join("");
    } catch (err) {
        console.log(err.message);
    }
    console.log(s);
}

console.log("Try, Catch, and Finally");
console.log(reverseString("String")); // expect gnirtS
console.log(reverseString(1234)); // expect error message, 1234
console.log();

{
    /*
    Throw
    
    Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES. 
    Otherwise, it must throw an Error according to the following rules:
        If a is 0, throw an Error with  Zero Error.
        If a is negative, throw an Error with  Negative Error.
    */
}

function isPositive(a) {
    if (a > 0) {
        return "YES";
    }
    if (a === 0) {
        return "Zero Error";
        // throw new Error("Zero Error");
    } else {
        return "Negative Error";
        // throw new Error("Negative Error");
    }
}

console.log("Throw");
console.log(isPositive(17)); //expect YES
console.log(isPositive(0)); //expect Zero Error
console.log(isPositive(-5)); //expect Negative Error
console.log();

{
    /*  */
}

console.log("");
console.log();
console.log();

{
    /*  */
}

console.log("");
console.log();
console.log();

{
    /*  */
}

console.log("");
console.log();
console.log();

{
    /*  */
}

console.log("");
console.log();
console.log();
