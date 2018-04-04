class Node(value) {
    this.data = value;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
}

LL.prototype.insert = function(element) {
    var node = new Node(element);
    var curNode = this.head;

    if(this.head == null) {
        this.head = node;
        this.length++;

        return node;
    }

    while(curNode.next) {
        curNode = curNode.next;
    }
    curNode.next = node;
    this.length++;

    return node;
}

LL.prototype.insertNth = function(element, index) {

}

LL.prototype.contains = function(element) {
    var curNode = this.head;
    for(var i = 0; i < this.length; i++) {
        if(curNode.value == element) {
            return true;
        }
        curNode = curNode.next;
    }
    return false;
}

LL.prototype.print = function() {
    var curNode = this.head;
    while(curNode.next != null) {
        console.log(curNode.value);
        curNode = curNode.next;
    }
    console.log(curNode.value);
}

LL.prototype.getNth = function(index) {
    var curNode = this.head;

    if(index > this.length) {
        throw new Error("This index is greater than the list length");
    }

    for(var i = 0; i <index; i++) {
        curNode = curNode.next;
    }
    return curNode;
}

LL.prototype.pop = function() {
    if(this.length == 0) {
        return null
    }
    var val = this.head.value;
    this.head = this.head.next;
    return val;
}

LL.prototype.reverse = function() {
    var curNode = this.head;
    var prevNode = null;
    var nextNode = this.head;

    while(curNode != null) {
        nextNode = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
    }
    this.head = prevNode;
}
