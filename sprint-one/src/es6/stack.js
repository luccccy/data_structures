class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stack = [];
  }

  push(string) {
    this.stack.unshift(string);
  }

  pop() {
    return this.stack.shift();
  }

  size() {
    return this.stack.length;
  }

}