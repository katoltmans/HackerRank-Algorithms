{
    /*
    Hello, World!
    
    Use console.log() to print Hello, World! on a new line in the console.
    Use console.log() to print the contents of  (i.e., the argument passed to main).
    */
}

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log("Hello, World!");

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
    return;
}

console.log("Title: Hello, World!");
console.log(greeting("Let's Do This!")); // expect Let's Do This!
console.log("");

{
    /*
    Data Types

    Add to an integer, a float and a string.
    */
}

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = "HackerRank ";

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
    return;
}

console.log("Data Types");
console.log(performOperation(17, 26.93, "Rocks!")); // expect 21, 30.93, HackerRank Rocks!
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
