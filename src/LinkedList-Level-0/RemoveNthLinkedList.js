function RemoveNthLinkedList(head, n) {
    // Two Pass
    // let sentinel = new LinkedList();
    // sentinel.next = head;
    // let length = 0;

    // while (head) {
    //     head = head.next;
    //     length++;
    // }

    // let prev = length - n;
    // let previousNode = sentinel;

    // for (let i = 0; i < prev; i++) {
    //     previousNode = previousNode.next;
    // }
    // previousNode.next = previousNode.next.next;

    // return sentinel.next;

    //One pass
    let sentinel = new LinkedList();
    sentinel.next = head;
    let first = second = sentinel;

    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    while (first.next) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return sentinel.next

}