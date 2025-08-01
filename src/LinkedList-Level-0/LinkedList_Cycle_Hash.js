function LinkedList_Cycle_Hash(head) {
    let curr = head;
    let hash = new Set();

    while (curr) {
        if (hash.has(curr)) return true;
        hash.add(curr);
        curr = curr.next;
    }
    return false;
}