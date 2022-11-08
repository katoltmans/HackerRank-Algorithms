{
    /*
    Regular Expressions I
    
    Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. 
    Recall that the English vowels are a, e, i, o, and u.
    */
}

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([a,e,i,o,u]).*\1$/.test(s);

    /*
     * Do not remove the return statement
     */
    return re;
}

console.log("Regular Expressions I");
console.log(regexVar("abcda")); // expect true
console.log(regexVar("abcdo")); // expect false
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
