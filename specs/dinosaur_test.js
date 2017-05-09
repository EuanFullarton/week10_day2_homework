var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function(){

  beforeEach(function(){
    this.dinosaur1 = new Dinosaur("T-Rex", 2);
    this.dinosaur2 = new Dinosaur("Triceratops", 3);
    this.dinosaur3 = new Dinosaur("Pterodactyl", 6);
  });

  it("should have a type", function(){
    assert.equal("T-Rex", this.dinosaur1.type);
  });

  it("should have a number of yearly offspring", function(){
    assert.equal(6, this.dinosaur3.offspring_per_year);
  });


});