var Node = function (val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
}


MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head; // head next node 
    this.head = newNode; // definitely wrong Bitch.
    this.size++
}

MyLinkedList.prototype.addNodeAtTail = function (val) {
    const newNode = new Node(val);
    if (this.head == null) {  // ❎  this.size == 0  => this.head == null 
        this.head = newNode        // ❎ addAtHead(val) wrong
    } else {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode
    }
    this.size++
}

MyLinkedList.prototype.addAtIndexNode = function (val, idx) {
    const newNode = new Node(val);

    if (idx < 0 || idx > this.size) return - 1;
    if (idx == 0) {
        this.addAtHead(val);
        return;
    }
    else if (idx == this.size) {
        this.addNodeAtTail(val)
        return;
    } else {
        let curr = this.head;
        for (let i = 0; i < idx - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++
}

MyLinkedList.prototype.get = function (idx) {
    if (idx < 0 || idx >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
        curr = curr.next
    }
    return curr.val;
}

MyLinkedList.prototype.deleteAtIndex = function (idx) {
    if (idx < 0 || idx >= this.size) return;
    if (idx == 0) this.head = this.head.next;
    else {
        let curr = this.head;
        for (let i = 0; i < idx - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--
}

let list = new MyLinkedList();
list.addAtHead(10);   // Linked list: 10
list.addAtHead(20);   // Linked list: 20 -> 10
list.addNodeAtTail(30);  // Linked list: 20 -> 10 -> 30
list.addAtIndexNode(15, 2);  // Add 15 at index 2
// Linked list: 20 -> 10 -> 15 -> 30
console.log(list.get(0)); // 20
console.log(list.get(2)); // 15
list.deleteAtIndex(1);   // Delete node at index 1 (10 removed)
// Linked list: 20 -> 15 -> 30
console.log(list.size); // 3

