class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
        this.numNodes = 0;
    }

    insert(value) {
        let newNode = new Node(value, null, null);
        if(this.root == null){
            this.root = newNode;
        } else {
            var current = this.root;
            var parent;
            while(true) {
                parent = current;
                if(value < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = newNode;
                        break;
                    }
                } else {
                    current = current.right;
                    if(current == null){
                        parent.right = newNode;
                        break;

                    }
                }
            }
        }
        return this.root;
    }

    find(value) {
        var cur = this.root;
        while(cur.data != value){
            if(value < cur.data){
                cur = cur.left;
            } else {
                cur = cur.right;
            }
            if(cur == null){
                return null;
            }
        }
        return cur;
    }

    remove(node, data){
        root = this.removeNode(this.root, data);
    }

    getSmallest(node) {
        var current = node;
        while(current.left != null){
            current = current.left;
        }
        return current;
    }

    removeNode(node, data){
        if(node == null){
            return null;
        }
        if(node.data == data){
            if(node.left == null && node.right == null){
                //node has no children
                return null;
            }
            if(node.left == null){
                //return only child
                return node.right;
            }
            if(node.right == null){
                //return only child
                return node.left;
            }
            //node has both children
            let tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if(data < node.data){
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    inOrder(node) {
        if(!(node == null)){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}
