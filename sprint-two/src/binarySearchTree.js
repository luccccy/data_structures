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
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  } else {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
// .insert: O(log(n));
// .contains: O(log(n));
// .depthFirstLog: O(n);
 */



// var newTree = BinarySearchTree(10);
// newTree.insert(5)



/*


//      8
     /    \
    3       10
   / \        \
  1   6        14
  \  /        /
  4 7        13

*/

// 16  8  4  2  1  log(n)
// O(logn)

/*   1000
999
998
997
996
995
994
993
O(n) = O(h)

*/