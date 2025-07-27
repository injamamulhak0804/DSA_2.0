// function Middle_Linked_List(head) {
//     let count = 0;
//     let temp = head;

//     while (temp) {
//         temp = temp.next
//         count += 1
//     }

//     let middleNumber = Math.floor(count / 2);

//     let curr = head;
//     for (let i = 0; i < middleNumber; i++) {
//         curr = curr.next;
//     }
//     return curr

// }


// function Middle_Linked_List(head) {
//     let array = [];
//     while (head) {
//         array.push(head.val);
//         head = head.next
//     }
//     return array[Math.floor(array.length / 2)]
// }


function Middle_Linked_List(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

Middle_Linked_List()