var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Park = require("../park.js");

describe("Park", function(){

  beforeEach(function(){
    this.park = new Park();
  });

  it("enclosure should start empty", function(){
    assert.equal(0, this.park.enclosure);
  });

});