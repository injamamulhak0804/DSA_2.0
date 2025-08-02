function Intersection_Linked_List(headA, headB) {
    let hashMap = new Set();

    while (headB) {
        hashMap.add(headB)
        headB = headB.next;
    }

    while (headA) {
        if (hashMap.has(headA)) return true;
        headA = headA.next;
    }

    return false
}