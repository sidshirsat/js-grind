class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify handling the merged list
    const dummy = new ListNode();
    let current = dummy;

    // Compare nodes from both lists and merge them
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes from the non-empty list
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // Return the merged list (skipping the dummy node)
    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    const result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> ") + " -> null");
}

// Test cases
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);
