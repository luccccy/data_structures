class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queue = [];
  }

  enqueue(string) {
    this.queue.push(string);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

}