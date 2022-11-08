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
    /*
    Regular Expressions II
    
    Complete the function in the editor below by returning a RegExp object, re, that matches any string s satisfying both of the following conditions:
    String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
    The remainder of string s (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
    */
}

function regexVar2(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */

    const re = /^((Mr|Mrs|Ms|Dr|Er)\.)[a-zA-Z]+$/.test(s);

    /*
     * Do not remove the return statement
     */
    return re;
}

console.log("Regular Expressions II");
console.log(regexVar2("Mr.X")); // expect true
console.log(regexVar2("Dr#Joseph")); // expect false
console.log(regexVar2("Er .Abc")); // expect false
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
