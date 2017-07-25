var Park = function(){
  this.enclosure = [];
}

Park.prototype = {

  enclosureCount: function(){
    return this.enclosure.length;
  },

  addDinosaur: function(dino){
    this.enclosure.push(dino);
  },

  removeDinosaurs: function(typeOfDino){
    for (var i = this.enclosure.length - 1 ; i >= 0  ; i--){
      if (this.enclosure[i].type === typeOfDino){
        this.enclosure.splice(i,1);
      }
    }
  },

  dinosWithLotsOffspring: function(){
    dinos = [];
    for (var i = 0; i < this.enclosure.length ; i ++){
      if (this.enclosure[i].offspringPerYear >= 2){
        dinos.push(this.enclosure[i]);
      }
    } return dinos;
  },

  dinoTotalAtYear: function(years){
    count = this.enclosure.length;
    for (var i = 0; i < years ; i ++){
      for (dino of this.enclosure){
        count += dino.offspringPerYear;
      }
    } return count;
  }

  
}

module.exports = Park;