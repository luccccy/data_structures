var HashTable = function() {
  this._limit = 8;
  this.size = 0;
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
  this.size += 1;
  if (this.size > this._limit * 0.75) {
    this.resize(this._limit * 2);
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
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      var cutIndex = i;
      bucket.splice(cutIndex, 1);
      this.size -= 1;
      if (this.size < this._limit * 0.25) {
        this.resize(this._limit / 2);
      }
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;
  this.size = 0;
  this._storage = LimitedArray(this._limit);

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
}; 






































// var HashTable = function() {
//   this._limit = 8;
//   this.size = 0;
//   this._storage = LimitedArray(this._limit);
//   for (var i = 0; i < this._limit; i++) {
//     this._storage.set(i, []);
//   }
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index);
//   var tuple = [k, v];
//   bucket.push(tuple);
//   this.size += 1;
//   if (this.size > this._limit * 0.75) {
//     this.resize(this._limit * 2);
//   }
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index);
//   var result;
//   for (var i = 0; i < bucket.length; i++) {
//     if (bucket[i][0] === k) {
//       result = bucket[i][1];
//     }
//   }
//   return result;
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index);
//   for (var i = 0; i < bucket.length; i++) {
//     if (bucket[i][0] === k) {
//       var cutIndex = i;
//       bucket.splice(cutIndex, 1);
//       this.size -= 1;
//       if (this.size < this._limit * 0.25) {
//         this.resize(this._limit / 2);
//       }
//     }
//   }
// };


// HashTable.prototype.resize = function(newLimit) {
//   var oldStorage = this._storage;
//   this._limit = newLimit;
//   this.size = 0;
//   this._storage = LimitedArray(this._limit);

//   oldStorage.each(function(bucket) {
//     if (bucket.length === 0) {
//       return;
//     }
//     for (var i = 0; i < bucket.length; i++) {
//       var tuple = bucket[i];
//       this.insert(tuple[0], tuple[1]);
//     }
//   }.bind(this));
// };