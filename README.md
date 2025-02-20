# Binary Search Tree (BST) Implementation

This project is a simple implementation of a **Binary Search Tree (BST)** in JavaScript. It includes fundamental operations such as insertion, deletion, searching, tree traversal, and checking if the tree is balanced. The tree is built from a sorted array, ensuring it is balanced initially, with methods to rebalance the tree if needed.

---

## 🗂️ **Project Structure**
```
binary-search-trees/
├── index.js       # Main BST implementation
└── README.md      # Project documentation
```

---

## 🚀 **Features**
- **Build Tree:** Constructs a balanced BST from a sorted array.
- **Insert & Delete:** Supports insertion and deletion of nodes while maintaining BST properties.
- **Search:** Locate a specific value in the tree.
- **Traversal:** Supports pre-order, in-order, post-order, and level-order traversal.
- **Height & Depth Calculation:** Computes the height of the tree and the depth of a specific node.
- **Balance Check & Rebalancing:** Checks if the tree is balanced and rebalances if necessary.

---

## ⚙️ **Installation**
1. **Clone the Repository:**
```sh
git clone git@github.com:mmustafa93/binary-search-trees.git
cd binary-search-trees
```

2. **Run the Code:**
```sh
node index.js
```

---

## 📄 **Usage**
The **Driver Script** in `index.js` demonstrates the following steps:
1. Generates 10 random numbers and builds a balanced BST.
2. Prints tree traversals (level, pre, post, in-order).
3. Unbalances the tree by inserting values greater than 100.
4. Rebalances the tree and verifies its balance.

### Example Output
```
Random Numbers: [23, 7, 50, 15, 4, 99, 16, 8, 42, 100]
Is the tree balanced? true
Level Order:
23 7 50 4 15 42 99 8 16 100
...
Unbalanced the tree by adding numbers greater than 100.
Is the tree balanced after unbalancing? false
Tree rebalanced.
Is the tree balanced after rebalancing? true
```

---

## 📚 **Methods**
### `Tree` Class
- **`buildTree(array)`**: Builds a balanced BST from a sorted array.
- **`insert(value)`**: Inserts a new value into the BST.
- **`deleteItem(value)`**: Deletes a node from the BST.
- **`find(value)`**: Searches for a node with the given value.
- **`height(node)`**: Returns the height of a node.
- **`depth(node)`**: Returns the depth of a node.
- **`isBalanced()`**: Checks if the BST is balanced.
- **`reBalance()`**: Rebalances the BST.
- **Traversal Methods:** `levelOrder()`, `preOrder()`, `inOrder()`, `postOrder()`.

### `Node` Class
- **`data`**: The value stored in the node.
- **`left`**: Pointer to the left child node.
- **`right`**: Pointer to the right child node.

---

## 💡 **Concepts Covered**
- Binary Search Tree (BST)
- Recursion
- Tree Traversal Techniques
- Depth-First & Breadth-First Search
- Tree Balancing Techniques

---

## 🧪 **Testing**
To test this code, simply run `node index.js` and observe the console output. You can modify the `generateRandomNumbers` function or the **Driver Script** to test additional scenarios.

---

## 🛠️ **Future Improvements**
- Add unit tests using **Jest** or **Mocha**.
- Implement visualization of the BST structure.
- Add error handling for edge cases.

---

## 📜 **License**
This project is licensed under the MIT License.

---