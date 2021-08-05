var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var dequeueVal = storage[0];
    for (var i = 0; i < index; i++) {
      var temp = storage[i + 1];
      storage[i] = temp;
    }
    index--;
    if (index < 0) {
      index = 0;
    }
    return dequeueVal;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
