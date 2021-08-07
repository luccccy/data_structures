
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);// this._storage = []; { []};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  var tuple = [k, v];
  if (currentBucket === undefined) {
    var newBucket = [];
    newBucket.push(tuple);
    this._storage.set(index, newBucket);
  } else {
    currentBucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  } else {
    var result;
    for (var i = 0; i < bucket.length; i++) {
      var currentTuple = bucket[i];
      if (currentTuple[0] === k) {
        result = currentTuple[1];
      }
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var currentTuple = bucket[i];
      if (currentTuple[0] === k) {
        currentTuple[1] = undefined;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
//.insert: O(1);
//.retrieve: "Amortized" O(1)
//.remove: O(1);
 */



/*

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);// this._storage = []; { []};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create another array
  // insert array..
  // insert "v"
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};
*/