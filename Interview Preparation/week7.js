{
    /*
    The Bomberman Game
    */
}

console.log("The Bomberman Game");

console.log();

{
    /*
    New Year's Day
    
    It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
    Each person wears a sticker indicating their initial position in the queue from 1 to n. 
    Any person can bribe the person directly in front of them to swap positions, but they still 
    wear their original sticker. One person can bribe at most two others. Determine the minimum 
    number of bribes that took place to get to a given queue order. Print the number of bribes, 
    or, if anyone has bribed more than two people, print Too chaotic.
    */
}

function minimumBribes(q) {
    // Track how many bribes each person makes - if more than 3 return "Two chaotic"
    // Add bribes of all people with positive forward movement to total bribes

    let bribes = 0;
    let position = 0;
    let totalBribes = 0;

    for (let i = 0; i < q.length; i++) {
        bribes = q[position] - (position + 1);

        // If person bribes more than 2 people return too chaotic
        if (bribes > 2) {
            console.log("Too chaotic");
            return;
        }
        // Count the number of moves the person made
        for (let j = q[i] - 2; j <= i; j++) {
            if (q[j] > q[i]) {
                totalBribes++;
            }
        }
        position++;
    }
    console.log(totalBribes);
}

console.log("New Year Chaos");
console.log(minimumBribes([2, 1, 5, 3, 4])); // Expect 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // Expect "Too Chaotic"
console.log();

{
    /*
    Goodland Electricity
    */
}

console.log("Goodland Electricity");

console.log();

{
    /*
    Sherlock and the Valid String
    */
}

console.log("Sherlock and the Valid String");

console.log();

{
    /*
    Climbing the Leaderboard
    */
}

console.log("Climbing the Leaderboard");

console.log();

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new ListNode(5);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(1);

let singlyLinkedList = new LinkedList(node1);

{
    /*
    Reverse a Linked List
    */
}

console.log("Reverse a Linked List");
console.log();
console.log();

{
    /*
    Reverse a Doubly Linked List
    */
}

function reverse(llist) {
    // While the function traverses the list, it swaps the next and previous and then resets the head with the previous (now next) node.
    let head = null;

    while (llist != null) {
        //swap next with previous
        [llist.next, llist.prev] = [llist.prev, llist.next];
        //set the head to the current llist node
        head = llist;
        // Set llist with the previous (now next) node
        llist = llist.prev;
    }

    return head;
}

console.log("Reverse a Doubly Linked List");
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
