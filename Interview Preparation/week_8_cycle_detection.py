# Node class
class Node: 
    # constructor
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next

# List class
class Linked_List:
    def __init__(self):
        self.head = None

    # Method to insert a node
    def addNode(self, data):
        new_node = Node(data)
        
        if(self.head):
            current = self.head
            while (current.next):
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
            
    # Method to print list
    def print_list(self):
        current = self.head
        strVal = "["
        index = 0
        while(current):
            strVal += str(index) + ":" + str(current.data) + ", "
            current = current.next
            index+=1
        if (index > 0):
            strVal = strVal[:-2]
        strVal += "]"
        print(strVal)


#print(list1.head.data)



def has_cycle(list):
    # Append nodes to a list
    # Compare the length of the list to the unique values of the list using len(set()) 
    
    
    values = []
    current = list.head
    
    # While loop runs as long as the length of unique values only equal the the length of the array
    while len(set(values)) == len(values) and current != None:
            if not current:
                return 0
            values.append(current)
            current = current.next
    
    return 1

print("Cycle Detection")

list2 = Linked_List()
list2.addNode(1)
list2.addNode(1)
list2.addNode(3)
list2.addNode(1)
list2.addNode(2)
list2.addNode(3)
list2.print_list()

print(has_cycle(list2)) # expect 1