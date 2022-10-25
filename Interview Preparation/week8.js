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
    /*
    Ice Cream Parlor

    Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.
    Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
        Example: m = 6 cost = [1,3,4,5,6]
    The two flavors that cost 1 and 5 meet the criteria. Using 1-based indexing, they are at indices 1 and 4.
    */
}

function icecreamParlor(m, arr) {
    // Loop the array and sum with the initial value to see if the total cost = m
    // Break and return an array of those sorted values
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === m) {
                result.push(i + 1, j + 1);
                // console.log("RESULT:", result);
                return result.sort((a, b) => a + b);
            }
        }
    }
}

console.log("Ice Cream Parlor");
console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); // expect 1, 4
console.log(icecreamParlor(9, [1, 3, 4, 6, 7, 9])); // expect 2, 4
console.log();

{
    /*
    Inserting a Node Into a Sorted Doubly Linked List - (***SOLUTION CODE ONLY*** - would need to build list to work)

    Given a reference to the head of a doubly-linked list and an integer, data, 
    create a new DoublyLinkedListNode object having data value data and insert it at the proper location to maintain the sort.

    */
}

function sortedInsert(llist, data) {
    // Traverse the linked list to find insertion point
    // Add data to a new node and assign the current node's next to the new node next to the assigned location and point previous of the newNode to the current node
    // The new node then becomes the current node's next

    let current = llist;
    let newNode = new DoublyLinkedListNode(data);

    // If list is empty, add the new node
    if (llist === null) {
        return newNode;
    }

    // If new node belongs at the start of a list, add it and return the new list w/ new node as head
    if (data < current.data) {
        current.prev = newNode;
        newNode.next = current;
        return newNode;
    }

    while (current != null) {
        // When next node is null, add new node in front or behind current node depending on values
        if (current.next === null) {
            if (current.data < data) {
                newNode.prev = current;
                current.next = newNode;
            } else {
                newNode.next = current;
                current.prev = newNode;
            }
            break;
        } else if (current.next.data >= data) {
            // Insert new node after current if new node next data is greater than new node value
            // 2 <=> 4
            // 3
            // C(1,2,4)  <=>  N(2,4, null)
            // D(null, 3, null)
            // C(1,2,+3) D(+2,3,+4) N(+3,4,null)
            current.next.prev = newNode;
            newNode.next = current.next;
            newNode.prev = current;

            current.next = newNode;
            break;
        }
        current = current.next;
    }

    return llist;
}

{
    /*
    Queue Using Two Stacks

    A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front 
    and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue 
    (i.e., the one that has been waiting the longest) is always the first one to be removed.

    A basic queue has the following operations:

    * Enqueue: add a new element to the end of the queue.
    * Dequeue: remove the element from the front of the queue and return it.

    In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:

    1 x: Enqueue element x into the end of the queue.
    2: Dequeue the element at the front of the queue.
    3: Print the element at the front of the queue.
    
    */
}

function processData(input) {
    // Create a process to iterate through queries
    // Execute process that matches querie number
    // Return printed values only
    // 1. Enqueue given value to end of stack
    // 2. Dequeue first value in stack
    // 3. Print current first value of the stack

    // console.log(input);

    let stack1 = [];
    let stack2 = [];

    for (let i = 0; i < input.length; i++) {
        // console.log("IO:", input[i][0]);
        switch (input[i][0]) {
            case "1":
                let pushValue = input[i].slice(2);
                // console.log("PUSH VALUE:", pushValue);
                stack1.push(pushValue);
                break;
            case "2":
                if (stack1.length === 1) {
                    stack1.pop();
                    // console.log("POPPED 1 ELEMENT")
                    break;
                } else {
                    for (let j = stack1.length - 1; j > 0; j--) {
                        // console.log("stack1[j]", stack1[j]);
                        stack2.push(stack1[j]);
                        stack1.pop();
                    }
                    // console.log("STACK1:", stack1);
                    // console.log("STACK2:", stack2);
                    stack1.pop();

                    for (let j = stack2.length - 1; j >= 0; j--) {
                        stack1.push(stack2[j]);
                        stack2.pop();
                    }
                    // console.log("STACK1:", stack1);

                    break;
                }
            case "3":
                console.log(stack1[0]);
                break;
        }
    }
    // console.log("STACK1:", stack1);
}

