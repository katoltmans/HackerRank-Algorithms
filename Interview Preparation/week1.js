{
    /* 
    Plus Minus - 
    Given an array of integers, calculate the ratios of its elements that are 
    positive, negative, and zero. Print the decimal value of each fraction on 
    a new line with  places after the decimal.
    */
}

function plusMinus(arr) {
    let positive = 0;
    let zero = 0;
    let negative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }

    positive = positive / arr.length;
    console.log(positive.toFixed(6));
    negative = negative / arr.length;
    console.log(negative.toFixed(6));
    zero = zero / arr.length;
    console.log(zero.toFixed(6));

    return positive, negative, zero;
}

console.log("Plus Minus:");
plusMinus([-4, 3, -9, 0, 4, 1]);

{
    /* 
    Min-Max Sum - 

    Given five positive integers, find the minimum and maximum values that can be 
    calculated by summing exactly four of the five integers. Then print the respective 
    minimum and maximum values as a single line of two space-separated long integers.

*/
}

function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    let sortedArray = arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < sortedArray.length - 1; i++) {
        min += sortedArray[i];
    }

    for (let j = 1; j < sortedArray.length; j++) {
        max += sortedArray[j];
    }

    let minMax = console.log(min, max);

    return minMax;
}

console.log("Min-Max Sum:");
arr = [1, 3, 5, 7, 9];
console.log(miniMaxSum(arr));

{
    /* Time Conversion
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */
}

function timeConversion(s) {
    let hour = 0;
    let result;

    if (
        (s[8] === "A" && s[0] !== "1") ||
        (s[8] === "P" && s[0] === "1" && s[1] === "2")
    ) {
        result = s.slice(0, 8);
    } else if (s[8] === "A" && s[0] === "1" && s[1] === "2") {
        result = "00" + s.slice(2, 8);
    } else {
        hour = parseInt(s.slice(0, 2));
        hour += 12;
        let reStringHour = hour.toString();
        result = reStringHour + s.slice(2, 8);
    }

    return result;
}

console.log("Time Conversion:");
console.log(timeConversion("07:05:45PM"));

{
    /* */
}

{
    /* Your task is to write a program that creates or splits Camel Case variable, method, and class names.
    Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame
    
    */
}

// function processData(inputBlock) {
//     //console.log("'"+inputBlock.replace(/\n/g, '\\n').replace(/\r/g, '\\r')+"'");
//     //let cleanInput = inputBlock.replace(/\r/g, '');
//     let inputArray = inputBlock.split("\r\n");
//     let outputArray = [];

//     for (let input of inputArray) {
//         let newString = "";
//         if (input[0] === "S") {
//             if (input[2] === "M") {
//                 for (let i = 4; i < input.length - 2; i++) {
//                     if (input[i] === input[i].toUpperCase()) {
//                         newString += " " + input[i].toLowerCase();
//                     } else {
//                         newString += input[i];
//                     }
//                     if (input[i] === "(") {
//                         return newString;
//                     }
//                 }
//                 // console.log(newString);
//             }
//             if (input[2] === "C") {
//                 newString += input[4].toLowerCase();
//                 for (let i = 5; i < input.length; i++) {
//                     if (input[i] === input[i].toUpperCase() && i) {
//                         newString += " " + input[i].toLowerCase();
//                     } else {
//                         newString += input[i];
//                     }
//                 }
//                 // console.log(newString);
//             }
//             if (input[2] === "V") {
//                 for (let i = 4; i < input.length; i++) {
//                     if (input[i] === input[i].toUpperCase() && i) {
//                         newString += " " + input[i].toLowerCase();
//                     } else {
//                         newString += input[i];
//                     }
//                 }
//                 // console.log(newString);
//             }
//         }
//         if (input[0] === "C") {
//             if (input[2] === "C") {
//                 newString += input[4].toUpperCase();
//                 for (let i = 5; i < input.length; i++) {
//                     if (input[i] === " ") {
//                         i++;
//                         newString += input[i].toUpperCase();
//                     } else {
//                         newString += input[i];
//                     }
//                 }
//                 // console.log(newString);
//             }
//             if (input[2] === "V" || input[2] === "M") {
//                 for (let i = 4; i < input.length; i++) {
//                     if (input[i] === " ") {
//                         i++;
//                         newString += input[i].toUpperCase();
//                     } else {
//                         newString += input[i];
//                     }
//                 }
//                 if (input[2] === "M") {
//                     newString += "()";
//                 }
//                 // console.log(newString);
//             }
//         }

//         outputArray.push(newString);
//     }
//     let finalString = outputArray.join("\n");
//     console.log(finalString);
//     return finalString;
// }

{
    /*  */
}

{
    /*  */
}

{
    /*  */
}

// Median

function median(arr) {
    console.log(arr);
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    // let temp;

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] > arr[j]) {
    //             temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }

    console.log("sortedArray:", arr);

    let middle = Math.floor(arr.length / 2);
    console.log("middle:", middle);

    let median = arr[middle];
    console.log("median:", median);

    return median;
}

let testArr = [3, 6, 9, 2, 4, 6, 1, 3, 2];
console.log("Find Median");
console.log(median(testArr));
