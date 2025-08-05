function OddEven_LinkedList(head) {
    let odd = head;
    let even = head.next;
    let evenStart = even;
    while (even.next && odd.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
}