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
    /*
    Arithmetic Operators
    
    Complete the following functions in the editor below:
        1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
        3. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
    */
}

// Calculate the area of a rectangle.
function getArea(length, width) {
    let area;
    // Multiply length * width to calculate area
    area = length * width;

    return area;
}

//Calculate the perimeter of a rectangle.
function getPerimeter(length, width) {
    let perimeter;
    // add 2*length + 2*width to calculate perimeter
    perimeter = 2 * length + 2 * width;

    return perimeter;
}

console.log("Arithmetic Operators");
console.log(getArea(3, 4.5)); // expect 13.5
console.log(getPerimeter(3, 4.5)); // expect 15
console.log();

{
    /*
    Functions

    Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).
    */
}

//Create the function factorial here

const factorial = (n) => {
    let total = n;
    let i = n - 1;

    while (i > 0) {
        total *= i;
        i--;
    }

    return total;
};

console.log("Functions");
console.log(factorial(4)); // expect 24
console.log();

{
    /*
    Let and Const
    
    1. Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
    2. Read a number, r, denoting the radius of a circle from stdin.
    3. Use PI and r to calculate the area and perimeter of a circle having radius .
    4. Print area as the first line of output and print perimeter as the second line of output.
    */
}

function main(num) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = num; //parseFloat(readLine());

    // Print the area of the circle:
    console.log(PI * Math.pow(r, 2));

    // Print the perimeter of the circle:
    console.log(2 * PI * r);
    return;
}

console.log("Let and Const");
console.log(main(2.6)); // expect 21.23716....., 16.33628....
console.log();

{
    /*
    Conditional Statements: If-Else
    
    Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. 
    It must return the letter corresponding to her grade according to the following rules:
        If 25 < score <= 30, then grade = A.
        If 20 < score <= 25, then grade = B.
        If 15 < score <= 20, then grade = C.
        If 10 < score <= 15, then grade = D.
        If 5 < score <= 10, then grade = E.
        If 0 < score <= 5, then grade = F.
    */
}

function getGrade(score) {
    let grade;
    // Determine grade based on score range

    if (score > 25) {
        grade = "A";
    } else if (score > 20 && score <= 25) {
        grade = "B";
    } else if (score > 15 && score <= 20) {
        grade = "C";
    } else if (score > 10 && score <= 15) {
        grade = "D";
    } else if (score > 5 && score <= 10) {
        grade = "E";
    } else {
        grade = "F";
    }

    return grade;
}

console.log("Conditional Statements: If-Else");
console.log(getGrade(11)); // expect D
console.log();

{
    /*
    Conditionals - Switch
    
    Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
        If the first character in string s is in the set {a, e, i, o, u}, then return A.
        If the first character in string s is in the set {b, c, d, f, g}, then return B.
        If the first character in string s is in the set {h, j, k, l, m}, then return C.
        If the first character in string s is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.
        Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
    */
}

function getLetter(s) {
    let letter;
    // Check which case first character matches and return the appropriate letter

    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            letter = "D";
            break;
    }

    return letter;
}

console.log("Conditionals - Switch");
console.log(getLetter("adfgt")); // expect A
console.log();

{
    /*
    Loops
    
    First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
    Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
    */
}

function vowelsAndConsonants(s) {
    // print each vowel of a string to a new line followed by each consonant in order

    let vowels = ["a", "e", "i", "o", "u"];
    let consonents = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonents.push(s[i]);
        }
    }

    for (let j = 0; j < consonents.length; j++) {
        console.log(consonents[j]);
    }
    return;
}

console.log("Loops");
console.log(vowelsAndConsonants("javascriptloops")); // expect a, a, i, o, o, j, v, s, c, r, p, t, l, p, s
console.log();

{
    /*
    Arrays
    
    Complete the getSecondLargest function in the editor below.
    getSecondLargest has the following parameters:
        int nums[n]: an array of integers
    */
}

function getSecondLargest(nums) {
    // Set max to the first value of the array
    // If the next value is less than max, set second - otherwise replace max and set max to second
    // iterate through the array, comparing values to max and second

    let max = nums[0];
    let secondLargest;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < max && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }

        if (nums[i] > max) {
            secondLargest = max;
            max = nums[i];
        }
    }
    return secondLargest;
}

console.log("Arrays");
console.log(getSecondLargest([2, 3, 6, 6, 5])); // expect 5
console.log(getSecondLargest([-7, -3, -9, 1, -2, -15])); // expect -2
console.log();
