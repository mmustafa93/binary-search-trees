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

    levelOrder(callback) {
        if (this.root === null) return;
    
        if (!callback) {
            throw new Error('A callback is required');
        }
    
        let queue = [this.root];
    
        while (queue.length > 0) {
            let currentNode = queue.shift(); // Dequeue the front node
    
            callback(currentNode); // Call the provided callback function
    
            // Enqueue left and right children if they exist
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    preOrder(node = this.root, callback) {
        if (!callback) {
            throw new Error('A callback is required');
        }
        
        if (node === null) return;
    
        callback(node); // Process root
        this.preOrder(node.left, callback); // Visit left
        this.preOrder(node.right, callback); // Visit right
    }

    inOrder(node = this.root, callback, nodes=[]) {
        if (!callback) {
            throw new Error('A callback is required');
        }
        
        if (node === null) return;
    
        this.inOrder(node.left, callback, nodes); // Visit left
        callback(node, nodes); // Process root
        this.inOrder(node.right, callback, nodes); // Visit right

        return nodes;
    }

    postOrder(node = this.root, callback) {
        if (!callback) {
            throw new Error('A callback is required');
        }
        
        if (node === null) return;
    
        this.postOrder(node.left, callback); // Visit left
        this.postOrder(node.right, callback); // Visit right
        callback(node); // Process root
    }
    
    height(node){
        if (node === null) return -1;
        
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1; // Add 1 for the current edge
    }

    depth(node) {
        let root = this.root;
        let count = 0;
    
        if (node === null) return -1; // If the node is null, return -1 as a marker for invalid input.
    
        while (root !== null) {
            if (node.data === root.data) return count; // Found the node, return the number of edges.
    
            if (node.data < root.data) {
                root = root.left; // Move left if the node’s data is smaller.
            } else {
                root = root.right; // Move right if the node’s data is larger.
            }
    
            count++; // Increment the count for each edge you traverse.
        }
    
        return -1; // Return -1 if the node wasn't found in the tree.
    }

    isBalanced(node = this.root){
        if (node === null) return true; // Base case: An empty tree is balanced.

        let leftTreeHeight = this.height(this.root.left);
        let rightTreeHeight = this.height(this.root.right);

        let heightDiff = Math.abs(leftTreeHeight - rightTreeHeight);

        // The tree is balanced if:
        // 1. The height difference is at most 1
        // 2. The left and right subtrees are also balanced
        return heightDiff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    reBalance(){
        if (this.isBalanced()) return;

        let nodes = this.inOrder(this.root, callback, []);

        this.root = this.buildTree(nodes)
    }
}

const callback = (node, nodes) => {
    nodes.push(node.data)
    console.log(nodes);
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
 
