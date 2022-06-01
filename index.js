class CircularLinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class CircularLinkedList {
    constructor(comparator) {
        this.head = null;
        this.tail = null;
        this.comparator = comparator || function (i, j) {
            if (i<j) return -1;
            if (i>j) return 1;
            return 0;
        };
    };
    prepend(value) {
        let newNode = CircularLinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) this.tail = newNode;
    }
    append(value) {
        let newNode = new CircularLinkedListNode(value);
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
    }
    delete(value) {
        if(!this.head) return;
        while (this.head && this.comparator(this.head.value, value) === 0) {
            this.head = this.head.next;
        }

        let current = this.head;
        if (current !== null) {
            while (current.next) {
                if (this.comparator(current.next.value, value) === 0) {
                    current.next = current.next.next;
                } else {
                    current = current.next;
                }
            }
        }
        if (this.comparator(this.tail.value, value) === 0) {
            this.tail = current;
        }
    }
}