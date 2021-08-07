var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  this.innerContains = function() {
    if (this.value === target) {
      result = true;
    }
    var currentChildren = this.children;
    for (var i = 0; i < currentChildren.length; i++) {
      currentChildren[i].innerContains = this.innerContains;
    }
    for (var i = 0; i < currentChildren.length; i++) {
      var currentChild = currentChildren[i];
      currentChild.innerContains();
    }
  };
  var currentChildren = this.children;
  for (var i = 0; i < currentChildren.length; i++) {
    currentChildren[i].innerContains = this.innerContains;
  }
  this.innerContains();
  return result;
};

// // Another implementation without inner function
// treeMethods.contains = function(target) {
//   if (this.value === target) {
//     return true;
//   } else {
//     if (this.children.length !== 0) {
//       var result;
//       for (var i = 0; i < this.children.length; i++) {
//         result = this.children[i].contains(target);
//         if (result) {
//           return result;
//         } else {
//           continue;
//         }
//       }
//     }
//     return false;
//   }
// };



/*
 * Complexity: What is the time complexity of the above functions?
//.addChild: O(1);
//.contains: O(1);
 */

