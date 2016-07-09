function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BST() {
    this.head = null;
    this.numNodes = 0;
}

BST.prototype.lookup = function(node, value) {

    if(node.value == null) {
        return false;
    } else {
        if(value < node.value) {
            return lookup(node.left, value);
        } else {
            return lookup(node.right, value);
        }
    }
}

BST.prototype.insert = function(value) {
    var n = new Node(value);
    if(this.head == null) {
        this.head = n
    } else {
        var curNode = this.head;
        while(true) {
            if(value < curNode.value) {
                if(curNode.left == null) {
                    curNode.left = n;
                    break;
                }
                curNode = curNode.left;
            } else {
                if(curNode.right == null) {
                    curNode.right = n;
                    break;
                }
                curNode = curNode.right;
            }
        }
    }

}

var testBST = new BST();
testBST.insert(2);
testBST.insert(1);
testBST.insert(3);


console.log(testBST.head);
