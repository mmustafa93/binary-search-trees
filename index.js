class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array){
        // Remove duplicates and sort the array before building the tree
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
        } 

    buildTreeRecur(array, start, end) {
        if (start > end) return null;

        // Find the middle element
        let mid = start + Math.floor((end - start) / 2);

        // Create root node
        let root = new Node(array[mid]);

        // Create left subtree
        root.left = this.buildTreeRecur(array, start, mid - 1);

        // Create right subtree
        root.right = this.buildTreeRecur(array, mid + 1, end);

        return root;
    }

    buildTree(array) {
        return this.buildTreeRecur(array, 0, array.length - 1)
    }

    insertRecur(root, data){

        if (root === null){
            return new Node(data);
        }
        // Duplicates not allowed
        if (root.data === data){
            return root;
        }

        if (data < root.data)
            root.left = this.insertRecur(root.left, data);
        else if (data > root.data)
            root.right = this.insertRecur(root.right, data);

        return root;
    }

    insert(value) {
        this.root = this.insertRecur(this.root, value);
    }

    getSuccessor(currentNode) {
        currentNode = currentNode.right;
        while (currentNode !== null && currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    deleteRecur(root, data){
        // Base case
        if (root === null) {
            return root;
        }

        // If key to be searched is in a subtree
        if (root.data > data){
            root.left = this.deleteRecur(root.left, data)
        } else if (root.data < data){
            root.right = this.deleteRecur(root.right, data)
        } else {
            // If root matches with the given value

            // Cases when root has 0 children or 
            // only right child
            if (root.left === null){
                return root.right
            }

            // When root has only left child
            if (root.right === null) 
            return root.left;

            // When both children are present
            let successor = this.getSuccessor(root);
            root.data = successor.data;
            root.right = this.deleteRecur(root.right, successor.data)
        }

        return root;
    }

    deleteItem(value){
        this.root = this.deleteRecur(this.root, value); 
    }

    find(value, root = this.root) {
        // Base case: If the tree is empty or we find the value
        if (root === null || root.data === value) {
            return root;
        }
    
        // If the value is smaller, search in the left subtree
        if (value < root.data) {
            return this.find(value, root.left);
        } 
    
        // If the value is larger, search in the right subtree
        return this.find(value, root.right);
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
