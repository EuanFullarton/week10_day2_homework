var Park = function(){
  this.enclosure = [];
};

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaurOfType: function(dinosaur){

    for( i=this.enclosure.length-1; i>=0; i--) {
        if( this.enclosure[i].type == dinosaur.type) this.enclosure.splice(i,1);
    }
  },

  empty: function(){
    this.enclosure = [];
  }
};


module.exports = Park;