function Reverse_Linked_List(head) {
    let prev = null
    let curr = head;
    let temp = null;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;

}
Reverse_Linked_List()