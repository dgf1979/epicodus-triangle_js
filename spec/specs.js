describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

describe('triangle', function() {
  it("returns 'invalid' if triangle is not possible", function() {
    expect(triangle(10, 4, 2)).to.equal('invalid');
  });

  it("returns 'equilateral' if triangle is possible and sides are all equal length", function() {
    expect(triangle(3, 3, 3)).to.equal('equilateral');
  });

});
