// Instantiate a new graph
var Graph = function() {
  this.adjacentList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.adjacentList[node]) {
    this.adjacentList[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.adjacentList) {
    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.adjacentList[node];
  for (var key in this.adjacentList) {
    var currentArray = this.adjacentList[key];
    for (var i = 0; i < currentArray.length; i++) {
      var nodeIndex = currentArray.indexOf(node);
      if (nodeIndex === -1) {
        continue;
      } else {
        currentArray.splice(nodeIndex, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasEdge = false;
  for (var key in this.adjacentList) {
    if (key === fromNode.toString()) {
      var fromNodeArr = this.adjacentList[key];
      for (var i = 0; i < fromNodeArr.length; i++) {
        if (fromNodeArr[i] === toNode) {
          hasEdge = true;
        }
      }
    }
  }
  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.adjacentList[fromNode].push(toNode);
  this.adjacentList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.adjacentList) {
    if (key === fromNode.toString()) {
      var fromNodeArr = this.adjacentList[key];
      var toNodeIndex = fromNodeArr.indexOf(toNode);
      fromNodeArr.splice(toNodeIndex, 1);
    }
    if (key === toNode.toString()) {
      var toNodeArr = this.adjacentList[key];
      var fromNodeIndex = toNodeArr.indexOf(fromNode);
      toNodeArr.splice(fromNodeIndex, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.adjacentList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
{
  6: [4],
  4: [5, 3],
  5: [4, 2, 1],
  3: [4, 2],
  2: [3, 5, 1],
  1: [5, 2]
}
adjacent
key:       value;
vertex : connected to vertex
*/