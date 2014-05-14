var gen = require('../');
var should = require('chai').should();

describe('color-generator', function() {
  it('should generate a color', function() {
    var hsv = gen().hsv();
    hsv.should.be.an('object');
    hsv.h.should.be.a('number');
    hsv.s.should.equal(50);
    hsv.v.should.equal(95);
    gen().rgbString().should.be.a('string');
  });
  
  it('should take optional saturation and value arguments', function() {
    var hsv = gen(0.8, 0.25).hsv();
    hsv.should.be.an('object');
    hsv.h.should.be.a('number');
    hsv.s.should.equal(80);
    hsv.v.should.equal(25);
  });
  
  it('should generate different colors each time', function() {
    var hsv = gen().hsv();
    var last;
    
    for (var i = 0; i < 10; i++) {
      hsv.should.not.deep.equal(last);
      last = gen().hsv();
    }
  });
});
