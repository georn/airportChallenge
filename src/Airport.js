var Airport = function() {

  var DEFAULT_CAPACITY = 51;
  this.hangar = [];
  this.capacity = DEFAULT_CAPACITY;

  Airport.prototype.landingPlane = function (plane) {
    if(this.hangar.length < this.capacity) {
      plane.landAt(this);
      this.hangar.push(plane);
      return "A plane has arrived."
    } else {
      throw("The airport is full.")
    }
  };

  Airport.prototype.overrideCapacity = function (number) {
    this.capacity = number;
  };

};

module.exports = Airport;
