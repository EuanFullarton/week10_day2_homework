var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

describe("Park", function(){

  beforeEach(function(){
    this.park = new Park();
    this.dinosaur1 = new Dinosaur("T-Rex", 1);
    this.dinosaur2 = new Dinosaur("Triceratops", 3);
    this.dinosaur3 = new Dinosaur("Pterodactyl", 6);
  });

  it("enclosure should start empty", function(){
    assert.equal(0, this.park.enclosure);
  });

  it("should be able to add dinosaur to enclosure", function(){
    this.park.addDinosaur(this.dinosaur1);
    assert.equal(1, this.park.enclosure.length);
  });

  it("should be able to empty enclosure", function(){
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur2);
    this.park.empty();
    assert.equal(0, this.park.enclosure.length);
  });

  it("should be able to remove all dinosaurs of specified type", function(){
    //testing with T-Rex
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur2);
    assert.equal(3, this.park.enclosure.length);
    this.park.removeDinosaurOfType(this.dinosaur1);
    assert.equal(1, this.park.enclosure.length);

    this.park.empty();

    //testing with Triceratops
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur2);
    assert.equal(3, this.park.enclosure.length);
    this.park.removeDinosaurOfType(this.dinosaur2);
    assert.equal(2, this.park.enclosure.length);

  });

  it("should be able to find all dinosaurs with a greater offspring count than 2", function(){
    this.park.addDinosaur(this.dinosaur1);
    this.park.addDinosaur(this.dinosaur2);
    this.park.addDinosaur(this.dinosaur3);
    this.park.addDinosaur(this.dinosaur3);
    assert.equal(3, this.park.findDinosaursWithManyOffspring().length);
  });

});