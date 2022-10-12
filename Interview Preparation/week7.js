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

    Goodland is a country with a number of evenly spaced cities along a line. The distance between adjacent cities is 1 unit. 
    There is an energy infrastructure project planning meeting, and the government needs to know the fewest number of power plants 
    needed to provide electricity to the entire list of cities. Determine that number. If it cannot be done, return -1.

    You are given a list of city data. Cities that may contain a power plant have been labeled 1. Others not suitable for building a plant are labeled 0.
    Given a distribution range of k, find the lowest number of plants that must be built such that all cities are served. 
    The distribution range limits supply to cities where distance is less than k.
    */
}

function pylons(k, arr) {
    // If k number of indexes in a row all contain 0 - return -1
    // When a 1 is found, add to count and iterate forward to next section

    let zeroCount = 0;

    // Return -1 if there are too many 0's in a row
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            zeroCount = 0;
        }

        if (zeroCount === 2 * k - 1) {
            return -1;
        }

        if (i === arr.length - 1 && zeroCount >= k) {
            return -1;
        }

        if (i === k && zeroCount >= k) {
            return -1;
        }
    }

    let stationCount = 0;
    let potential = -k;
    let lastValid = -k;

    // Add to stationCount if outside of the range of the last station placed
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            potential = i;
        }
        if (lastValid + (2 * k - 1) === i && lastValid !== potential) {
            stationCount++;
            lastValid = potential;
        }
    }
    // count station in the final position if a 1
    if (
        lastValid !== potential &&
        potential >= 0 &&
        lastValid + k - 1 < arr.length
    ) {
        stationCount++;
    }

    return stationCount;
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
    /*
    Insert a Node to Specific Position - Linked List
    
    */
}

function insertNodeAtPosition(llist, data, position) {
    // Add data to a new node and assign the current node's next to the new node next to the assigned location
    // The new node then becomes the current node's next
    // Use a runner to track the position along the list to insert the new node at the proper location
    let current = llist;
    let currentPosition = 1;

    while (current.next != null) {
        // Insert a new node when the current position along the list = insertion point (position)
        if (currentPosition === position) {
            let newNode = new SinglyLinkedList();
            newNode.data = data;
            console.log("NEW NODE:", newNode.data);
            newNode.next = current.next;
            current.next = newNode;
            break;
        } else {
            // Move along the node while keeping track of location in the list
            current = current.next;
            currentPosition += 1;
            console.log("CURRENT:", current.data);
        }
    }
    // return the head of the list
    return llist;
}

console.log("Insert a Node to Specific Position - Linked List");

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
