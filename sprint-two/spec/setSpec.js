describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  //it('should contain different type of values within a set', function() {
  // set.add('Daniel');
  // set.add('Lucy');
  // set.add(30);
  // set.add(true);
  // set.add(undefined);
  // set.add([1, 2, 3]);
  // set.remove('Lucy');
  // expect(set.contains('Lucy')).to.equal(false);
  // expect(set.contains('Daniel')).to.equal(true);
  // expect(set.contains(30)).to.equal(true);
  // expect(set.contains(true)).to.equal(true);
  // expect(set.contains(undefined)).to.equal(true);
  // expect(set.contains([1, 2, 3])).to.equal(true);
  //});


  //More test here:
  it('should remove values from a set', function() {
    set.add('Daniel');
    set.add('Lucy');
    set.add('puppy');
    set.add('lol');
    set.add(':)');
    set.remove('lol');
    expect(set.contains('lol')).to.equal(false);
    expect(set.contains('puppy')).to.equal(true);
  });

});

/*

{
  'trueBool': true
  'true' : "true"
  '9Num': 9
  '9': "9"
  JSON.stringify(obj) : obj
  JSON.stringify(arr) : arr


}


*/