console.log("Queue Using Two Stacks");
console.log(
    processData([
        "1 42",
        "2",
        "1 14",
        "3",
        "1 28",
        "3",
        "1 60",
        "1 78",
        "2",
        "2",
    ])
); // expect 14 14
console.log();

{
    /*
    Sherlock and Anagrams
    
    Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
    Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
    */
}

function sherlockAndAnagrams(s) {
    // Create a map of the frequency of each substring
    // Sort substrings to compare letters of each
    // Increase the ongoing count every time a repeated substring is found

    let frequencyMap = [];
    let count = 0;
    s = s.split("");
    // console.log("S", s);

    for (let i = 0; i < s.length; i++) {
        let subStr = "";
        for (let j = i; j < s.length; j++) {
            subStr = (subStr + s[j]).split("").sort().join("");
            // console.log("SUBSTRING:", subStr);

            if (!!frequencyMap[subStr]) {
                // count += frequencyMap[subStr];
                frequencyMap[subStr] += 1;
            } else {
                frequencyMap[subStr] = 1;
            }
        }
    }
    // console.log("FREQUENCY MAP:", frequencyMap);

    for (let key in frequencyMap) {
        // console.log("FREQUENCYMAP[key]:", frequencyMap[key]);
        let anagrams = (frequencyMap[key] * (frequencyMap[key] - 1)) / 2;
        count += anagrams;
        // console.log("COUNT:", count);
    }
    return count;
}

console.log("Sherlock and Anagrams");
console.log(sherlockAndAnagrams("tttt")); // expect 10
console.log(sherlockAndAnagrams("ifailuhkqq")); // Expect 3
console.log();

{
    /*
    Super Reduced String

    Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
    In each operation, select a pair of adjacent letters that match, and delete them.
    Delete as many characters as possible using this method and return the resulting string. 
    If the final string is empty, return Empty String
    */
}

function superReducedString(s) {
    // Iterate through s string checking if adjacent letters match
    // If they match, set the new string to a concatination of slices on either side
    // If resulting string is empty, return "Empty String"

    let finalStr = s;

    if (finalStr === "") {
        return "Empty String";
    }

    for (let i = 0; i < finalStr.length - 1; i++) {
        if (finalStr[i] === finalStr[i + 1]) {
            finalStr = finalStr.slice(0, i) + finalStr.slice(i + 2);
            // console.log("FINAL STRING(in loop):", finalStr);
            break;
        }
    }

    if (s.length === finalStr.length) {
        return finalStr;
    }

    // console.log("FINAL STRING:", finalStr);
    return superReducedString(finalStr);
}

console.log("Super Reduced String");
console.log(superReducedString("aaabccddd")); // expect "abd"
console.log(superReducedString("baab")); // expect "Empty String"
console.log();

{
    /*
    Balanced Brackets
    
    A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
    Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or })    
    of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
    A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents 
    in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses 
    a single, unbalanced closing square bracket, ].
    By this logic, we say a sequence of brackets is balanced if the following conditions are met:
        * It contains no unmatched brackets.
        * The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
    Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.
    */
}

function isBalanced(s) {
    // If an array length is odd, return "NO"
    // Push characters to the stack
    // if current pop matches current character, leave removed
    // if current pop matches does not equal current character, push both pop and current character
    // If closing bracket does not match popped value from stack, return "NO"
    // If stack length === 0 when finished, return "YES", otherwise return "NO"

    let stack = [];

    if (s.length % 2 !== 0) {
        return "NO";
    }

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            switch (stack[stack.length - 1]) {
                case "(":
                    if (s[i] === ")") {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                case "{":
                    if (s[i] === "}") {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                case "[":
                    if (s[i] === "]") {
                        stack.pop();
                    } else {
                        stack.push(s[i]);
                    }
                    break;
                default:
                    stack.push(s[i]);
            }
        }
    }
    // console.log("STACK:", stack);

    if (stack.length !== 0) {
        return "NO";
    } else {
        return "YES";
    }
}

console.log("Balanced Brackets");
console.log(isBalanced("{[()]}")); // expect YES
console.log(isBalanced("{{)[](}}")); // expect NO
console.log(isBalanced("{(([])[])[]]}")); // expect NO
console.log(isBalanced("{(([])[])[]}[]")); // expect YES
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
