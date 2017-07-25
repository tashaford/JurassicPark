var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 1);
  });

  it("should be able to get type", function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });

  it("should be able to get no of offspring per year", function(){
    assert.strictEqual(dinosaur.offspringPerYear, 1);
  });

})