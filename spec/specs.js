<<<<<<< HEAD
describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

describe('triangle', function() {
  it("returns 'invalid' if triangle is not possible", function() {
    expect(triangle(10, 4, 2)).to.equal('invalid');
  });
=======
describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    expect(leapYear(2012)).to.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisble by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });

>>>>>>> b15f126d10083a9096e4a8c4df4100f80da40464
});
