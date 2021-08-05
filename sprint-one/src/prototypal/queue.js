var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.index = 0;
  return queueInstance;
};


var queueMethods = {
  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  },

  dequeue() {
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
  },

  size() {
    return this.index;
  }
};

