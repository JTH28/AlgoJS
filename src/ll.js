function Node(value) {
    this.value = value;
    this.next = null;
}

function LL() {
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

LL.prototype.search = function(element) {
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
    console.log(curNode);
}

LL.prototype.reverse = function() {
    var curNode = this.head;
    var prevNode = null;
    var tmp = this.head;
    
    while(tmp != null) {
        tmp = tmp.next;
        curNode.next = prevNode;		
        prevNode = curNode;
    }	
}
