function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}


function addAtHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head; // head next node 
    this.head = newNode; // definitely wrong Bitch.
    this.size++
}

function addNodeAtTail(val) {
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

function addAtIndexNode(val, idx) {
    const newNode = new Node(val);

    if (idx < 0 || idx > this.size) return
    if (idx == 0) {
        addAtHead(val);
        return;
    }
    else if (idx == this.size) {
        addNodeAtTail(val)
        return;
    } else {
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++
}

// test00
