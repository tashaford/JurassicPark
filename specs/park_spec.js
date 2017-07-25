var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');


describe('Park', function(){
  var park;
  var dino1 = new Dinosaur("Triceratops", 1);
  var dino2 = new Dinosaur("Velociraptor", 3);
  beforeEach(function(){
    park = new Park();
  });

  it("should have empty enclosure to start", function(){
    assert.strictEqual(park.enclosureCount(), 0);
  });

  it("should be able to add dinosaur", function(){
    park.addDinosaur(dino1);
    assert.strictEqual(park.enclosureCount(), 1);
  });

  it("should be able to remove dinosaurs of a particular type", function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaurs("Triceratops");
    assert.strictEqual(park.enclosureCount(), 1);
  });

  it("should be able to get all the dinosaurs with an offspringPerYear of more thant 2", function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    assert.deepStrictEqual(park.dinosWithLotsOffspring(), [dino2]);
  });

  it("should be able to calculate no of dinosaurs after year one, with 1 dinosaur", function(){
    park.addDinosaur(dino1);
    assert.strictEqual(park.dinoTotalAtYear(1), 2);
  });

  it("should be able to calculate no of dinosaurs after year two, with 1 dinosaur", function(){
    park.addDinosaur(dino1);
    assert.strictEqual(park.dinoTotalAtYear(2), 3);
  });

  it("should be able to calculate no of dinosaurs after year two, with 2 dinosaur", function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    assert.strictEqual(park.dinoTotalAtYear(2), 10);
  });


})