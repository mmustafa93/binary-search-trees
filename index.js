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
 
