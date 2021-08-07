describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  // add more tests here
  it('should have a working "contains" method when multiple random numbers are inserted', function() {
    var generateRandomNumber = function(min, max) {
      return Math.random() * (max - min) + min;
    };

    var rand1 = generateRandomNumber(0, 100);
    var rand2 = generateRandomNumber(0, 100);
    var rand3 = generateRandomNumber(50, 200);
    binarySearchTree.insert(4);
    binarySearchTree.insert(9);
    binarySearchTree.insert(2);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(rand1);
    binarySearchTree.insert(rand2);
    binarySearchTree.insert(rand3);

    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(1)).to.equal(true);
    expect(binarySearchTree.contains(rand1)).to.equal(true);
    expect(binarySearchTree.contains(rand2)).to.equal(true);
    expect(binarySearchTree.contains(rand3)).to.equal(true);

  });
});



//       5
//    4    9
//  2    7
//1

