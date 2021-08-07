var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tailNode = Node(value); // creating a new node in the global scope
    if (list.head === null) {
      list.head = tailNode;
      list.tail = tailNode;
    } else {
      list.tail.next = tailNode;
      list.tail = tailNode;
    }
  };

  list.removeHead = function() {
    var headNode = list.head;
    list.head = list.head.next;
    return headNode.value;
  };

  list.contains = function(target) {
    var pointer = list.head;
    if (list.head === null) {
      return false;
    }
    while (pointer) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
.addToTail: O(1)
.removeHead: O(1)
.contains: O(n)
 */
