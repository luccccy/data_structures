var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value; // --> "root"
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  if (newTree.value < this.value) {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {


};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

// var newTree = BinarySearchTree(10);
// newTree.insert(5)











/*


//    8
  3       10
1   6        14
  4  7     13

*/



































/*
 * Complexity: What is the time complexity of the above functions?
 */
