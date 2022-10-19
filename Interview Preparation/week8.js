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
