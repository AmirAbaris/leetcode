var LNode = /** @class */ (function () {
    function LNode(value) {
        this.val = value;
        this.next = null;
    }
    return LNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Insert at the beginning (O(1))
    LinkedList.prototype.prepend = function (value) {
        var newNode = new LNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    };
    // Insert at the end (O(1) with tail)
    LinkedList.prototype.append = function (value) {
        // ex: 1 -> 2, new value = 5
        // should be 1 -> 2 -> 5
        // should update tail next and tail should move to new node
        // also handle no node edge case
        var newNode = new LNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
            }
        }
    };
    // Insert at a specific index
    LinkedList.prototype.insert = function (index, value) {
        var newNode = new LNode(value);
        var current = this.head;
        var prev = null;
        // starting idx
        // example of 1 -> 2 , insert(0, 5) -> 5, 1, 2
        if (index === 0) {
            var temp_1 = this.head;
            this.head = newNode;
            this.head.next = temp_1;
            return newNode;
        }
        // ending idx
        if (this.length === index) {
            // example of 1 -> 2 , insert(1, 5) -> 1, 2 -> 5
            var temp_2 = this.tail;
            temp_2.next = newNode;
            this.tail = newNode;
            return newNode;
        }
        // middle idx
        for (var i = 0; i < index; i++) {
            // ex: 2 -> 3 -> 4, insert(5, 1) -> 2 -> 5 -> 3 -> 4
            prev = current;
            current = current.next;
            // prev: 2, curr: 3
        }
        var temp = current;
        prev.next = newNode;
        newNode.next = temp;
        return newNode;
    };
    // Remove the first node
    LinkedList.prototype.removeFirst = function () {
        if (!this.head)
            return undefined;
        // ex: 1, removeFirst() -> null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return this;
        }
        // ex: 1 -> 2 -> 3, removeFirst() -> 2 -> 3
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return this;
    };
    // Remove the last node
    LinkedList.prototype.removeLast = function () {
        if (!this.head)
            return undefined;
        // ex: 1, removeLast(): null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return this;
        }
        // ex: 1 -> 2, removeLast(): 1
        // should get to prev of item we wanna remove
        var current = this.head;
        var prev = null;
        for (var i = 0; i < this.length - 1; i++) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        prev.next = null;
        return this;
    };
    // Remove a node by index
    LinkedList.prototype.remove = function (index) { };
    // Remove the first node with the given value
    LinkedList.prototype.removeValue = function (value) { };
    // Update the value at an index
    LinkedList.prototype.set = function (index, value) { };
    // Find the index of a value
    LinkedList.prototype.find = function (value) { };
    // Check if a value exists
    LinkedList.prototype.contains = function (value) { };
    // Reverse the linked list
    LinkedList.prototype.reverse = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        var prev = null;
        var oldHead = this.head;
        while (current) {
            // ex: 1 -> 2 -> 3
            var next = current.next; // next is 2
            current.next = prev; // 1.next = null: 1 -> null
            prev = current; // prev = 1
            current = next; // curr: 2
        }
        this.head = prev;
        this.tail = oldHead;
        return this;
    };
    // Return the number of nodes
    LinkedList.prototype.size = function () { };
    // Check if the list is empty
    LinkedList.prototype.isEmpty = function () { };
    // Remove all nodes
    LinkedList.prototype.clear = function () { };
    // Print all values (or return them as an array)
    LinkedList.prototype.print = function () {
        console.log(this);
    };
    // Convert the list to an array
    LinkedList.prototype.toArray = function () { };
    return LinkedList;
}());
var list = new LinkedList();
list.append("1");
list.append("2");
console.log("before rev");
list.print();
console.log("after rev");
list.reverse();
list.print();
