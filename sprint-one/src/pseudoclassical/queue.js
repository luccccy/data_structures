var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var dequeueVal = this.storage[0];
  for (var i = 0; i < this.index; i++) {
    var temp = this.storage[i + 1];
    this.storage[i] = temp;
  }
  this.index--;
  if (this.index < 0) {
    this.index = 0;
  }
  return dequeueVal;
};

Queue.prototype.size = function() {
  return this.index;
};


