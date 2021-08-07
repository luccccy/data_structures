describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // add more tests here
  it('should correctly detect nested children with multiple nests', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(9);

    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    tree.children[1].addChild(10);

    tree.children[0].children[0].addChild(11);
    tree.children[1].children[0].addChild(12);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(11)).to.equal(true);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(1)).to.equal(false);
    expect(tree.children[0].children[0].children[0].value).to.equal(11);
  });
});

/*
    5          6
[7,     9]   [8, 9, 10]
[11]         [12]
*/

/*
{value: undefined,
  children: [{value: 5, children: [{value: 7, children: []}]},
  {value: 6, children:[{value: 8, children: []}]}]
}
//   [5, 6]
*/

/*
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

//   _.extend(newTree, treeMethods);
//   for (var key in treeMethods) {
//       newTree[key] = treeMethods[key]
//   }
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    this.innerContains = function(target) {
      if (this.children.length !== 0) {
        for (var i = 0; i < this.children.length; i++) {
          return this.children[i].innerContains(target);
        }
      }
    };
    innerContains(target);
    return false;
  }
};

var tree = Tree();
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    console.log(tree.contains(7));
    console.log(tree.contains(8));
*/