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
